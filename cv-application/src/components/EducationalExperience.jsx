function EducationalExperience({
  formDisplay,
  handleInputChange,
  values,
  submit,
  edit,
}) {
  if (formDisplay === true) {
    return (
      <>
        <h1>Educational Experience</h1>
        <form>
          <h2>School Name</h2>
          <input
            placeholder="School Name"
            name="School Name"
            onChange={handleGeneralInformationInputChange}
            value={generalInformationValues.Name}
          ></input>
          <h2>Email</h2>
          <input
            placeholder="Title of Study"
            name="Title of Study"
            onChange={handleGeneralInformationInputChange}
            value={generalInformationValues.Email}
          ></input>
          <h2>Phone Number</h2>
          <input
            placeholder="Date of Study"
            name="Date of Study"
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

export default EducationalExperience;
