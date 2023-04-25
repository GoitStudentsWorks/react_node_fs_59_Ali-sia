import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../../redux/auth/auth.operations';

import { StyledButton } from './LogoutBtn.styled';
import logoutIcon from './logoutIcon.svg';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      console.log('Logout successful');

      navigate.push('/login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <StyledButton type="submit" onClick={handleLogOut}>
      <span>Log Out </span>
      <img src={logoutIcon} alt="[->"></img>
    </StyledButton>
  );
};
