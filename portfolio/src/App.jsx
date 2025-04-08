import React, { useState, useEffect } from "react";
import Portfolio from "./component/Porfolio/index";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }

    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return <Portfolio />;
}

export default App;
