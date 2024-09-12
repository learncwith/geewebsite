import React from 'react';
import gee from './images/gee.jpg'


function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <img src={gee} height={100} width={100} />
        <p><i className="fa-brands fa-square-instagram"></i> geecomputers</p>
        <p><i className="fa-brands fa-youtube"></i> Gee Computers</p>
        <p><i className="fa-brands fa-facebook"></i> Learn with Gee</p>
      </div>
      <div className="address">
        <p>593/14, Main Road, Opposite Bus Stand, Annai Jewellers Upstairs,<br />Kovilpatti-628502 Ph: 04632 228622, 9486629601</p>
      </div>
    </footer>
  );
}

export default Footer;