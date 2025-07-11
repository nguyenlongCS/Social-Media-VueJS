CREATE DATABASE MangXaHoi;
USE MangXaHoi;

-- Bảng NGUOIDUNG sử dụng Firebase UID làm khóa chính
CREATE TABLE NGUOIDUNG (
    MaND VARCHAR(50) PRIMARY KEY,           -- Firebase UID (ví dụ: "kX9mP2nQ8rT5vW7y")
    TenND VARCHAR(100) NOT NULL,            -- Tên hiển thị
    Email VARCHAR(255) NOT NULL,            -- Email từ Firebase Auth  (có thể trùng)
--  MatKhau VARCHAR(255),                   -- Firebase đã giữ Auth 
    AnhDaiDien TEXT,                        -- URL Firebase storage
    TieuSu TEXT,                            -- Tiểu sử người dùng
    GioiTinh ENUM('Nam', 'Nu', 'Khac'),     -- Giới tính
    DiaChi TEXT,                            -- Địa chỉ
    -- Metadata từ Firebase Auth
    NgayTao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    -- Ngày tạo tài khoản
    LanDangNhapCuoi TIMESTAMP,                      -- Lần đăng nhập cuối
    TrangThai ENUM('Active', 'Suspended', 'Deleted') DEFAULT 'Active',
    -- Thông tin provider (Google, Facebook, Email)
    LoginProvider ENUM('email', 'google', 'facebook') NOT NULL,
    -- Timestamps
    NgayCapNhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- Indexes
    INDEX idx_email (Email),
    INDEX idx_provider (LoginProvider),
    INDEX idx_status (TrangThai),
    INDEX idx_created (NgayTao)
);

-- Bảng BAIDANG liên kết với NGUOIDUNG
CREATE TABLE BAIDANG (
    MaBD INT AUTO_INCREMENT PRIMARY KEY,
    MaND VARCHAR(50) NOT NULL,              -- Firebase UID
    NoiDung TEXT,
    AnhVideo TEXT,                          -- URL Firebase Storage
    LoaiFile VARCHAR(50),                   -- image/video/audio
    TenFile VARCHAR(255),
    DuongDanStorage TEXT,                   -- Firebase Storage path
    SoLike INT DEFAULT 0,
    SoBinhLuan INT DEFAULT 0,
    NgayTao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    NgayCapNhat TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    TrangThai ENUM('Public', 'Private', 'Deleted') DEFAULT 'Public',
    
    -- Foreign key constraint
    FOREIGN KEY (MaND) REFERENCES NGUOIDUNG(MaND) ON DELETE CASCADE
);

SHOW TABLES;
SELECT * FROM NGUOIDUNG;


