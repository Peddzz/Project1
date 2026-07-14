import { useState } from 'react';
import './Login.css';
import usersData from '../jojo.json';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    setLoading(true);

    // Check credentials from jojo.json
    setTimeout(() => {
      const user = usersData.find(
        (u) => u.email === email.trim() && u.password === password
      );

      if (user) {
        onLogin({ email: user.email, name: user.name, role: user.role });
      } else {
        setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left - Login Form */}
        <div className="login-left">
          <div className="login-header">
            <div className="logo-small">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>สระบุรี ทัวร์</span>
            </div>
            <h1>ยินดีต้อนรับ</h1>
            <p>กรุณาเข้าสู่ระบบเพื่อเข้าใช้งานเว็บไซต์</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <div className="login-error">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="login-email">อีเมล</label>
              <div className="input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                <input
                  id="login-email"
                  type="email"
                  placeholder="กรุณากรอกอีเมล"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="login-password">รหัสผ่าน</label>
              <div className="input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <input
                  id="login-password"
                  type="password"
                  placeholder="กรุณากรอกรหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>จดจำฉัน</span>
              </label>
              <a href="#" className="forgot-password" onClick={(e) => e.preventDefault()}>
                ลืมรหัสผ่าน?
              </a>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                'กำลังเข้าสู่ระบบ...'
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  เข้าสู่ระบบ
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>เข้าสู่ระบบเพื่อค้นพบสถานที่ท่องเที่ยวในจังหวัดสระบุรี</p>
          </div>
        </div>

        {/* Right - Branding */}
        <div className="login-right">
          <div className="login-right-content">
            <svg className="login-right-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <h2>สระบุรี ทัวร์</h2>
            <p>
              แนะนำสถานที่ท่องเที่ยวที่น่าสนใจในจังหวัดสระบุรี
              พร้อมข้อมูลและรูปภาพที่ครบครัน
            </p>
            <div className="decorative-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;