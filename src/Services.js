import React from 'react';
import computer from './images/computer.jpg'
import spoken from './images/spoken.jpg'
import spoken2 from './images/spoken2.jpg'
function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <h1>Our Services</h1>
          <div className="line"></div>
        </div>
        <div className="services">
          <div className="service">
          <img src={computer} height={300} width={300}/>
            <h3>Computer Courses</h3>
            <p>Ms Office, Python, Tally 9 ERP with GST, C++, PHP, HTML, JAVA, Dot Net, MySQL, PhotoShop, Coreldraw, DTP, DCS, PGDCA, Full Stack Development.</p>
          </div>
          <div className="service">
          <img src={spoken} height={300} width={300}/>
            <h3>Spoken English</h3>
            <p>*Specially Designed for Tamil Medium Students.<br />*British Council Certification.<br />*Fluency is Guaranteed.</p>
          </div>
          <div className="service">
          <img src={spoken2} height={300} width={300}/>
            <h3>Online Classes</h3>
            <p>Online Classes for Spoken English & Computer Courses.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;