import { combineReducers } from 'redux';
import userDataReducer from './userDataReducer';
import userStateReducer from './userStateReducer';
import itemsReducer from './itemsReducer'


const rootReducer = combineReducers({
  userData: userDataReducer,
  userState: userStateReducer,
  item: itemsReducer,
});

export default rootReducer;
