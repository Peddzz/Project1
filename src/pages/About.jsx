import { useState } from 'react';
import './About.css';

// Import default profile image from assets folder
import defaultProfile from '../assets/hero.png';

function About() {
  const [profileSrc, setProfileSrc] = useState(defaultProfile);
  const [isHover, setIsHover] = useState(false);

  const handleImageError = () => {
    // If image fails to load, keep current or show default
    setProfileSrc(defaultProfile);
  };

  return (
    <div className="about page-enter">
      <section className="about-header">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">เกี่ยวกับเรา</span>
            <h1 className="section-title">ผู้จัดทำ</h1>
            <p className="section-desc">ข้อมูลเกี่ยวกับผู้พัฒนาเว็บไซต์แนะนำสถานที่ท่องเที่ยวจังหวัดสระบุรี</p>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <div
                className="profile-image"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
              >
                <img
                  src={profileSrc}
                  alt="Pheerawat Wuthiso"
                  className="profile-img"
                  onError={handleImageError}
                />
                {isHover && (
                  <label className="profile-img-overlay" htmlFor="profile-upload">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                    <span>เปลี่ยนรูป</span>
                  </label>
                )}
              </div>
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setProfileSrc(event.target?.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <div className="profile-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>

            <h2 className="profile-name">Pheerawat Wuthiso</h2>
            <p className="profile-role">นักพัฒนาเว็บไซต์</p>

            <div className="profile-divider"></div>

            <div className="profile-info">
              <div className="info-item">
                <div className="info-icon email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">อีเมล</span>
                  <span className="info-value">pheerawatwuthiso6@gmail.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">เบอร์โทรศัพท์</span>
                  <span className="info-value">065-591-2613</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">ที่อยู่</span>
                  <span className="info-value">จังหวัดสระบุรี ประเทศไทย</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-description">
            <h3>เกี่ยวกับโครงการ</h3>
            <p>
              เว็บไซต์นี้ถูกพัฒนาขึ้นเพื่อแนะนำสถานที่ท่องเที่ยวที่น่าสนใจในจังหวัดสระบุรี
              ให้กับนักท่องเที่ยวทั้งชาวไทยและชาวต่างชาติ โดยรวบรวมข้อมูลสถานที่ท่องเที่ยวสำคัญ
              พร้อมรูปภาพและคำอธิบาย เพื่อเป็นแนวทางในการวางแผนการเดินทาง
            </p>
            <p>
              เทคโนโลยีที่ใช้ในการพัฒนาได้แก่ React, Vite.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;