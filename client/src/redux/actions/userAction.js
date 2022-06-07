import axios from 'axios';
import { DELETE_USER, SET_USER } from '../type/userTypes';
import * as endPoints from '../../config/endPoints';
import { disableLoader, enableLoader } from './loaderAction';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getUserFromServer = () => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(), {
    credentials: 'include',
  });
  const currentUser = await response.json();
  if (currentUser) {
    dispatch(setUser(currentUser));
  }
  dispatch(disableLoader());
};

export const signUp = (payload, navigate ,from) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate(from);
  } else {
    navigate('/auth/signup');
  }
  dispatch(disableLoader());
};

export const signIn = (payload, navigate, from) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate(from);
  } else {
    navigate('/auth/signin');
  }
  dispatch(disableLoader());
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};

// export const editUser = (user, navigate) => async (dispatch, getState) => {
//   const {
//     user: { id: userId },
//   } = getState();
//   dispatch(enableLoader());
//   const response = await fetch(endPoints.editUser(userId), {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//     body: JSON.stringify(user),
//   });
//   if (response.status === 200) {
//     const userData = await response.json();
//     dispatch(setUser(userData));
//     navigate(`/users/${userData.id}`);
//   } else {
//     navigate.replace('/');
//   }
//   dispatch(disableLoader());
// };

export const editus = (data) => ({
  type: 'EDIT_USER',
  payload: data,
});

export const editInfo = (payload, navigate, from) => async (dispatch) => {
  try {
    const { id, setting } = payload;

    const response = await axios.put(`${process.env.REACT_APP_HOST}/lk/${id}`, { ...setting });
    dispatch(editus(response.data.result));
    navigate(from);
  } finally {
    console.log('было отправлено на изменения');
  }
};

export const editAvatar = ({ id, image }) => async (dispatch) => {
  const fd = new FormData();
  fd.append('img', image);
  fd.append('id', id);
  console.log('EDIT START');
  const response = await axios.put(`${process.env.REACT_APP_HOST}/lk/${id}`, fd, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(response.data);
  dispatch(setUser(response.data.result));
};
