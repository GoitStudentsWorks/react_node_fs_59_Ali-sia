import React from 'react';
import AddTaskIcon from './AddTaskIcon.svg';
import { StyledButton } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ taskGroupId, openModal }) => {
  return (
    <StyledButton onClick={openModal}>
      <img src={AddTaskIcon} alt="+"></img>
      <span> Add task </span>
    </StyledButton>
  );
};
