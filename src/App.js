import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const toggleMode = ( stateValue ) => {
    if(stateValue) {
      document.body.style.background = '#343638';
    } else{
      document.body.style.background = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About Us" toggleMode={toggleMode}/>
    </>
  );
}

export default App;
