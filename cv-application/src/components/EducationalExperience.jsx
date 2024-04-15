function Form() {
  return (
    // A section to add your educational experience (school name, title of study and date of study)
    <div>
      <form>
        <h1>Educational Experience</h1>
        <h2>School Name</h2>
        <input placeholder="School Name" />
        <h2>Title of study</h2>
        <input placeholder="Title of Study" />
        <h2>Date of study</h2>
        <input
          placeholder="Date of Study"
          // onChange={handlePhoneChange}
          // value={phone}
        />
      </form>
      <div>{/* <button onClick={submitButton}>Submit</button> */}</div>
    </div>
  );
}

function EducationalExperience() {
  // return <h1>Educational Experience</h1>;
  return <Form />;
}

export default EducationalExperience;
