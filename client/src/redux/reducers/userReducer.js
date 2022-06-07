import { initState } from '../initState';
import { DELETE_USER, SET_USER } from '../type/userTypes';

// eslint-disable-next-line default-param-last
const userReducer = (state = initState().user, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem('userData', JSON.stringify(action.payload));
      return action.payload;

    case DELETE_USER:
      return null;
    case 'EDIT_USER':
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
