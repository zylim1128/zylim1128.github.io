import React from 'react';
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">

        <div className="about__data">
          <p className="about__description">
          I’m passionate about software development and enjoy exploring a variety of research areas at the intersection of AI, computer vision, and robotics.
          </p>

          <p className="about__description">
            I'm excited to share a collection of projects that reflect both my academic journey and personal exploration.
          </p>

          <p className="about__description">
          Beyond my technical projects, I also run a <strong>YouTube channel</strong> where I solve LeetCode problems and break them down into approachable explanations to help beginners
          strengthen their problem-solving skills.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default About