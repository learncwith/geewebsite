import React from 'react';
import gee from './images/gee.jpg'
import menu from './images/menu.jpg'

function Header() {
  const handleMenuClick = () => {
    document.querySelector(".nav-list").classList.toggle("active");
  };

  return (
    <header id="main">
      <div className="container">
        <nav>
          <img src={gee} alt='' className="logo"/>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Spoken English</a></li>
            <li><a href="#">Computer Courses</a></li>
            <li><a href="#">Online Classes</a></li>
            <li><button className="btn btn-secondary">9092123113</button></li>
          </ul>
          <img src={menu} alt='' className='menu-btn' height={50} width={50}  onClick={handleMenuClick} />
        </nav>
      </div>
    </header>
  );
}

export default Header;