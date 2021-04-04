import React from 'react';
import { useSelector } from 'react-redux';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut'
import './Header.css'

function Header () {
  const reducerUserData = useSelector(state => state.userData);
  const reducerUserState = useSelector(state => state.userState);

  return(
    <div id="header">
      {reducerUserState.loggedIn ? <LoggedIn reducerUserData={reducerUserData}/> : <LoggedOut/>}
    </div>
  )
}

export default Header