import './styles/style.css';

import { useState } from 'react';

import EducationalExperience from './components/EducationalExperience';
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
      <div className="forms">
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
        <EducationalExperience />
      </div>
      <div className="CV">
        {savedName} {savedEmail} {savedPhone}
      </div>
    </>
  );
}

export default App;
