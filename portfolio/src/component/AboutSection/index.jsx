import React from "react";
import "./styles.css";

const experiences = [
  {
    role: "Junior Software Developer Intern",
    company: "Flutter Frog",
    duration: "Jan 2024 - Feb 2024",
    description:
      "Worked on Firebase integrations and Integerating Client Side and Admin Side Features managing the Live changes in the data",
  },
];

const Details =
  "I'm a backend-focused software engineer who thrives on designing scalable architectures and building robust APIs. " +
  "With hands-on experience in Spring Boot, Node.js, and databases, I'm passionate about creating backend systems " +
  "that are clean, efficient, and production-ready. I enjoy collaborating on impactful projects and solving challenging " +
  "technical problems.";

export default function AboutSection({ refProp }) {
  return (
    <section className="about-section" ref={refProp}>
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-description">{Details}</p>
        <h2 className="exp-heading">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <h3>
                {exp.role} <span className="company">@ {exp.company}</span>
              </h3>
              <p className="duration">{exp.duration}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
