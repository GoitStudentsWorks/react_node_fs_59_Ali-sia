import React, { useState, useSelector } from 'react';
import { selectTheme } from 'redux/auth/auth.selectors';
import TaskModal from '../TaskModal/TaskModal';
// import { createTask, updateTask, deleteTask, updateTaskColumn } from '../redux/tasksSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  Toolbar,
  Button,
  ContextMenu,
  ContextMenuItem,
  MoveTaskIcon,
  EditTaskIcon,
  DeleteTaskIcon,
  MoveTaskIconBase,
} from './TaskToolbar.styled';

const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: 'unset',
        },
      },
    },
  },
}); // to rewrite MUI styles

const TaskToolbar = ({ task }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const currentTheme = useSelector(selectTheme);

  const handleMoveTask = newColumn => {
    setAnchorEl(null);
    // Get the Redux dispatch function
    // const dispatch = useDispatch();

    //we're updating tasks column
    //dispatch(updateTaskColumn(task, newColumn)); or smth like that
  };

  const handleEdit = () => {
    setOpenModal(!openModal);
  };

  const handleDelete = () => {
    // Get the Redux dispatch function
    // const dispatch = useDispatch();
    //we're deleting task
    //dispatch(deleteTask(task.id));
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseContext = () => {
    setAnchorEl(null);
  };
  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  const columns = ['To do', 'In progress', 'Done'];
  const otherColumns = columns.filter(column => column !== task.column);

  return (
    <Toolbar>
      <Button onClick={handleClick}>
        <MoveTaskIconBase theme={currentTheme} />
      </Button>
      <ThemeProvider theme={theme}>
        <ContextMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseContext}
          theme={currentTheme}
        >
          {otherColumns.map(column => (
            <ContextMenuItem
              key={column}
              onClick={() => handleMoveTask(column)}
            >
              {column}
              <MoveTaskIcon theme={currentTheme} />
            </ContextMenuItem>
          ))}
        </ContextMenu>
      </ThemeProvider>
      <Button onClick={handleEdit}>
        <EditTaskIcon theme={currentTheme} />
      </Button>
      <Button onClick={handleDelete}>
        <DeleteTaskIcon theme={currentTheme} />
      </Button>
      {openModal && <TaskModal task={task} onClose={handleCloseModal} />}
    </Toolbar>
  );
};

export default TaskToolbar;
