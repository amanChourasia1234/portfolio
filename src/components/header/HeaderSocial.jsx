import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className="header-social">
      <a href="https://www.linkedin.com/in/amanchourasia2002/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/amanChourasia1234" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/aman__chourasia_/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
