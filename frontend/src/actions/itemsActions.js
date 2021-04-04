import { ADD_ITEM, LOAD_ITEMS, REMOVE_ITEM } from '../constants/actionTypes';

export function loadItems(array) {
  return {
    type: LOAD_ITEMS,
    payload: array,
  };
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

export function removeItem(item){
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
}