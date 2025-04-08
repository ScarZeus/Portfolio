import React from "react";
import "./styles.css";

const projects = [
  {
    title: "DriveNShop",
    description:
      "An API for a grocery shopping platform supporting inventory, billing, and image storage using PostgreSQL and Hibernate.",
    technologies: ["Spring", "Hibernate", "PostgreSQL"],
    status: "Completed",
    github: "https://github.com/yourusername/DriveNShop",
  },
  {
    title: "BookStore Microservices",
    description:
      "A full-stack microservices architecture to manage books, users, and payments. Currently under development.",
    technologies: ["Spring", "PostgreSQL", "Microservices"],
    status: "Pending",
    github: "https://github.com/yourusername/BookStore-Microservices",
  },
  {
    title: "Movie Review API",
    description:
      "RESTful API allowing users to review, add, and delete movies.",
    technologies: ["Express.js", "MongoDB"],
    status: "Completed",
    github: "https://github.com/yourusername/MovieReviewAPI",
  },
  {
    title: "StompUsing Chat API",
    description:
      "Real-time chat application using STOMP over WebSockets with Spring.",
    technologies: ["Spring", "STOMP", "WebSockets"],
    status: "Completed",
    github: "https://github.com/yourusername/StompChatAPI",
  },
  {
    title: "Emotional Identifying CNN",
    description:
      "A machine learning model built using Convolutional Neural Networks to identify emotional tone from text.",
    technologies: ["Python", "TensorFlow", "CNN"],
    status: "Completed",
    github: "https://github.com/yourusername/EmotionalCNN",
  },
];

export const ProjectsSection = ({ refProp }) => {
  return (
    <section className="projects-section" ref={refProp}>
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="status">
                Status: <strong>{project.status}</strong>
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
