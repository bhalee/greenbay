import { UPDATE_USERDATA,  REDUCTION_WALLET} from '../constants/actionTypes';

export function updateUserDataAction(payload) {
  return {
    type: UPDATE_USERDATA,
    payload,
  };
}

export function ReductionWallet(payload) {
  return {
    type: REDUCTION_WALLET,
    payload,
  };
}


