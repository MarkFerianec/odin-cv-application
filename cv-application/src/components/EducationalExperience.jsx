import { useState } from 'react';

const initialEducationalExperienceValues = {
  'school name': '',
  'title of study': '',
  'date of study': '',
};

function EducationalExperience({
  savedEducationalExperience,
  setSavedEducationalExperience,
}) {
  const [
    educationalExperienceFormDisplay,
    setEducationalExperienceFormDisplay,
  ] = useState(true);

  const [educationalExperienceValues, setEducationalExperienceValues] =
    useState(initialEducationalExperienceValues);

  // const [savedEducationalExperience, setSavedEducationalExperience] =
  //   useState('');

  function submitEducationalExperience(e) {
    e.preventDefault();

    // setSavedEducationalExperience(Object.values(educationalExperienceValues));

    setSavedEducationalExperience([
      ...savedEducationalExperience,
      Object.values(educationalExperienceValues),
    ]);

    // setStateArray(prevStateArray => [...prevStateArray, newValue]);

    // const addElement = (newElement) => {

    //   setStateArray([...stateArray, newElement]);

    // };

    // setSavedEducationalExperience((savedEducationalExperience) => [
    //   ...savedEducationalExperience,
    //   Object.values(educationalExperienceValues),
    // ]);

    setEducationalExperienceFormDisplay(!educationalExperienceFormDisplay);
  }

  function editEducationalExperience(e) {
    e.preventDefault();

    setEducationalExperienceFormDisplay(!educationalExperienceFormDisplay);
  }

  const handleEducationalExperienceInputChange = (e) => {
    const { name, value } = e.target;
    setEducationalExperienceValues({
      ...educationalExperienceValues,
      [name]: value,
    });
  };

  if (educationalExperienceFormDisplay === true) {
    return (
      <>
        <form>
          <h2>School Name</h2>
          <input
            placeholder="School Name"
            name="school name"
            onChange={handleEducationalExperienceInputChange}
            value={educationalExperienceValues['school name']}
          ></input>
          <h2>Title of Study</h2>
          <input
            placeholder="Title of Study"
            name="title of study"
            onChange={handleEducationalExperienceInputChange}
            value={educationalExperienceValues['title of study']}
          ></input>
          <h2>Date of Study</h2>
          <input
            placeholder="Date of Study"
            name="date of study"
            onChange={handleEducationalExperienceInputChange}
            value={educationalExperienceValues['date of study']}
          ></input>
          <button onClick={submitEducationalExperience}>Submit</button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <div>
          {/* {savedEducationalExperience[0]} {savedEducationalExperience[1]}{' '}
          {savedEducationalExperience[2]} */}
          {/* {savedEducationalExperience} */}
          {educationalExperienceValues['school name']}{' '}
          {educationalExperienceValues['title of study']}{' '}
          {educationalExperienceValues['date of study']}
        </div>
        <div>
          <button onClick={editEducationalExperience}>Edit</button>
          <button>Delete</button>
        </div>
      </>
    );
  }
}

export default EducationalExperience;
