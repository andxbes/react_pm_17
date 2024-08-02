import { useState } from "react";
import Input from "./input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation"
import useInput from "../hooks/useInput";

export default function Login() {

  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.info('submitted', emailValue, passwordValue);

    //reset
    // setEnteredValues({
    //   email:'',
    //   password: ''
    // });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" name="email" type="email"
          value={emailValue ?? ''}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={emailHasError ? 'Please enter a valid email address.' : false}
        />

        <Input label="Password" id="password" name="password" type="password"
          value={passwordValue ?? ''}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={passwordHasError && 'Please enter a valid password'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
