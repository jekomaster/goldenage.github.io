import React, { useEffect, useState } from "react";
import anime from "animejs";
import "../styles/gridRipple.css";

const GridRipple = () => {
  const [animation, setAnimation] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Anime.js animation for the grid items
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
    for (let i = 0; i < 414; i++) {
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

export default GridRipple;
