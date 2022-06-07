import axios from 'axios';
import { SET_CHART, SET_TIPS } from '../type/tipsTypes';
import * as endPoints from '../../config/endPoints';

export const setChart = (chart) => ({
  type: SET_CHART,
  payload: chart,
});
export const setTips = (chart) => (

  // console.log(chart)
  {
    type: SET_TIPS,
    payload: chart.newTips,
  }
);
// eslint-disable-next-line no-unused-vars
export const thunkSetChart = (id) => async (dispatch) => {
  const res = await axios.get(endPoints.getChart(id), { withCredentials: true });
  dispatch(setChart(res.data));
  // eslint-disable-next-line no-console
  // console.log(res.data, 'resdata');
};
export const thunkSetTips = ({ id, post }) => async (dispatch) => {
  console.log('bla');
  const response = await axios.post(`${process.env.REACT_APP_HOST}/review/${id}`, post);
  console.log(response);
  dispatch(setTips(response.data));
  // eslint-disable-next-line no-console
  // console.log(res.data, 'resdata');
};
