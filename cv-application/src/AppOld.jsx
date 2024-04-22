import './styles/style.css';

import { useState } from 'react';

// import GeneralInformation from './components/GeneralInformation2';
import Form from './components/Form';

// const initialGeneralInformationValues = {
//   Name: '',
//   Email: '',
//   'Phone Number': '',
// };

const initialGeneralInformationValues = ['Name', 'Email', 'Phone Number'];

function App() {
  const [formDisplay, setFormDisplay] = useState(true);

  const [generalInformationValues, setGeneralInformationValues] = useState(
    initialGeneralInformationValues
  );

  const handleGeneralInformationInputChange = (e) => {
    const { name, value } = e.target;
    setGeneralInformationValues({ ...generalInformationValues, [name]: value });
  };

  // Experimental
  // function handleGeneralInformationInputChange() {
  //   setGeneralInformationValues(['test', 'test', 'test']);
  // }

  // const handleGeneralInformationInputChange = (e) => {
  //   const [ name, value ] = e.target;
  //   setGeneralInformationValues({ ...generalInformationValues, [name]: value });
  // };

  // const [name, setName] = useState('');
  // const [savedName, setSavedName] = useState('');
  // const [savedName, setSavedName] = useState(generalInformationValues.name);
  const [savedName, setSavedName] = useState('');

  // const [email, setEmail] = useState('');
  const [savedEmail, setSavedEmail] = useState('');

  // const [phone, setPhone] = useState('');
  const [savedPhone, setSavedPhone] = useState('');

  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }

  // Mod this?
  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }

  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePhoneChange(e) {
  //   setPhone(e.target.value);
  // }

  function submitButton(e) {
    e.preventDefault();

    // setSavedName(name);
    // setSavedName(generalInformationValues.Name);
    // setSavedEmail(generalInformationValues.Email);
    // setSavedPhone(generalInformationValues['Phone Number']);
    // setSavedName('test');
    // setGeneralInformationValues(generalInformationValues.name);
    // setSavedEmail(email);
    // setSavedPhone(phone);

    setFormDisplay(false);
  }

  function editButton(e) {
    e.preventDefault();

    // setName(savedName);
    //this might be the problem:
    // setSavedName(generalInformationValues.Name);
    // setGeneralInformationValues(generalInformationValues.name);
    // setEmail(savedEmail);
    // setPhone(savedPhone);
    // setGeneralInformationValues(generalInformationValues);
    // setGeneralInformationValues('test');
    // ?
    // setName(e.target.value);

    setFormDisplay(true);
  }

  return (
    <>
      <div className="forms">
        {/* <GeneralInformation
          formDisplay={formDisplay}
          name={name}
          phone={phone}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          submitButton={submitButton}
          editButton={editButton}
          generalInformationValues={generalInformationValues}
          handleGeneralInformationInputChange={
            handleGeneralInformationInputChange
          }
        /> */}
        <Form
          formDisplay={formDisplay}
          title="General Information"
          inputs={['Name', 'Email', 'Phone Number']}
          handleGeneralInformationInputChange={
            handleGeneralInformationInputChange
          }
          submitButton={submitButton}
          savedName={savedName}
          savedEmail={savedEmail}
          savedPhone={savedPhone}
          editButton={editButton}
        />
        {/* <Form
          formDisplay={formDisplay}
          title="Educational Experience"
          inputs={['School Name', 'Title of Study', 'Date of Study']}
          submitButton={submitButton}
        /> */}
        {/* <Form
          formDisplay={formDisplay}
          title="Practical Experience"
          inputs={[
            'Company Name',
            'Position Title',
            'Responsibilties',
            'Dates Worked',
          ]}
          submitButton={submitButton}
        /> */}
      </div>
      <div className="CV">
        {savedName} {savedEmail} {savedPhone}
      </div>
    </>
  );
}

export default App;
