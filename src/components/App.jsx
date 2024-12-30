import React from 'react';
import Greeting from './Greeting';
import greetingsInLanguages from '../data/greetings';
import ReactDOM from "react-dom";


const App = () => {
  return (
    <div>
      <Greeting messages={greetingsInLanguages} />
    </div>
       

  );
};

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById("root"));
}

export default App;
