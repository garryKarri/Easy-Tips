import axios from 'axios';
import { SET_WORKER } from '../type/workersTypes';

export const setWorker = (obj) => ({
  type: SET_WORKER,
  payload: obj,

});

export const findWorkerFromDB = (id) => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${id}`);
  dispatch(setWorker(response.data));
};
