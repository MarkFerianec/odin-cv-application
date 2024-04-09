// import { useState } from 'react';

import './App.css';

import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import GeneralInformation from './components/GeneralInformation';

function App() {
  return (
    <>
      <GeneralInformation></GeneralInformation>
      <EducationalExperience></EducationalExperience>
      <PracticalExperience></PracticalExperience>
    </>
  );
}

export default App;