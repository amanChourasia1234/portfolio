import React from 'react';
import './header.css';
import CV from '../../assets/resume1.pdf';
import ME2 from '../../assets/me2.png';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header>
      <div className="container container-header">
        <h5>Hello I'am</h5>
        <h2>Aman Chourasia</h2>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
        <HeaderSocial />
        <div className="me">
          <img src={ME2} alt="me" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
