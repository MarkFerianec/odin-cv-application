import { useState } from 'react';

import GeneralInformation from './components/GeneralInformation';

function App() {
  const [formDisplay, setFormDisplay] = useState(true);

  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  const [email, setEmail] = useState('');
  const [savedEmail, setSavedEmail] = useState('');

  const [phone, setPhone] = useState('');
  const [savedPhone, setSavedPhone] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function submitButton(e) {
    e.preventDefault();

    setSavedName(name);
    setSavedEmail(email);
    setSavedPhone(phone);

    setFormDisplay(false);
  }

  function editButton(e) {
    e.preventDefault();

    setName(savedName);
    setEmail(savedEmail);
    setPhone(savedPhone);

    setFormDisplay(true);
  }

  return (
    <>
      <GeneralInformation
        formDisplay={formDisplay}
        name={name}
        phone={phone}
        email={email}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneChange={handlePhoneChange}
        submitButton={submitButton}
        editButton={editButton}
      />
      <div>
        {savedName} {savedEmail} {savedPhone}
      </div>
    </>
  );

  // return (
  //   <>
  //     {/* <GeneralInformation /> */}
  //     <GeneralInformation />
  //     <EditGeneralInformation editButton={editButton}/>
  //     <div>{name}</div>
  //     {/* <EditGeneralInformation
  //       savedName={savedName}
  //       savedEmail={savedEmail}
  //       savedPhone={savedPhone}
  //       editButton={editButton}
  //     /> */}
  //     {/* <div>{cvDisplay}</div> */}
  //     {/* <div>{'CVName'}</div> */}
  //     {/* <EducationalExperience></EducationalExperience> */}
  //     {/* <PracticalExperience></PracticalExperience> */}
  //   </>
  // );
}

export default App;
