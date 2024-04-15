/* eslint-disable react/prop-types */
import { useState } from 'react';

function Form({
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  name,
  email,
  phone,
  submitButton,
}) {
  return (
    <div>
      <form>
        <h2>Name</h2>
        <input placeholder="Name" onChange={handleNameChange} value={name} />
        <h2>Email</h2>
        <input placeholder="Email" onChange={handleEmailChange} value={email} />
        <h2>Phone</h2>
        <input
          placeholder="Phone Number"
          onChange={handlePhoneChange}
          value={phone}
        />
      </form>
      <div>
        <button onClick={submitButton}>Submit</button>
      </div>
    </div>
  );
}

function GeneralInformation() {
  const [formDisplay, setFormDisplay] = useState(true);
  // const [buttonDisplay, setButtonDisplay] = useState(true);

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

    // setName('');
    // setEmail('');
    // setPhone('');

    setFormDisplay(false);
  }

  function editButton(e) {
    e.preventDefault();

    setName(savedName);
    setEmail(savedEmail);
    setPhone(savedPhone);

    setFormDisplay(true);
  }

  if (formDisplay === true) {
    return (
      <div>
        <h1>General Information</h1>
        <Form
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          submitButton={submitButton}
          name={name}
          email={email}
          phone={phone}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>General Information</h1>
        {savedName} {savedEmail} {savedPhone}
        <button onClick={editButton}>Edit</button>
      </div>
    );
  }
}

export default GeneralInformation;

// A section to add general information like name, email and phone number.
