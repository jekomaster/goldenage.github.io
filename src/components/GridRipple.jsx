
import React, { useEffect, useState } from "react";
import anime from "animejs";
import "../styles/gridRipple.css";





const GridRipple = () => {
  const [animation, setAnimation] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const anim = anime({
      targets: ".grid-item",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 1200 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      opacity: [
        { value: 0.5, duration: 500 },
        { value: 1, duration: 1200 },
      ],
      delay: anime.stagger(100, {
        grid: [20, 10],
        from: "center",
        start: 0,
        direction: "both",
      }),
      loop: true,
    });
    setAnimation(anim);
    return () => anim.pause();
  }, []);

  const handleGridClick = () => {
    if (isAnimating) {
      animation.pause();
    } else {
      animation.play();
    }
    setIsAnimating(!isAnimating);
  };

  const createGrid = () => {
    const items = [];
    for (let i = 0; i < 400; i++) {
      items.push(<div key={i} className="grid-item"></div>);
    }
    return items;
  };

  return (
    <div className="grid-container" onClick={handleGridClick}>
      <div className="grid">{createGrid()}</div>
    </div>
  );
};
// Select the grid container
const gridContainer = document.querySelector('.grid-container');

// Function to calculate and apply the scale
function dynamicScale() {
  const width = window.innerWidth; // Get the viewport width
  const height = window.innerHeight; // Get the viewport height

  // Calculate the scale factor (adjust these thresholds as needed)
  const scaleFactor = Math.min(width / 1920, height / 1080); // Scale based on a 1920x1080 baseline

  // Apply the scale dynamically
  gridContainer.style.transform = `scale(${scaleFactor})`;
  gridContainer.style.transformOrigin = 'center'; // Keep scaling centered
}

// Initial scaling
dynamicScale();

// Update scaling dynamically on window resize
window.addEventListener('resize', dynamicScale);


export default GridRipple;



