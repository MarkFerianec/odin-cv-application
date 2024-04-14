import { useState } from 'react';

function GeneralInformation() {
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

    setName('');
    setEmail('');
    setPhone('');
  }

  function editButton(e) {
    e.preventDefault();
    setName(savedName);
    setEmail(savedEmail);
    setPhone(savedPhone);
  }

  return (
    <div>
      <div>
        <h1>General Information</h1>
        <form>
          <h2>Name</h2>
          <input placeholder="Name" onChange={handleNameChange} value={name} />
          <h2>Email</h2>
          <input
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
          />
          <h2>Phone</h2>
          <input
            placeholder="Phone Number"
            onChange={handlePhoneChange}
            value={phone}
          />
          <button onClick={editButton}>Edit</button>
          <button onClick={submitButton}>Submit</button>
        </form>
      </div>
      <div>
        {savedName} {savedEmail} {savedPhone}
      </div>
    </div>
  );
}

export default GeneralInformation;

// A section to add general information like name, email and phone number.
