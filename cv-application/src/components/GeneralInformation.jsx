function GeneralInformation({
  formDisplay,
  handleInputChange,
  values,
  submit,
  edit,
  savedInformation,
}) {
  if (formDisplay === true) {
    return (
      <>
        <form>
          <h2>Name</h2>
          <input
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
            value={values.name}
          ></input>
          <h2>Email</h2>
          <input
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
            value={values.email}
          ></input>
          <h2>Phone Number</h2>
          <input
            placeholder="Phone Number"
            name="phone number"
            onChange={handleInputChange}
            value={values['phone number']}
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
        </div>
      </>
    );
  }
}

export default GeneralInformation;
