import {
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/actions/userAction';

function SignIn() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const from = { pathname: '/desktop' };

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, navigate, from));
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
        <div className="mb-3 text-white">
          {/*
          <TextField
            helperText="Please enter your name"
            // onChange={changeHandler}
            // value={userSignIn.email}
            label="Enter Email"
            color="secondary"
            focused
          /> */}

          <input
            onChange={changeHandler}
            value={userSignIn.email}
            className="form-control transparent-input"
            type="email"
            name="email"
            placeholder="Введите Email"
          />
        </div>

        <div className="mb-3">
          {/* <TextField
            label="Enter Password"
            color="secondary"
            focused
            onChange={changeHandler}
            value={userSignIn.password}
          /> */}
          <input
            onChange={changeHandler}
            value={userSignIn.password}
            className="form-control"
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <Button type="submit" variant="contained" color="success">Войти</Button>
        {/* <button type="submit" className="btn btn-primary">
          Sign In
        </button> */}
      </form>
    </div>
  );
}

export default SignIn;
