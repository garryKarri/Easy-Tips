import { initState } from '../initState';
import { SET_CHART, SET_TIPS } from '../type/tipsTypes';

const chartReducer = (state = initState().chart, action) => {
  switch (action.type) {
    case SET_CHART:
      return action.payload;
    case SET_TIPS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default chartReducer;
