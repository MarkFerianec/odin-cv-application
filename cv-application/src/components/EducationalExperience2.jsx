import { useState } from 'react';

function EducationalExperience({
  values,
  submit,
  edit,
  savedInformation,
  formDisplay,
  handleInputChange,
}) {
  // const handleEducationalExperienceInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEducationalExperienceValues({
  //     ...educationalExperienceValues,
  //     [name]: value,
  //   });
  // };

  if (formDisplay === true) {
    return (
      <>
        <form>
          <h2>School Name</h2>
          <input
            placeholder="School Name"
            name="school name"
            onChange={handleInputChange}
            value={values['school name']}
          ></input>
          <h2>Title of Study</h2>
          <input
            placeholder="Title of Study"
            name="title of study"
            onChange={handleInputChange}
            value={values['title of study']}
          ></input>
          <h2>Date of Study</h2>
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
        <div>
          {savedInformation[0]} {savedInformation[1]} {savedInformation[2]}
        </div>
        <div>
          <button onClick={edit}>Edit</button>
          <button>Delete</button>
        </div>
      </>
    );
  }
}

export default EducationalExperience;
