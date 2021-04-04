import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { updateUserDataAction } from '../../actions/updateUserData';
import { updateUserStateAction } from '../../actions/updateUserState';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  function setToken(response) {
    localStorage.setItem('token', response.accesToken.token);
  }
  const submit = async (e) => {
    e.preventDefault();

    if (username && password !== '') {
      try {
        const loginUser = await fetch(`${process.env.REACT_APP_BACKENDURL}/api/login`, {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const response = await loginUser.json();
        if (loginUser.status === 201) {
          setToken(response);
          dispatch(updateUserDataAction(response.accesToken));
          dispatch(updateUserStateAction(true));
          history.push('/');
        } else {
          setShowMessage(true);
          setMessage('Username or password incorrect');
          setUsername('');
          setPassword('');
        }
      } catch (error) {
        console.log(error);
        setShowMessage(true);
        setMessage('Connection failed');
      }
    } else {
      setShowMessage(true);
      setMessage('All fields are required, please fill out the missing fields.');
    }
  };
  return (
    <div>
      <form className="loginForm" onSubmit={submit}>
        <div className="loginFormInput">
          <Input
            divClass="login-input"
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
          <Input divClass="login-input" labelClass="form-label" inputClass="form-input" title="Password" id="input-password" type="password" required="required" value={password} whenChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="buttonContainer">
          <div>{showMessage ? <div className="login-form-message">{message}</div> : <div> </div>}</div>
          <button className="loginButton" type="submit">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
