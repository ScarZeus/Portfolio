import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} K Kevin Gladson. All rights reserved.</p>
    </footer>
  );
};
