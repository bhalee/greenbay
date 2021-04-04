import { LOAD_ITEMS, ADD_ITEM, REMOVE_ITEM } from '../constants/actionTypes';

const INITIAL_STATE = {
  items: [],
};

const itemsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === LOAD_ITEMS) {
    return {
      items: action.payload,
    };
  }
  if (action.type === ADD_ITEM) {
    return {
      items: [...state.items, action.payload[0]],
    };
  }
  if (action.type === REMOVE_ITEM) {
    return {
      items: state.items.filter((item) => item.item_id !== action.payload.item_id),
    };
  }
  return state;
};

export default itemsReducer;
