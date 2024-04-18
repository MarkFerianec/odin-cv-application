function Form({
  handleGeneralInformationInputChange,
  name,
  email,
  phone,
  submitButton,
  initialGeneralInformationValues,
  generalInformationValues,
}) {
  return (
    <div>
      <form>
        <h1>General Information</h1>
        <h2>Name</h2>
        <input
          value={generalInformationValues.name}
          onChange={handleGeneralInformationInputChange}
          name="name"
        />
        <h2>Email</h2>
        <input
          value={generalInformationValues.email}
          onChange={handleGeneralInformationInputChange}
          name="email"
        />
        <h2>Phone</h2>
        <input
          value={generalInformationValues.phone}
          onChange={handleGeneralInformationInputChange}
          name="phone"
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
  handleGeneralInformationInputChange,
  generalInformationValues,
  email,
  phone,
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
        generalInformationValues={generalInformationValues}
        handleNameChange={handleGeneralInformationInputChange}
        email={email}
        handleEmailChange={handleGeneralInformationInputChange}
        phone={phone}
        handlePhoneChange={handleGeneralInformationInputChange}
        submitButton={submitButton}
        handleGeneralInformationInputChange={handleGeneralInformationInputChange}
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
// export default Form;