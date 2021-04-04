import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from '../../actions/itemsActions';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import './MainPage.css';

function MainPage() {
  const reducerUserState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  useEffect(() => {
    const userToken = localStorage.getItem('token');
    if(userToken !== null){
      fetch(`${process.env.REACT_APP_BACKENDURL}/api/items`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(loadItems(data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch]);
  return <div className="container-items">{reducerUserState.loggedIn ? <LoggedIn /> : <LoggedOut />}</div>;
}

export default MainPage;
