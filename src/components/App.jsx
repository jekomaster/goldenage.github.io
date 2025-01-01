import React from 'react';
import Greeting from './Greeting';
import greetingsInLanguages from '../data/greetings';

const App = () => {
  return (
    <div className="container-wrapper">
      <Greeting messages={greetingsInLanguages} />
    </div>
  );
};

export default App;
