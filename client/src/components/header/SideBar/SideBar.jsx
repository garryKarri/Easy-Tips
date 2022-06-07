import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
  SideBarMenu,
} from './SideBarElement';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/" onClick={toggle}>Home</SideBarLink>
          <SideBarLink to="/signin" onClick={toggle}>Login</SideBarLink>
          <SideBarLink to="about" onClick={toggle}>Lk</SideBarLink>
          <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
}
