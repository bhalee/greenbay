import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../actions/updateUserState';

function Links() {
  const dispatch = useDispatch();
  function signOut() {
    localStorage.removeItem('token');
    dispatch(logOut());
  }
  return (
    <div className="header-buttons">
      <div className="header-button">
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div className="header-button">
        <Link to="/market">
          <p>Market</p>
        </Link>
      </div>
      <div className="header-button">
        <Link to="/add-item">
          <p>Sell</p>
        </Link>
      </div>
      <div className="header-button">
        <Link to="/" onClick={signOut}>
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
}

export default Links;
