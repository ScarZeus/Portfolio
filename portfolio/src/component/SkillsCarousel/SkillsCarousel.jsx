import React from "react";
import "./styles.css";
import reactLogo from "../../assets/react.png";
import springLogo from "../../assets/spring.png";
import postgresLogo from "../../assets/postgres.png";
import nodeLogo from "../../assets/nodejs.png";
import java from "../../assets/java.png";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongodb.png";
import linux from "../../assets/linux.png";
import python from "../../assets/python.png";

const skills = [
  { name: "React", logo: reactLogo },
  { name: "Spring", logo: springLogo },
  { name: "PostgreSQL", logo: postgresLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Python", logo: python },
  { name: "Linux", logo: linux },
  { name: "Java", logo: java },
  { name: "Javascript", logo: javascript },
  { name: "MongoDB", logo: mongodb },
];

export const SkillsCarousel = ({ refProp }) => {
  return (
    <section className="skills-section" ref={refProp}>
      <h2>Technical Skills</h2>
      <div className="skills-carousel">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
