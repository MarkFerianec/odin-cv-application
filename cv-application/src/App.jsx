import './styles/style.css';

import { useState } from 'react';

import GeneralInformation from './components/GeneralInformation';

const initialGeneralInformationValues = {
  name: '',
  email: '',
  'phone number': '',
};

function App() {
  const [generalInformationFormDisplay, setGeneralInformationFormDisplay] =
    useState(true);

  const [generalInformationValues, setGeneralInformationValues] = useState(
    initialGeneralInformationValues
  );

  const handleGeneralInformationInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInformationValues({ ...generalInformationValues, [name]: value });
  };

  const [savedGeneralInformation, setSavedGeneralInformation] = useState('');

  function submitGeneralInformation(e) {
    e.preventDefault();

    setSavedGeneralInformation(Object.values(generalInformationValues));

    setGeneralInformationFormDisplay(!generalInformationFormDisplay);
  }

  function editGeneralInformation(e) {
    e.preventDefault();

    setGeneralInformationFormDisplay(!generalInformationFormDisplay);
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
      </div>
      <div className="CV">
        {savedGeneralInformation[0]} {savedGeneralInformation[1]}{' '}
        {savedGeneralInformation[2]}
      </div>
    </>
  );
}

export default App;
