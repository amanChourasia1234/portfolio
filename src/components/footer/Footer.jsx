import React from 'react';
import './footer.css';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <section className=" footer-container">
      <div className="footer-container1">
        <a href="#" className="footer-logo">
          AMAN CHOURASIA
        </a>
        <div className="footer-pages">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Skills</a>
          {/* <a href="#service">Services</a> */}
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com/">
            <ImFacebook2 className="footer-social-logo" />
          </a>
          <a href="https://www.instagram.com/aman__chourasia_/">
            <FaInstagramSquare className="footer-social-logo" />
          </a>
          <a href="https://twitter.com">
            <FaTwitterSquare className="footer-social-logo" />
          </a>
          <a href="https://github.com/amanChourasia1234">
            <FaGithub className="footer-social-logo" />
          </a>
          <a href="https://www.linkedin.com/in/amanchourasia2002/">
            <FaLinkedin className="footer-social-logo" />
          </a>
        </div>
        <div className="copyright">
          <FaRegCopyright className="copyright-logo" />
          <h5 className="copyright-heading">
            Aman Chourasia . All right reserved
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Footer;
