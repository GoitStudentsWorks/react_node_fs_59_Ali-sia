import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';
import { deleteColumn } from 'redux/columns/columns.operations';
import { toast } from 'react-hot-toast';

import {
  Toolbar,
  Button,
  DeleteTaskIcon,
} from './ColumnToolbar.styled';

const ColumnToolbar = ({column, tasksForColumn}) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);
  
  const handleDelete = id => {
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
    <Toolbar>
      <Button onClick={() => handleDelete(column._id)}>
        <DeleteTaskIcon theme={currentTheme} />
      </Button>
   </Toolbar>
  );
};

export default ColumnToolbar;
