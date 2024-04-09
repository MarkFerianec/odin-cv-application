import { useState } from 'react';

function GeneralInformation() {
  // const [generalInformation, setGeneralInformation] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  return (
    <>
      <h1>General Information</h1>
      <h2>Name</h2>
      <input placeholder="Name" value={name} onChange={handleNameChange} />
      <h2>Email</h2>
      <input placeholder="Email" value={email} onChange={handleEmailChange} />
      <h2>Phone</h2>
      <input placeholder="Phone Number" value={phone} onChange={handlePhoneChange} />
      <div>
        {name} {email} {phone}
      </div>
    </>
  );
}

export default GeneralInformation;

// A section to add general information like name, email and phone number.
