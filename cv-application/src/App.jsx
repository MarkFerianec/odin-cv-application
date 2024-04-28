import './styles/style.css';

import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';

// import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
// import PracticalExperience from './components/PracticalExperience';
import DisplayEducationalExperience from './components/DisplayEducationalExperience';

// const initialGeneralInformationValues = [
//   {
//     name: '',
//     email: '',
//     'phone number': '',
//   },
// ];

// const initialEducationalExperienceValues = {
//   'school name': '',
//   'title of study': '',
//   'date of study': '',
// };

// const initialPracticalExperienceValues = {
//   'company name': '',
//   'position title': '',
//   'main responsibilities': '',
//   'beginning and end date of employment': '',
// };

function App() {
  // Experimental stuff
  // const [educationalExperienceValues, setEducationalExperienceValues] =
  //   useState(initialEducationalExperienceValues);

  // const [savedEducationalExperience, setSavedEducationalExperience] =
  //   useState('');

  const [savedEducationalExperience, setSavedEducationalExperience] = useState(
    []
  );

  // Number of forms

  // Form displays
  // const [generalInformationFormDisplay, setGeneralInformationFormDisplay] =
  //   useState(true);

  // I believe this has to go into child component
  // const [
  //   educationalExperienceFormDisplay,
  //   setEducationalExperienceFormDisplay,
  // ] = useState(true);

  // const [practicalExperienceFormDisplay, setPracticalExperienceFormDisplay] =
  //   useState(true);
  // Form input
  // const [generalInformationValues, setGeneralInformationValues] = useState(
  //   initialGeneralInformationValues
  // );

  // Moved to child component
  // const [educationalExperienceValues, setEducationalExperienceValues] =
  //   useState(initialEducationalExperienceValues);

  // const [practicalExperienceValues, setPracticalExperienceValues] = useState(
  //   initialPracticalExperienceValues
  // );
  // InputChange functions
  // const handleGeneralInformationInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setGeneralInformationValues({ ...generalInformationValues, [name]: value });
  // };

  // Moving to child component
  // const handleEducationalExperienceInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEducationalExperienceValues({
  //     ...educationalExperienceValues,
  //     [name]: value,
  //   });
  // };

  // const handlePracticalExperienceInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setPracticalExperienceValues({
  //     ...practicalExperienceValues,
  //     [name]: value,
  //   });
  // };
  // Saved information
  // I believe these have to be changed to arrays rather than empty strings for it to work properly
  // Or maybe an array of strings???
  // Or maybe an array of objects!
  // const [savedGeneralInformation, setSavedGeneralInformation] = useState('');

  // const [savedPracticalExperience, setSavedPracticalExperience] = useState('');
  // // Submit functions
  // function submitGeneralInformation(e) {
  //   e.preventDefault();

  //   setSavedGeneralInformation(Object.values(generalInformationValues));

  //   setGeneralInformationFormDisplay(!generalInformationFormDisplay);
  // }

  // Going to try to put this into child component
  // function submitEducationalExperience(e) {
  //   e.preventDefault();

  //   setSavedEducationalExperience(Object.values(educationalExperienceValues));

  //   setEducationalExperienceFormDisplay(!educationalExperienceFormDisplay);
  // }

  // function submitPracticalExperience(e) {
  //   e.preventDefault();

  //   setSavedPracticalExperience(Object.values(practicalExperienceValues));

  //   setPracticalExperienceFormDisplay(!practicalExperienceFormDisplay);
  // }
  // Edit functions
  // function editGeneralInformation(e) {
  //   e.preventDefault();

  //   setGeneralInformationFormDisplay(!generalInformationFormDisplay);
  // }

  // Going to try to put this into child component
  // function editEducationalExperience(e) {
  //   e.preventDefault();

  //   setEducationalExperienceFormDisplay(!educationalExperienceFormDisplay);
  // }

  // function editPracticalExperience(e) {
  //   e.preventDefault();

  //   setPracticalExperienceFormDisplay(!practicalExperienceFormDisplay);
  // }

  // New form functions

  const [educationalExperienceArray, setEducationalExperienceArray] = useState(
    []
  );

  function newEducationalExperience() {
    setEducationalExperienceArray([
      ...educationalExperienceArray,
      <EducationalExperience
        key={uuidv4()}
        savedEducationalExperience={savedEducationalExperience}
        setSavedEducationalExperience={setSavedEducationalExperience}
      />,
    ]);
  }

  function deleteEducationalExperience() {}

  return (
    <>
      <div className="forms">
        {/* <h1>General Information</h1>
        <GeneralInformation
          formDisplay={generalInformationFormDisplay}
          values={generalInformationValues}
          handleInputChange={handleGeneralInformationInputChange}
          submit={submitGeneralInformation}
          edit={editGeneralInformation}
          savedInformation={savedGeneralInformation}
        /> */}
        <h1>Educational Experience</h1>
        {/* <EducationalExperience
          savedEducationalExperience={savedEducationalExperience}
          setSavedEducationalExperience={setSavedEducationalExperience}
        /> */}
        <div>
          {/* <NewEducationalExperience /> */}
          {educationalExperienceArray}
          <button onClick={newEducationalExperience}>New</button>
        </div>
        {/* <h1>Practical Experience</h1> */}
        {/* <PracticalExperience
          formDisplay={practicalExperienceFormDisplay}
          values={practicalExperienceValues}
          handleInputChange={handlePracticalExperienceInputChange}
          submit={submitPracticalExperience}
          edit={editPracticalExperience}
        /> */}
      </div>
      <div className="cv">
        {/* <div className="generalinformation">
          {savedGeneralInformation[0]} {savedGeneralInformation[1]}{' '}
          {savedGeneralInformation[2]}
        </div> */}
        <div className="educationalexperience">
          <h2>Educational Experience</h2>
          <DisplayEducationalExperience
            savedEducationalExperience={savedEducationalExperience}
          />
          {/* {savedEducationalExperience[0]} {savedEducationalExperience[1]}{' '}
          {savedEducationalExperience[2]} */}
          {/* This is causing issues because it tries to render an object */}
          {/* {savedEducationalExperience} */}
          {console.log(savedEducationalExperience)}
          {/* Objects are not valid as a React child */}
          {/* {initialGeneralInformationValues} */}
          {/* {myArray.values()} */}
          {/* Object.values(educationalExperienceValues) */}
        </div>
        {/* <div className="practicalexperience">
          {savedPracticalExperience[0]} {savedPracticalExperience[1]}{' '}
          {savedPracticalExperience[2]}
        </div> */}
      </div>
    </>
  );
}

export default App;
