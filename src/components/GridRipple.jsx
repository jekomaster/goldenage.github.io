import React, { useEffect, useState } from "react"; // Import React, useEffect, and useState hooks from the React library
import anime from "animejs"; // Import the animejs library for animations
import "../styles/gridRipple.css"; // Import the CSS file for styling the grid


const GridRipple = () => { // Define the GridRipple functional component
  const [animation, setAnimation] = useState(null); // State to hold the animation instance
  const [isAnimating, setIsAnimating] = useState(true); // State to track if the animation is running

  useEffect(() => { // useEffect hook to run the animation setup when the component mounts
    const anim = anime({ // Call the anime function to create an animation
      targets: ".grid-item", // Target all elements with the class "grid-item"
      scale: [ // Define the scale animation
        { value: 0.1, easing: "easeOutSine", duration: 2000 }, // Scale down to 0.1 with easing and duration
        { value: 1, easing: "easeInOutQuad", duration: 2000 }, // Scale back to 1 with easing and duration
      ],
      opacity: [ // Define the opacity animation
        { value: 0.5, duration: 500 }, // Change opacity to 0.5 with duration
        { value: 1, duration: 1200 }, // Change opacity back to 1 with duration
      ],
      delay: anime.stagger(100, {
        grid: [20, 10],
        from: "center",
        start: 0,
        direction: "both"
      }), // Stagger the animation with a grid layout starting from the center and expanding diagonally
      loop: true // Set the animation to loop indefinitely
    });
    setAnimation(anim); // Save the animation instance to state
    return () => anim.pause(); // Cleanup function to pause the animation when the component unmounts
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleGridClick = () => { // Function to handle grid click
    if (isAnimating) {
      animation.pause(); // Pause the animation if it is running
    } else {
      animation.play(); // Play the animation if it is paused
    }
    setIsAnimating(!isAnimating); // Toggle the animation state
  };

  const createGrid = () => { // Function to create the grid items
    const items = []; // Initialize an empty array to hold the grid items
    for (let i = 20; i < 400; i++) { // Loop to create 100 grid items
      items.push(<div key={i} className="grid-item"></div>); // Push a new div with the class "grid-item" into the array
    }
    return items; // Return the array of grid items
  };

  return ( // Return the JSX to render the component
    <div className="grid-container" onClick={handleGridClick}> {/* Container div with the class "grid-container" and onClick handler */}
      <div className="grid">{createGrid()}</div> {/* Div with the class "grid" containing the grid items created by createGrid */}
    </div>
  );
};

export default GridRipple; // Export the GridRipple component as the default export