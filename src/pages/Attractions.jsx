import './Attractions.css';

const attractions = [
  {
    id: 1,
    name: 'วัดพระพุทธฉาย',
    description: 'วัดพระพุทธฉายเป็นวัดเก่าแก่ที่มีพระพุทธรูปแกะสลักบนหน้าผา ตั้งอยู่บนเขาพระพุทธฉาย เป็นสถานที่ศักดิ์สิทธิ์ที่ชาวสระบุรีให้ความเคารพนับถือ มีประวัติศาสตร์ยาวนานตั้งแต่สมัยอยุธยา',
    location: 'ตำบลหนองปลาไหล อำเภอเมือง จังหวัดสระบุรี',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%89%E0%B8%B2%E0%B8%A2_1.jpg',
    mapUrl: 'https://maps.google.com/?q=วัดพระพุทธฉาย+สระบุรี',
  },
  {
    id: 2,
    name: 'น้ำตกเจ็ดสาวน้อย',
    description: 'น้ำตกเจ็ดสาวน้อยเป็นน้ำตกหินปูนที่มีทั้งหมด 7 ชั้น แต่ละชั้นมีความสวยงามแตกต่างกันไป รายล้อมด้วยธรรมชาติอันร่มรื่น เหมาะสำหรับการพักผ่อนและเล่นน้ำ',
    location: 'ตำบลมวกเหล็ก อำเภอมวกเหล็ก จังหวัดสระบุรี',
    image: 'https://s359.thaicdn.net//pagebuilder/68f5c3f8-7d23-4726-9069-e1c1779415e6.jpg',
    mapUrl: 'https://maps.google.com/?q=น้ำตกเจ็ดสาวน้อย+สระบุรี',
  },
  {
    id: 3,
    name: 'อุทยานแห่งชาติน้ำตกสามหลั่น',
    description: 'อุทยานแห่งชาติน้ำตกสามหลั่นเป็นอุทยานแห่งชาติที่มีน้ำตกสวยงาม 3 ชั้น มีพื้นที่ป่าไม้ที่อุดมสมบูรณ์ เหมาะสำหรับการเดินป่า ศึกษาธรรมชาติ และชมวิวทิวทัศน์',
    location: 'ตำบลหนองปลาไหล อำเภอแก่งคอย จังหวัดสระบุรี',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B9%88%E0%B8%99.jpg/960px-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B9%88%E0%B8%99.jpg',
    mapUrl: 'https://maps.google.com/?q=อุทยานแห่งชาติน้ำตกสามหลั่น+สระบุรี',
  },
  {
    id: 4,
    name: 'ทุ่งทานตะวัน จังหวัดสระบุรี',
    description: 'ทุ่งทานตะวันเป็นแหล่งท่องเที่ยวชื่อดังของจังหวัดสระบุรี ในช่วงฤดูหนาวจะมีดอกทานตะวันบานสะพรั่งเต็มท้องทุ่ง สร้างทัศนียภาพที่สวยงามตระการตา เป็นจุดถ่ายภาพยอดนิยม',
    location: 'ตำบลหินซ้อน อำเภอแก่งคอย จังหวัดสระบุรี',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEn1iMSUOAQ6n_zENvEALVFw215bbbPC7r4Qf8uf1GF2d549emBrp_ftsuiFqYOkmjzsUjn41aZEEvAUxk2kYdvN5yrXh1THjR2xdFSPn5pnCDTisvChSeSlTZKyIief7aTaS-W=w408-h306-k-no',
    mapUrl: 'https://maps.google.com/?q=ทุ่งทานตะวัน+สระบุรี',
  },
];

function Attractions() {
  return (
    <div className="attractions page-enter">
      {/* Header */}
      <section className="attractions-header">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">สถานที่แนะนำ</span>
            <h1 className="section-title">สถานที่ท่องเที่ยวจังหวัดสระบุรี</h1>
            <p className="section-desc">
              4 สถานที่ท่องเที่ยวที่ไม่ควรพลาดเมื่อมาเยือนจังหวัดสระบุรี
            </p>
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="attractions-grid-section">
        <div className="container">
          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.id}
                className="attraction-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-image">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    loading="lazy"
                  />
                  <div className="card-number">0{attraction.id}</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{attraction.name}</h3>
                  <p className="card-description">{attraction.description}</p>
                  <div className="card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{attraction.location}</span>
                  </div>
                  <a
                    href={attraction.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    เปิดใน Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Attractions;