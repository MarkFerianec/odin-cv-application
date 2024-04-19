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
            name="school name"
            onChange={handleInputChange}
            value={values['school name']}
          ></input>
          <h2>Email</h2>
          <input
            placeholder="Title of Study"
            name="title of study"
            onChange={handleInputChange}
            value={values['title of study']}
          ></input>
          <h2>Phone Number</h2>
          <input
            placeholder="Date of Study"
            name="date of study"
            onChange={handleInputChange}
            value={values['date of study']}
          ></input>
          <button onClick={submit}>Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div>Edit</div>
        <button onClick={edit}>Edit</button>
      </>
    );
  }
}

export default EducationalExperience;
