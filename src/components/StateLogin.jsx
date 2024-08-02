import { useState } from "react";
import Input from "./input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });


  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(e) {
    e.preventDefault();
    console.info('submitted', enteredValues?.email, enteredValues?.password);

    //reset
    // setEnteredValues({
    //   email:'',
    //   password: ''
    // });
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevData) => ({
      ...prevData,
      [identifier]: value
    }));

    setDidEdit((prevData) => ({
      ...prevData,
      [identifier]: false
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevData) => ({
      ...prevData,
      [identifier]: true
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" name="email" type="email"
          value={enteredValues?.email ?? ''}
          onBlur={(event) => handleInputBlur('email', event.target.value)}
          onChange={(event) => handleInputChange('email', event.target.value)}
          error={emailIsInvalid ? 'Please enter a valid email address.' : false}
        />

        <Input label="Password" id="password" name="password" type="password"
          value={enteredValues?.password ?? ''}
          onBlur={(event) => handleInputBlur('password', event.target.value)}
          onChange={(event) => handleInputChange('password', event.target.value)}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
