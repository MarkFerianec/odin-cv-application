import './styles/style.css';

import { useState } from 'react';

import GeneralInformation from './components/GeneralInformation';

const initialGeneralInformationValues = {
  Name: '',
  Email: '',
  'Phone Number': '',
};

function App() {
  const [formDisplay, setFormDisplay] = useState(true);

  const [generalInformationValues, setGeneralInformationValues] = useState(
    initialGeneralInformationValues
  );

  const handleGeneralInformationInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInformationValues({ ...generalInformationValues, [name]: value });
  };

  const [savedGeneralInformation, setSavedGeneralInformation] = useState('');

  function submitButton(e) {
    e.preventDefault();

    setSavedGeneralInformation(Object.values(generalInformationValues));

    setFormDisplay(!formDisplay);
  }

  function editButton(e) {
    e.preventDefault();

    setFormDisplay(!formDisplay);
  }

  return (
    <>
      <div className="forms">
        <GeneralInformation
          formDisplay={formDisplay}
          generalInformationValues={generalInformationValues}
          handleGeneralInformationInputChange={
            handleGeneralInformationInputChange
          }
          submitButton={submitButton}
          editButton={editButton}
        />
      </div>
      <div className="CV">
        {savedGeneralInformation[0]} {savedGeneralInformation[1]}{' '}
        {savedGeneralInformation[2]}
      </div>
    </>
  );
}

export default App;
