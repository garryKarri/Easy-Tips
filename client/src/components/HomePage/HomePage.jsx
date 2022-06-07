import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import { NavBtn, NavBtnLink } from '../header/HeaderElement';
import MyModalCor from '../MyModal/MyModalCor';
import SignIn from '../signIn/SignIn';

import VideoBg from './assets/video1.mp4';

export default function HomePage() {
  const auth = useSelector((state) => state.user);

  return (
    <>

      <div className="main">
        <div className="overlay" />
        <video src={VideoBg} autoPlay loop muted />
        <div className="content">
          <h1>
            EasyTips
          </h1>
          <p> Платформа в которой удобно отблагодарить</p>

          {
auth ? (
  <> </>
) : ((
  <NavBtn>
    <MyModalCor el={<SignIn />}>
      <NavBtnLink to="/">Подключиться</NavBtnLink>
    </MyModalCor>
  </NavBtn>
))
    }

        </div>
      </div>
      <Footer />
    </>
  );
}
