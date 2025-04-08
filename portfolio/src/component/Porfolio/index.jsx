import { useRef } from "react";
import "./styles.css";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaFileDownload,
} from "react-icons/fa";
// import { Header } from "../header-Component";
import { Footer } from "../footer-Component";
import { SkillsCarousel } from "../SkillsCarousel/SkillsCarousel";
import { HomeSection } from "../HomeSection/HomeSection";
import AboutSection from "../AboutSection";
import { ProjectsSection } from "../ProjectSection";

export default function Portfolio() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
        {/* <Header /> */}
      <HomeSection refProp={homeRef} />
      <AboutSection refProp={aboutRef} />
      <SkillsCarousel refProp={skillsRef} />
      <ProjectsSection refProp={projectsRef} />
    <Footer />
      <nav className="navbar">
        <button onClick={() => scrollTo(homeRef)} className="nav-icon">
          <FaHome />
        </button>
        <button onClick={() => scrollTo(aboutRef)} className="nav-icon">
          <FaUser />
        </button>
        <button onClick={() => scrollTo(skillsRef)} className="nav-icon">
          <FaTools />
        </button>
        <button onClick={() => scrollTo(projectsRef)} className="nav-icon">
          <FaProjectDiagram />
        </button>
        <a href="/resume.pdf" download className="nav-icon">
          <FaFileDownload />
        </a>
      </nav>
    </div>
  );
}
