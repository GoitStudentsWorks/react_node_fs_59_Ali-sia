import loginRegisterIcon from './login.svg';

import {
  NavLinkStyledRegister,
  NavLinkStyledLogin,
  NavContainer,
} from './AuthNavigate.styled';

export const AuthNav = () => {
  return (
    <NavContainer>
      <NavLinkStyledRegister to="/register" end>
        Sign Up
      </NavLinkStyledRegister>
      <NavLinkStyledLogin to="/login" end>
        Log In
        <img src={loginRegisterIcon} alt="->]"></img>
      </NavLinkStyledLogin>
    </NavContainer>
  );
};
