import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './Greeting.css'; // Ensure this is the correct path to your CSS file

const Greeting = ({ messages }) => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const messageRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const messageCount = messages.length;

    const updateMessage = () => {
      index = (index + 1) % messageCount;
      setCurrentMessage(messages[index]);

      // Trigger animation
      if (messageRef.current) {
        gsap.fromTo(
          messageRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );
      }
    };

    const interval = setInterval(updateMessage, 2000); // Switch messages every 2 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [messages]);

  return (
    <div className="greeting-container">
      <div ref={messageRef} className="greeting-bubble">
        {currentMessage}
      </div>
    </div>
  );
};

export default Greeting;
