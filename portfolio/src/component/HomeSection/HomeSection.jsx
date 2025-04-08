import './styles.css';
import React, { useEffect, useState } from "react";
import myPhoto from "../../assets/my-photo.jpg";

export const HomeSection = ({ refProp }) => {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="home-section" ref={refProp}>
      <div className="home-content">
        <div className="text-area">
          <h1>Hello, I'm <span className="highlight">Kevin</span></h1>
          <p className="animated-text">{text}</p>
        </div>
        <div className="image-area">
          <img src={myPhoto} alt="My Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};
