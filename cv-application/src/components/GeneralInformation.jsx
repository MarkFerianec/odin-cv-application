function GeneralInformation({
  formDisplay,
  editButton,
  handleGeneralInformationInputChange,
  submitButton,
  generalInformationValues,
}) {
  if (formDisplay === true) {
    return (
      <>
        <h1>General Information</h1>
        <form>
          <h2>Name</h2>
          <input
            placeholder="Name"
            name="Name"
            onChange={handleGeneralInformationInputChange}
            value={generalInformationValues.Name}
          ></input>
          <h2>Email</h2>
          <input
            placeholder="Email"
            name="Email"
            onChange={handleGeneralInformationInputChange}
            value={generalInformationValues.Email}
          ></input>
          <h2>Phone Number</h2>
          <input
            placeholder="Phone Number"
            name="Phone Number"
            onChange={handleGeneralInformationInputChange}
            value={generalInformationValues['Phone Number']}
          ></input>
          <button onClick={submitButton}>Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div>Edit</div>
        <button onClick={editButton}>Edit</button>
      </>
    );
  }
}

export default GeneralInformation;
