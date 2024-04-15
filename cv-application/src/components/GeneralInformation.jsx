function Form({
  handleNameChange,
  name,
  handleEmailChange,
  email,
  handlePhoneChange,
  phone,
  submitButton,
}) {
  return (
    <div>
      <form>
        <h1>General Information</h1>
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

function Edit({ savedName, savedEmail, savedPhone, editButton }) {
  return (
    <div>
      <h1>General Information</h1>
      {savedName} {savedEmail} {savedPhone}
      <button onClick={editButton}>Edit</button>
    </div>
  );
}

function GeneralInformation({
  formDisplay,
  name,
  handleNameChange,
  email,
  handleEmailChange,
  phone,
  handlePhoneChange,
  savedName,
  savedEmail,
  savedPhone,
  editButton,
  submitButton,
}) {
  if (formDisplay === true) {
    return (
      <Form
        name={name}
        handleNameChange={handleNameChange}
        email={email}
        handleEmailChange={handleEmailChange}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
        submitButton={submitButton}
      />
    );
  } else {
    return (
      <>
        <Edit
          savedName={savedName}
          savedEmail={savedEmail}
          savedPhone={savedPhone}
          editButton={editButton}
        />
        {name} {email} {phone}
      </>
    );
  }
}

export default GeneralInformation;
