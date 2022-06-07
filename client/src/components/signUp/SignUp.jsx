import Button from '@mui/material/Button';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/userAction';

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const navigate = useNavigate();
  const from = { pathname: '/settings' };

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, navigate, from));
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-center .bg-dark text-dark p-3 "
        id="form"
      >
        <legend className="text-center mb-4 text-white">Добро пожаловать</legend>
        <div className="mb-3">
          {/* <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              // onChange={changeHandler}
              // value={userSignUp.email}
            /> */}
          <input
            onChange={changeHandler}
            className="form-control"
            value={userSignUp.email}
            type="email"
            name="email"
            placeholder="Введите Email"
          />
        </div>

        <div className="mb-3">
          {/* <TextField
              onChange={changeHandler}
              value={userSignUp.userName}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            /> */}

          <input
            onChange={changeHandler}
            className="form-control"
            value={userSignUp.userName}
            type="text"
            name="userName"
            placeholder="Введите Имя"
          />
        </div>

        <div className="mb-3">
          {/* <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              // onChange={changeHandler}
              // value={userSignUp.password}
              htmlFor="standard-adornment-password"
            /> */}

          <input
            onChange={changeHandler}
            className="form-control"
            value={userSignUp.password}
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <Button type="submit" variant="contained" color="success">Войти</Button>
        {/* <button type="submit" className="btn btn-primary">Sign Up</button> */}
      </form>
    </div>

  );
}

export default SignUp;
