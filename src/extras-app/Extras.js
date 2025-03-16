// ReactJS

import React, { useState, useEffect, useRef } from "react";

function Extras() {
  const [progress, setProgress] = useState(0);
  //   const progressBarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setProgress(0); //remove the bar.
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const progressBarStyles = {
    width: progress >= 0 ? `${progress}%` : `0%`,
    height: "20px",
    backgroundColor: "green",
    transition: "width 0.3s ease",
    display: progress >= 0 ? "block" : "none",
  };

  const textStyle = {
    marginLeft: progress >= 0 ? `${progress}vw` : `0vw`,
    transition: "width 0.3s ease",

    // height: "20px",
    // backgroundColor: "green",
    // transition: "width 0.3s ease",
    // display: progress >= 0 ? "block" : "none",
  };

  return (
    <div style={progressBarStyles}>
      <div style={textStyle}>{progress}%</div>
    </div>
  );
}

export default Extras;

// Example Usage:
// <LoadingBar />
