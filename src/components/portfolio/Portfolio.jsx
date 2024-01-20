import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/crypto.jpg';
import IMG2 from '../../assets/login.jpg';
import IMG3 from '../../assets/blog.jpg';
import IMG4 from '../../assets/portfolio6.jpg';
import IMG5 from '../../assets/parkinson.jpg';
import IMG6 from '../../assets/face.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'RAY CRYPTO',
    github: 'https://github.com/amanChourasia1234/Ray-Crypto',
    demo: 'https://github.com/amanChourasia1234/Ray-Crypto',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Authentication System',
    github: 'https://github.com/amanChourasia1234/authentication-deploy',
    demo: 'https://authentication-u15o.onrender.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Blog Website',
    github: 'https://github.com/amanChourasia1234/mern-blog-deploy',
    demo: 'https://blog-i58t.onrender.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Sample Portfolio',
    github:
      'https://github.com/amanChourasia1234/react-frontend-project-portfolio',
    demo: 'https://65abf168fe2cc0bb2e15a70c--incredible-snickerdoodle-5d1f92.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Parkinson Disease Detection',
    github: 'https://github.com/amanChourasia1234/parkinson-disease-detection',
    demo: 'https://github.com/amanChourasia1234/parkinson-disease-detection',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Vaccination Status Detection',
    github:
      'https://github.com/amanChourasia1234/vaccination-status-detection-web',
    demo: 'https://github.com/amanChourasia1234/vaccination-status-detection-web',
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="container">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="IMG1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="cta">
            <a href="https1://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
