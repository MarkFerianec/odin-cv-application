function GeneralInformation({
  formDisplay,
  handleInputChange,
  values,
  submit,
  edit,
}) {
  if (formDisplay === true) {
    return (
      <>
        <h1>General Information</h1>
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
        <div>Edit</div>
        <button onClick={edit}>Edit</button>
      </>
    );
  }
}

export default GeneralInformation;
