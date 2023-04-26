import React from 'react';
import loginRegisterIcon from './loginRegisterIcon.svg';

import { StyledButton } from './LoginRegisterBtn.styled';

export const LoginRegisterBtn = ({ isSubmitting, btnText }) => {
  return (
    <StyledButton type="submit" disabled={isSubmitting}>
      <span> {btnText} </span>
      <img src={loginRegisterIcon} alt="->]"></img>
    </StyledButton>
  );
};
