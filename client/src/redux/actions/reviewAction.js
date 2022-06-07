import axios from 'axios';
import { ADD_REVIEW, SET_REVIEWS } from '../type/reviewTypes';

// устанавливает в состояние в (state)
export const setReviews = (allReviews) => ({
  type: SET_REVIEWS,
  payload: allReviews,
});

export const addReview = (review) => ({ type: ADD_REVIEW, payload: review });

export const getReviewsFromDB = (id) => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_HOST}/review/${id}`);

  dispatch(setReviews(response.data));
};

export const addReviewToDB = (id, post) => async (dispatch) => {
  const response = await axios.post(`${process.env.REACT_APP_HOST}/review/${id}`, post);
  dispatch(addReview(response.data.newFeedBack)); //
};
