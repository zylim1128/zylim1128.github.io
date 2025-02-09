import React from "react";
import "./experience.css";
import ravinLogo from "../../assets/raivn-logo.png";
import uwCSE from "../../assets/uwcse.jpg";
import uwSecLab from "../../assets/uw_seclab.png";
import sparkLogo from "../../assets/spark.jpeg";
import uwCircle from "../../assets/uwcircle.png";

const experience = [
  {
    time: "June 2024 - Present",
    title: "ML Research Assistant",
    company: "RAIVN Lab UW",
    logo: ravinLogo,
    description: [
      "Developed and evaluated a machine learning model for image editing using REALEDIT; co-authored a paper currently under review for CVPR 2025",
    ],
    link: "https://raivn.cs.washington.edu/",
  },
  {
    time: "June 2023 - Present",
    title: "Teaching Assistant",
    company: "Paul G. Allen School of Computer Science and Engineering",
    logo: uwCSE,
    description: [
      "7+ quarters of experience teaching probability and Data Structures courses for CS majors. Recognized for excellent teaching awards in year 2023-24",
    ],
    link: "https://courses.cs.washington.edu/courses/cse312/24au/",
  },
  {
    time: "Jan 2024 - June 2024",
    title: "Undergraduate Researcher",
    company: "Security and Privacy Lab UW",
    logo: uwSecLab,
    description: [
      "Research Project: Investigating Security and Privacy Practices in Childcare Apps.",
    ],
    link: "docs/Research_Poster.pdf",
  },
  {
    time: "July 2023 - August 2023",
    title: "Software Engineering Intern",
    company: "Spark",
    logo: sparkLogo,
    description: [
      "Developed a dynamic website from ground up using React, AWS Amplify, and GraphQL within a 5-week timeframe.",
    ],
    link: "https://www.linkedin.com/company/spark-internship/posts/?feedView=all",
  },
  {
    time: "June 2022 - June 2023",
    title: "Peer Adviser",
    company: "UW CIRCLE",
    logo: uwCircle,
    description: [
      "Connected international undergraduates with campus resources. Provided 1-to-1 consulting services to students with difficulties. Organized fun activities to enhance cultural understanding, as well as social aspects of being a college student in the U.S.",
    ],
    link: "https://www.washington.edu/circle/",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section__title">Experience</h2>
      <div className="experience-list">
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-row">
              <div className="logo-column">
                <img src={item.logo} alt={`${item.company} logo`} className="experience-logo" />
              </div>
              <div className="details-column">
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-item"
              >
                <div className="experience-header">
                  <h3>{item.title}</h3>
                  <span className="experience-company">{item.company}</span>
                  <span className="experience-time">{item.time}</span>
                  <div className="arrow-icon">↗</div>
                </div>
                <ul className="experience-description">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                </a>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Experience;