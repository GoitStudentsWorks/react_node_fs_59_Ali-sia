import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';
import { deleteColumn } from 'redux/columns/columns.operations';
import { toast } from 'react-hot-toast';

import Modal from 'components/Modal/Modal';

import {
  Toolbar,
  Button,
  DeleteTaskIcon,
  StyledP,
  ButtonsWrapper,
  StyledButton,
} from './ColumnToolbar.styled';

const ColumnToolbar = ({column, tasksForColumn}) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  
  const handleDelete = id => {
    setIsModalOpen(false);
    if (tasksForColumn.length !== 0) {
      toast.error(`Unable to delete column with tasks`);
      return;
    }
    dispatch(deleteColumn(id))
      .unwrap()
      .catch(e => {
        toast.error(`Unable to delete column`);
      });
  };

  return (
    <>
      <Toolbar>
        <Button onClick={() => setIsModalOpen(true)}>
          <DeleteTaskIcon theme={currentTheme} />
        </Button>
      </Toolbar>
      <Modal onClose={() => setIsModalOpen(false)} isModalOpen={isModalOpen}>
        <StyledP>Are you sure you want to log out?</StyledP>
        <ButtonsWrapper>
          <StyledButton type="button" onClick={() => handleDelete(column._id)}>
            Yes
          </StyledButton>
          <StyledButton type="button" onClick={() => setIsModalOpen(false)}>
            No
          </StyledButton>
        </ButtonsWrapper>
      </Modal>
    </>
  );
};

export default ColumnToolbar;
