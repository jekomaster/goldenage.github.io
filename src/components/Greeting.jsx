import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Greeting = ({ messages }) => {
  const greetingRef = useRef(null);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1666);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  useEffect(() => {
    if (greetingRef.current) {
      gsap.fromTo(
        greetingRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      );
    }
  }, [index]);

  return (
    <div style={{ textAlign: 'center', fontSize: '2rem' }}>
      <div ref={greetingRef}>{messages[index]}</div>
    </div>
  );
};

export default Greeting;
