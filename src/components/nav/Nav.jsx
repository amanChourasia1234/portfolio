import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { BsTelephoneFill } from 'react-icons/bs';
import { GrServices } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <div>
        <a
          href="#"
          id="nav-icon"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#"
          id="nav-text"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          Home
        </a>
      </div>

      <div>
        <a
          href="#about"
          id="nav-icon"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <BsFillPersonFill />
        </a>
        <a
          href="#about"
          id="nav-text"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          About
        </a>
      </div>

      <div>
        <a
          href="#experience"
          id="nav-icon"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <GiSkills />
        </a>
        <a
          href="#experience"
          id="nav-text"
          onClick={() => setActiveNav('#experince')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          Skills
        </a>
      </div>
      <div>
        <a
          href="#projects"
          id="nav-icon"
          onClick={() => setActiveNav('#projects')}
          className={activeNav === '#projects' ? 'active' : ''}
        >
          <GoProject />
        </a>
        <a
          href="#projects"
          id="nav-text"
          onClick={() => setActiveNav('#projects')}
          className={activeNav === '#projects' ? 'active' : ''}
        >
          Projects
        </a>
      </div>

      <div>
        <a
          href="#contact"
          id="nav-icon"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BsTelephoneFill />
        </a>
        <a
          href="#contact"
          id="nav-text"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
