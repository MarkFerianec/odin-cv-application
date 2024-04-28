function DisplayEducationalExperience({ savedEducationalExperience }) {
  return (
    <>
      {savedEducationalExperience.map((EducationalExperience) => (
        <div>
          {EducationalExperience['school name']}{' '}
          {EducationalExperience['title of study']}{' '}
          {EducationalExperience['date of study']}
        </div>
      ))}
    </>
  );
}

export default DisplayEducationalExperience;
