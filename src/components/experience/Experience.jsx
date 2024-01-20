import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
const Experience = () => {
  return (
    <section id="experience" className="container">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="experience-container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>HTML5</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>CSS3</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>Javascript</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>React</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>Bootstrap</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>Tailwind</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="Backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>Nodejs</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>Expressjs</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>Mongodb</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>Sql</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill className="experience-icon" />
              <div>
                <h5>php</h5>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
