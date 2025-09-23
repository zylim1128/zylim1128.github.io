import React from "react";
import "./experience.css";
import ravinLogo from "../../assets/raivn-logo.png";
import uwCSE from "../../assets/uwcse.jpg";
import uwSecLab from "../../assets/uw_seclab.png";
import sparkLogo from "../../assets/spark.jpeg";
import uwCircle from "../../assets/uwcircle.png";
import awsLogo from "../../assets/aws_logo.png";
import networkLogo from "../../assets/mobile_intelligence_lab_logo.png";

const experience = [
  {
    time: "June 2025 - September 2025",
    title: "Software Developer Intern",
    company: "Amazon Web Services(AWS)",
    logo: awsLogo,
    description: [
      "Integrating Database Insights into Amazon Neptune(GraphDb)",
    ],
    link: "https://aws.amazon.com/neptune/",
  },
  {
    time: "March 2025 - Present",
    title: "Research Assistant",
    company: "Mobile Intelligence Lab",
    logo: networkLogo,
    description: [
      "Working on Computer Vision part of the research; co-authored a paper currently under review for CHI 2026",
    ],
    link: "https://netlab.cs.washington.edu/",
  },
  {
    time: "June 2024 - December 2024",
    title: "ML Research Assistant",
    company: "RAIVN Lab UW",
    logo: ravinLogo,
    description: [
      "Developed and evaluated a machine learning model for image editing using REALEDIT",
    ],
    link: "https://peter-sushko.github.io/RealEdit/",
  },
  {
    time: "June 2023 - June 2025",
    title: "Teaching Assistant",
    company: "Paul G. Allen School of Computer Science and Engineering",
    logo: uwCSE,
    description: [
      "8 quarters of experience teaching probability and Data Structures courses for CS majors. Recognized for excellent teaching awards in year 2023-24",
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