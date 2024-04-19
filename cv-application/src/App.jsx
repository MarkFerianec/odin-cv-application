import './styles/style.css';

import { useState } from 'react';

import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';

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

function App() {
  // Form displays
  const [generalInformationFormDisplay, setGeneralInformationFormDisplay] =
    useState(true);

  const [
    educationalExperienceFormDisplay,
    setEducationalExperienceFormDisplay,
  ] = useState(true);

  // Form input
  const [generalInformationValues, setGeneralInformationValues] = useState(
    initialGeneralInformationValues
  );

  const [educationalExperienceValues, setEducationalExperienceValues] =
    useState(initialEducationalExperienceValues);

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

  // Saved information
  const [savedGeneralInformation, setSavedGeneralInformation] = useState('');

  const [savedEducationalExperience, setSavedEducationalExperience] =
    useState('');

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

  // Edit functions
  function editGeneralInformation(e) {
    e.preventDefault();

    setGeneralInformationFormDisplay(!generalInformationFormDisplay);
  }

  function editEducationalExperience(e) {
    e.preventDefault();

    setEducationalExperienceFormDisplay(!educationalExperienceFormDisplay);
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
        />
        <EducationalExperience
          formDisplay={educationalExperienceFormDisplay}
          values={educationalExperienceValues}
          handleInputChange={handleEducationalExperienceInputChange}
          submit={submitEducationalExperience}
          edit={editEducationalExperience}
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
      </div>
    </>
  );
}

export default App;
