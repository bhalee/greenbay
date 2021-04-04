import React from 'react';
import LoginForm from './LoginForm';
import './Login.css'

function Login() {
  return (
    <div className="login-box">
      <h1>Login</h1>
      <div className="login">
    <LoginForm />
      </div>
    </div>
  );
}

export default Login;