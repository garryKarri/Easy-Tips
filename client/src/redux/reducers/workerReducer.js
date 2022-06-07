import {initState} from '../initState';
import { SET_WORKER } from '../type/workersTypes';

export const workerReducer = (state = initState().worker, action) => {
  switch (action.type) {
    case SET_WORKER:
      return action.payload;

    default:
      return state;
  }
};
