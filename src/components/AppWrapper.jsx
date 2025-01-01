import React from 'react';
import Greeting from './Greeting';
import greetingsInLanguages from '../data/greetings';

const AppWrapper = () => (
  <Greeting messages={greetingsInLanguages} />
);

export default AppWrapper;
