import {
  UPDATE_USERDATA,
  REDUCTION_WALLET,
  RESET_STORE,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  username: '',
  userId: 0,
  token: '',
  wallet: 0
};
const userDataReducer = (state = INITIAL_STATE, action) => {

  if (action.type === UPDATE_USERDATA) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (action.type === REDUCTION_WALLET) {
    const newState = { ...state };
    newState.wallet = newState.wallet - action.payload.price;

    return {
      ...state,
      ...newState,
    };
  }
  
  if (action.type === RESET_STORE) {
    return INITIAL_STATE;
  }
  return state;
};

export default userDataReducer;