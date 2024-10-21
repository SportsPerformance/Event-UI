import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import ButtonGroup from './Components/ButtonGroup';
import ViewEvents from './Components/ViewEvents';
import CreateEvent from './Components/CreateEvent';

function App() {
  const [currentSection, setCurrentSection] = useState('viewEvents');

  const showSection = (section) => {
    console.log("Switching to section:", section); 
    setCurrentSection(section);
  };

  return (
    <>
      <Navbar />
      <ButtonGroup showSection={showSection} />
      {currentSection === 'viewEvents' && <ViewEvents />}
      {currentSection === 'createEvent' && <CreateEvent />}
    </>
  );
}

export default App;
