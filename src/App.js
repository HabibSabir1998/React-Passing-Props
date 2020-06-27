import React from 'react';
import './App.css';

import {Paragraph} from './Components/paragraph'
import {Heading} from './Components/Heading'



const App = () => {
  return (
    <>
      Hello World 
      <Heading Heading={"Heading."} />
      <Paragraph name={"Child"}/>
    </>
  );
}

export default App;
