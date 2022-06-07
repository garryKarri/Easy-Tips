import { initState } from '../initState';
import { ADD_REVIEW, SET_REVIEWS } from '../type/reviewTypes';

const reviewReducer = (state = initState().review, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return action.payload;
    case ADD_REVIEW:
      return [...state, action.payload];

    default:
      return state;
  }
};
export default reviewReducer;
