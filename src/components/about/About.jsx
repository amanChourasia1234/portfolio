import React from 'react';
import './about.css';
import MeAbout from '../../assets/me-about.jpg';
import me2 from '../../assets/me2.png';
import { GiOpenFolder } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaTrophy } from 'react-icons/fa';
const About = () => {
  return (
    <section id="about" className="container">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className=" about-container">
        <div className=" about-me">
          <div className="about-me-img">
            <img className="about-me-img" src={me2} alt="me about" />
          </div>
        </div>
        <div className="about-content">
          {/* <div className="about-cards">
            <article className="about-card">
              <FaTrophy className="about-card-icon" />
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>
            <article className="about-card">
              <GiOpenFolder className="about-card-icon" />
              <h5>Projects</h5>
              <small>50+ Projects</small>
            </article>
            <article className="about-card">
              <BsPeopleFill className="about-card-icon" />
              <h5>Clients</h5>
              <small>30+ worldwide</small>
            </article>
          </div> */}
          <p className="desc">
            My name is Aman Chourasia . I am a final year BE student in
            information technology from atharva college of engineering . My
            Current cgpa is 8.5 . I had Completed my Diploma from Pravin Patil
            College of Diploma Engineering and Technology with 91 percentage. I
            have done 2 internship , one at RC Diamonds as a web developer and
            Second at LetsGrowMore as a web developer . In that intership i have
            Learned about wordpress and created many project using word press
            including blog site and ecommerce websites .
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
