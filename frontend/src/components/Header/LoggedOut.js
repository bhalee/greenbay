import React from 'react';
import { Link } from 'react-router-dom';
function LoggedOut() {
  return (
    <div className="header-links">
      <div className="header-buttons">
        <div className="header-button">
          <Link to="/login"><p>Login</p></Link>
        </div>
        <div className="header-button">
          <Link to="/register"><p>Sign up</p></Link>
        </div>
      </div>
    </div>
  );
}

export default LoggedOut;
