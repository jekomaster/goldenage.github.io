import React, { useState } from "react";

const VideoWithFilter = () => {
  const [filter, setFilter] = useState("none");

  return (
    <div className="video-container">
      {/* Video Element */}
      <video
        className="video"
        style={{ filter }}
        src="/media-content/golden-welcome.mp4"
        autoPlay
        loop
        muted
      />

 {/* Welcome Text 
      <div className="welcome-text">
        <h1>Welcome to the Golden Age</h1>
      </div> */}

      {/* Filter Buttons 
      <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
        <button onClick={() => setFilter("grayscale(100%)")}>Grayscale</button>
        <button onClick={() => setFilter("sepia(100%)")}>Sepia</button>
        <button onClick={() => setFilter("invert(100%)")}>Invert</button>
        <button onClick={() => setFilter("contrast(200%)")}>Contrast</button>
        <button onClick={() => setFilter("brightness(200%)")}>Brightness</button>
        <button onClick={() => setFilter("blur(5px)")}>Blur</button>
        <button onClick={() => setFilter("hue-rotate(90deg)")}>Hue Rotate</button>
        <button onClick={() => setFilter("saturate(8)")}>Saturate</button>

    
        <button onClick={() => setFilter("none")}>Reset</button>
      </div> */}
    </div>
  );
};


export default VideoWithFilter;
