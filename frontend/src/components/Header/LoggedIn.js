import React from 'react';
import ShowName from './ShowName'
import Links from './Links'
import ShowWallet from './ShowWallet'
function LoggedIn(props){

  return(
    <div className="header-links">
      <ShowName username={props.reducerUserData.username}/>
      <ShowWallet wallet={props.reducerUserData.wallet}/>
      <Links/>
    </div>
  )
}

export default LoggedIn;