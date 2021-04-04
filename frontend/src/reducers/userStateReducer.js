import { UPDATE_USERSTATE, RESET_STORE } from '../constants/actionTypes';

const USER_STATE = {
  loggedIn: false,
};

const userStateReducer = (state = USER_STATE, action) => {
  if (action.type === UPDATE_USERSTATE) {
    return {
      ...state,
      loggedIn: action.payload,
    };
  }
  if (action.type === RESET_STORE) {
    return USER_STATE;
  }
  return state;
};

export default userStateReducer;
