function Form({ title, inputs, submitButton }) {
  return (
    <>
      <form>
        <h1>{title}</h1>
        {inputs.map((input) => {
          return (
            <>
              <h2>{input}</h2>
              <input key={input} placeholder={input}></input>
            </>
          );
        })}
        <button onClick={submitButton}>Submit</button>
      </form>
    </>
  );
}

export default Form;
