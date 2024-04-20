import './styles/style.css';

import { useState } from 'react';

import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

const initialGeneralInformationValues = {
  name: '',
  email: '',
  'phone number': '',
};

const initialEducationalExperienceValues = {
  'school name': '',
  'title of study': '',
  'date of study': '',
};

const initialPracticalExperienceValues = {
  'company name': '',
  'position title': '',
  'main responsibilities': '',
  'beginning and end date of employment': '',
};

function App() {
  // Form displays
  const [generalInformationFormDisplay, setGeneralInformationFormDisplay] =
    useState(true);
  const [
    educationalExperienceFormDisplay,
    setEducationalExperienceFormDisplay,
  ] = useState(true);
  const [practicalExperienceFormDisplay, setPracticalExperienceFormDisplay] =
    useState(true);
  // Form input
  const [generalInformationValues, setGeneralInformationValues] = useState(
    initialGeneralInformationValues
  );
  const [educationalExperienceValues, setEducationalExperienceValues] =
    useState(initialEducationalExperienceValues);
  const [practicalExperienceValues, setPracticalExperienceValues] = useState(
    initialPracticalExperienceValues
  );
  // InputChange functions
  const handleGeneralInformationInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInformationValues({ ...generalInformationValues, [name]: value });
  };
  const handleEducationalExperienceInputChange = (e) => {
    const { name, value } = e.target;
    setEducationalExperienceValues({
      ...educationalExperienceValues,
      [name]: value,
    });
  };
  const handlePracticalExperienceInputChange = (e) => {
    const { name, value } = e.target;
    setPracticalExperienceValues({
      ...practicalExperienceValues,
      [name]: value,
    });
  };
  // Saved information
  const [savedGeneralInformation, setSavedGeneralInformation] = useState('');
  const [savedEducationalExperience, setSavedEducationalExperience] =
    useState('');
  const [savedPracticalExperience, setSavedPracticalExperience] = useState('');
  // Submit functions
  function submitGeneralInformation(e) {
    e.preventDefault();

    setSavedGeneralInformation(Object.values(generalInformationValues));

    setGeneralInformationFormDisplay(!generalInformationFormDisplay);
  }
  function submitEducationalExperience(e) {
    e.preventDefault();

    setSavedEducationalExperience(Object.values(educationalExperienceValues));

    setEducationalExperienceFormDisplay(!educationalExperienceFormDisplay);
  }
  function submitPracticalExperience(e) {
    e.preventDefault();

    setSavedPracticalExperience(Object.values(practicalExperienceValues));

    setPracticalExperienceFormDisplay(!practicalExperienceFormDisplay);
  }
  // Edit functions
  function editGeneralInformation(e) {
    e.preventDefault();

    setGeneralInformationFormDisplay(!generalInformationFormDisplay);
  }
  function editEducationalExperience(e) {
    e.preventDefault();

    setEducationalExperienceFormDisplay(!educationalExperienceFormDisplay);
  }
  function editPracticalExperience(e) {
    e.preventDefault();

    setPracticalExperienceFormDisplay(!practicalExperienceFormDisplay);
  }
  return (
    <>
      <div className="forms">
        <GeneralInformation
          formDisplay={generalInformationFormDisplay}
          values={generalInformationValues}
          handleInputChange={handleGeneralInformationInputChange}
          submit={submitGeneralInformation}
          edit={editGeneralInformation}
          savedInformation={savedGeneralInformation}
        />
        <EducationalExperience
          formDisplay={educationalExperienceFormDisplay}
          values={educationalExperienceValues}
          handleInputChange={handleEducationalExperienceInputChange}
          submit={submitEducationalExperience}
          edit={editEducationalExperience}
        />
        <PracticalExperience
          formDisplay={practicalExperienceFormDisplay}
          values={practicalExperienceValues}
          handleInputChange={handlePracticalExperienceInputChange}
          submit={submitPracticalExperience}
          edit={editPracticalExperience}
        />
      </div>
      <div className="CV">
        <div className="generalinformation">
          {savedGeneralInformation[0]} {savedGeneralInformation[1]}{' '}
          {savedGeneralInformation[2]}
        </div>
        <div className="educationalexperience">
          {savedEducationalExperience[0]} {savedEducationalExperience[1]}{' '}
          {savedEducationalExperience[2]}
        </div>
        <div className="practicalexperience">
          {savedPracticalExperience[0]} {savedPracticalExperience[1]}{' '}
          {savedPracticalExperience[2]}
        </div>
      </div>
    </>
  );
}

export default App;
