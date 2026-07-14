import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home page-enter">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">ยินดีต้อนรับสู่</div>
          <h1 className="hero-title">จังหวัดสระบุรี</h1>
          <p className="hero-subtitle">
            สัมผัสประสบการณ์ท่องเที่ยวสุดประทับใจ กับธรรมชาติที่งดงาม
            <br />
            และสถานที่ศักดิ์สิทธิ์คู่บ้านคู่เมือง
          </p>
          <Link to="/attractions" className="hero-btn">
            <span>เริ่มต้นเที่ยวชม</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">ทำไมต้องสระบุรี</span>
            <h2 className="section-title">แหล่งท่องเที่ยวที่หลากหลาย</h2>
            <p className="section-desc">
              จังหวัดสระบุรีเต็มไปด้วยสถานที่ท่องเที่ยวทางธรรมชาติ วัดวาอาราม และวัฒนธรรมที่น่าสนใจ
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon nature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>ธรรมชาติสวยงาม</h3>
              <p>น้ำตก ภูเขา และทุ่งทานตะวัน ที่รอให้คุณไปสัมผัส</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon culture">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3>วัดและสถานที่ศักดิ์สิทธิ์</h3>
              <p>วัดพระพุทธฉาย และสถานที่สำคัญทางประวัติศาสตร์</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon food">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 010 8h-1" />
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <h3>อาหารท้องถิ่น</h3>
              <p>ลิ้มลองอาหารพื้นเมืองรสชาติอร่อยไม่เหมือนใคร</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>พร้อมที่จะออกเดินทางหรือยัง?</h2>
            <p>มาเริ่มต้นการผจญภัยของคุณที่จังหวัดสระบุรีกันเถอะ!</p>
            <Link to="/attractions" className="cta-btn">
              ดูสถานที่ท่องเที่ยวทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;