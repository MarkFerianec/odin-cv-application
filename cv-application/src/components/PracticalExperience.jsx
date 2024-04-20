function PracticalExperience({
  formDisplay,
  handleInputChange,
  values,
  submit,
  edit,
}) {
  if (formDisplay === true) {
    return (
      <>
        <h1>Practical Experience</h1>
        <form>
          <h2>Company Name</h2>
          <input
            placeholder="Company Name"
            name="company name"
            onChange={handleInputChange}
            value={values['company name']}
          ></input>
          <h2>Position Title</h2>
          <input
            placeholder="Position Title"
            name="position title"
            onChange={handleInputChange}
            value={values['position title']}
          ></input>
          <h2>Main Responsibilities</h2>
          <input
            placeholder="Main Responsibilities"
            name="main responsibilities"
            onChange={handleInputChange}
            value={values['main responsibilities']}
          ></input>
          <h2>Beginning and end date of employment</h2>
          <input
            placeholder="Beginning and end date"
            name="beginning and end date of employment"
            onChange={handleInputChange}
            value={values['beginning and end date of employment']}
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

export default PracticalExperience;
