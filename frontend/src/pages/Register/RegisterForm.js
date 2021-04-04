import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';

function RegisterForm() {
  const history = useHistory();

  const getResponse = (response) => {
    setMessage(response);
    setShowMessage(true);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    return () => {
      setShowMessage(false);
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const postUser = await fetch(`${process.env.REACT_APP_BACKENDURL}/api/users`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (postUser.status === 201) {
        history.push('/login');
      }
      const response = await postUser.json();
      getResponse(response.message);
    } catch (error) {
      console.log(error.message);
      getResponse('Connection failed.');
    }
  };

  return (
    <form id="register-form" onSubmit={submit}>
      <h1>Register</h1>
      <div>
        <Input
          divClass="register-input"
          labelClass="form-label"
          inputClass="form-input"
          title="Username"
          id="input-username"
          type="text"
          required="required"
          value={username}
          whenChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input divClass="register-input" labelClass="form-label" inputClass="form-input" title="Password" id="input-password" type="password" required="required" value={password} whenChange={(e) => setPassword(e.target.value)} />
      </div>
      <div id="register-button-div">
        {showMessage ? <div id="register-form-message">{message}</div> : <div> </div>}
        <button id="register-button" type="submit">
          SIGN UP
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
