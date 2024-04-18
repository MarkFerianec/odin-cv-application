function Form({
  formDisplay,
  title,
  inputs,
  editButton,
  handleGeneralInformationInputChange,
  submitButton,
  savedName,
  savedEmail,
  savedPhone,
  generalInformationValues,
}) {
  if (formDisplay === true) {
    return (
      <>
        <form>
          <h1>{title}</h1>
          {inputs.map((input) => {
            return (
              <>
                <h2>{input}</h2>
                <input
                  key={input}
                  // value={generalInformationValues.?}
                  // value={e.target.value}
                  // value={input}
                  // value={generalInformationValues}
                  placeholder={input}
                  onChange={handleGeneralInformationInputChange}
                  name={input}
                ></input>
              </>
            );
          })}
          <button onClick={submitButton}>Submit</button>
        </form>
        {savedName} {savedEmail} {savedPhone}
      </>
    );
  } else {
    return (
      <>
        <div>Edit</div>
        {/* added recently */}
        <button onClick={editButton}>Edit</button>
        {savedName} {savedEmail} {savedPhone}
      </>
    );
  }
}

export default Form;

//This is something I was working on but it might not be possible to do what I was trying to accomplish.
