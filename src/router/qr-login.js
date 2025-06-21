// -----------------------------------------------------------

// router/qr-login.js
const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../public/.env') });

const router = express.Router();

// In-memory store for QR sessions (in production, use Redis or Database)
const qrSessions = new Map();

// JWT secret từ environment variables
const JWT_SECRET = process.env.JWT_SECRET;

// Kiểm tra JWT_SECRET có tồn tại không
if (!JWT_SECRET) {
  console.error('JWT_SECRET is not defined in environment variables');
  process.exit(1);
}

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { 
      userId: user.id, 
      email: user.email,
      name: user.name,
      iat: Math.floor(Date.now() / 1000)
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Helper function to check if session is expired
const isSessionExpired = (session) => {
  return Date.now() > session.expires;
};

// Helper function to validate sessionId format
const isValidSessionId = (sessionId) => {
  return /^qr_\d+_[a-z0-9]+$/i.test(sessionId);
};

// GET /api/qr-login/status/:sessionId
// Check QR login status
router.get('/status/:sessionId', (req, res) => {
  try {
    const { sessionId } = req.params;
    
    if (!sessionId || !isValidSessionId(sessionId)) {
      return res.status(400).json({
        success: false,
        error: 'Valid Session ID is required'
      });
    }
    
    const session = qrSessions.get(sessionId);
    
    if (!session) {
      return res.status(404).json({
        success: false,
        status: 'not_found',
        error: 'QR session not found'
      });
    }
    
    // Check if session is expired
    if (isSessionExpired(session)) {
      qrSessions.delete(sessionId);
      return res.json({
        success: true,
        status: 'expired',
        message: 'QR session has expired'
      });
    }
    
    // Return current session status
    const response = {
      success: true,
      status: session.status,
      sessionId: sessionId,
      createdAt: session.createdAt,
      expires: session.expires
    };
    
    // Include additional data based on status
    switch (session.status) {
      case 'confirmed':
        response.token = session.token;
        response.user = session.user;
        response.redirectUrl = session.redirectUrl || '/dashboard';
        // Clean up session after successful login
        qrSessions.delete(sessionId);
        break;
        
      case 'scanned':
        response.message = 'QR code has been scanned, waiting for user confirmation';
        response.scannedAt = session.scannedAt;
        response.deviceInfo = session.deviceInfo;
        break;
        
      case 'cancelled':
        response.message = 'Login was cancelled by user';
        response.cancelledAt = session.cancelledAt;
        // Clean up cancelled session after 3 seconds
        setTimeout(() => {
          qrSessions.delete(sessionId);
        }, 3000);
        break;
        
      default:
        response.message = 'Waiting for QR code to be scanned';
    }
    
    res.json(response);
    
  } catch (error) {
    console.error('QR status check error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// POST /api/qr-login/scan
// Called when any QR scanner scans the code
router.post('/scan', (req, res) => {
  try {
    const { sessionId, deviceInfo, userAgent } = req.body;
    
    if (!sessionId || !isValidSessionId(sessionId)) {
      return res.status(400).json({
        success: false,
        error: 'Valid Session ID is required'
      });
    }
    
    const session = qrSessions.get(sessionId);
    
    if (!session) {
      return res.status(404).json({
        success: false,
        error: 'QR session not found or expired'
      });
    }
    
    if (isSessionExpired(session)) {
      qrSessions.delete(sessionId);
      return res.status(410).json({
        success: false,
        error: 'QR session has expired'
      });
    }
    
    // Update session status to scanned
    session.status = 'scanned';
    session.scannedAt = Date.now();
    session.deviceInfo = deviceInfo || 'Unknown device';
    session.userAgent = userAgent || req.get('User-Agent');
    session.attempts = (session.attempts || 0) + 1;
    
    qrSessions.set(sessionId, session);
    
    res.json({
      success: true,
      message: 'QR code scanned successfully',
      sessionId: sessionId,
      requiresConfirmation: true,
      confirmUrl: `${req.protocol}://${req.get('host')}/qr-confirm/${sessionId}`
    });
    
  } catch (error) {
    console.error('QR scan error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// POST /api/qr-login/confirm
// Called when user confirms login
router.post('/confirm', async (req, res) => {
  try {
    const { sessionId, userId, action, deviceInfo } = req.body;
    
    if (!sessionId || !isValidSessionId(sessionId)) {
      return res.status(400).json({
        success: false,
        error: 'Valid Session ID is required'
      });
    }
    
    const session = qrSessions.get(sessionId);
    
    if (!session) {
      return res.status(404).json({
        success: false,
        error: 'QR session not found or expired'
      });
    }
    
    if (isSessionExpired(session)) {
      qrSessions.delete(sessionId);
      return res.status(410).json({
        success: false,
        error: 'QR session has expired'
      });
    }
    
    if (session.status !== 'scanned') {
      return res.status(400).json({
        success: false,
        error: 'QR code must be scanned first'
      });
    }
    
    if (action === 'cancel') {
      // User cancelled the login
      session.status = 'cancelled';
      session.cancelledAt = Date.now();
      qrSessions.set(sessionId, session);
      
      return res.json({
        success: true,
        message: 'Login cancelled successfully'
      });
    }
    
    if (!userId) {
      return res.status(400).json({
        success: false,
        error: 'User ID is required for confirmation'
      });
    }
    
    // Fetch user data
    const user = await getUserById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Generate JWT token
    const token = generateToken(user);
    
    // Update session with confirmation
    session.status = 'confirmed';
    session.confirmedAt = Date.now();
    session.userId = userId;
    session.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar
    };
    session.token = token;
    session.loginDeviceInfo = deviceInfo;
    
    qrSessions.set(sessionId, session);
    
    res.json({
      success: true,
      message: 'Login confirmed successfully',
      sessionId: sessionId,
      user: session.user
    });
    
  } catch (error) {
    console.error('QR confirm error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// POST /api/qr-login/initialize
// Initialize QR session (called when QR is generated)
router.post('/initialize', (req, res) => {
  try {
    const { sessionId, expires, metadata } = req.body;
    
    if (!sessionId || !isValidSessionId(sessionId)) {
      return res.status(400).json({
        success: false,
        error: 'Valid Session ID is required'
      });
    }
    
    // Check if session already exists
    if (qrSessions.has(sessionId)) {
      return res.status(409).json({
        success: false,
        error: 'Session already exists'
      });
    }
    
    // Create new QR session
    const session = {
      sessionId,
      status: 'pending',
      createdAt: Date.now(),
      expires: expires || (Date.now() + 5 * 60 * 1000), // 5 minutes default
      attempts: 0,
      metadata: metadata || {},
      ipAddress: req.ip || req.connection.remoteAddress
    };
    
    qrSessions.set(sessionId, session);
    
    res.json({
      success: true,
      message: 'QR session initialized successfully',
      sessionId: sessionId,
      expires: session.expires,
      qrData: {
        action: 'login',
        sessionId: sessionId,
        timestamp: session.createdAt,
        expires: session.expires,
        url: `${req.protocol}://${req.get('host')}/qr-login/${sessionId}`
      }
    });
    
  } catch (error) {
    console.error('QR initialize error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// GET /api/qr-login/sessions
// Get all active sessions (for debugging/admin)
router.get('/sessions', (req, res) => {
  try {
    const sessions = Array.from(qrSessions.entries()).map(([id, session]) => ({
      sessionId: id,
      status: session.status,
      createdAt: session.createdAt,
      expires: session.expires,
      isExpired: isSessionExpired(session),
      attempts: session.attempts
    }));
    
    res.json({
      success: true,
      sessions: sessions,
      totalSessions: sessions.length
    });
    
  } catch (error) {
    console.error('Get sessions error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// DELETE /api/qr-login/session/:sessionId
// Manually delete a session
router.delete('/session/:sessionId', (req, res) => {
  try {
    const { sessionId } = req.params;
    
    if (!sessionId || !isValidSessionId(sessionId)) {
      return res.status(400).json({
        success: false,
        error: 'Valid Session ID is required'
      });
    }
    
    const deleted = qrSessions.delete(sessionId);
    
    if (deleted) {
      res.json({
        success: true,
        message: 'Session deleted successfully'
      });
    } else {
      res.status(404).json({
        success: false,
        error: 'Session not found'
      });
    }
    
  } catch (error) {
    console.error('Delete session error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Cleanup expired sessions periodically
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  let cleanedCount = 0;
  
  for (const [sessionId, session] of qrSessions.entries()) {
    if (now > session.expires) {
      qrSessions.delete(sessionId);
      cleanedCount++;
    }
  }
  
  if (cleanedCount > 0) {
    console.log(`Cleaned up ${cleanedCount} expired QR sessions`);
  }
}, 60000); // Clean up every minute

// Graceful shutdown
process.on('SIGTERM', () => {
  clearInterval(cleanupInterval);
  console.log('QR Login service shutting down gracefully');
});

// Enhanced mock function to get user by ID
async function getUserById(userId) {
  // Simulate database lookup delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Mock user database
  const mockUsers = {
    '1': {
      id: '1',
      email: 'john.doe@example.com',
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      role: 'user',
      createdAt: '2024-01-15T00:00:00Z'
    },
    '2': {
      id: '2', 
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
      role: 'admin',
      createdAt: '2024-02-10T00:00:00Z'
    },
    '3': {
      id: '3',
      email: 'admin@example.com', 
      name: 'Admin User',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
      role: 'super_admin',
      createdAt: '2024-01-01T00:00:00Z'
    }
  };
  
  const user = mockUsers[userId];
  if (!user) {
    return null;
  }
  
  // Return user without sensitive data
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    role: user.role,
    createdAt: user.createdAt
  };
}

// Export router
module.exports = router;

// -----------------------------------------------------------

// server.js (Express app setup example)
/*
const express = require('express');
const cors = require('cors');
const qrLoginRouter = require('./router/qr-login');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/qr-login', qrLoginRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`QR Login API available at http://localhost:${PORT}/api/qr-login`);
});
*/