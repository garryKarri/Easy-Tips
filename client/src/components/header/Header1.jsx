/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { Tooltip } from 'react-bootstrap';
import { Avatar, IconButton } from '@mui/material';
import { signOut } from '../../redux/actions/userAction';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './HeaderElement';

import SignIn from '../signIn/SignIn';
import SignUp from '../signUp/SignUp';
import MyModalCor from '../MyModal/MyModalCor';

export default function Header1({ toggle }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);
  const logoutHandler = () => {
    localStorage.removeItem('userData'); // clear localstorage
    dispatch(signOut());
  };

  return (
    <>
      {
      auth ? (
        <Nav>
          <NavbarContainer>
            <NavLogo to="/desktop">
              Easy Tips
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/desktop">My Account</NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnLink to="/" onClick={logoutHandler}>LogOut</NavBtnLink>
              </NavBtn>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </Box>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      ) : ((
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              Easy Tips
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <div style={{ display: 'flex', justifyContent: 'center' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NavBtn>
                <MyModalCor el={<SignIn />}>
                  <NavBtnLink to="/">Sign In</NavBtnLink>
                </MyModalCor>
              </NavBtn>
              <NavBtn>
                <MyModalCor el={<SignUp />}>
                  <NavBtnLink to="/">Sign Up</NavBtnLink>
                </MyModalCor>
              </NavBtn>
            </div>
          </NavbarContainer>
        </Nav>
      ))
    }

    </>

  );
}
