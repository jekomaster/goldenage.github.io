import React, { useState } from 'react';

const Greeting = ({ messages }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <p>{messages[index]}</p>
      <button onClick={() => setIndex((index + 1) % messages.length)}>
        Next Greeting
      </button>
    </div>
  );
};

export default Greeting;
