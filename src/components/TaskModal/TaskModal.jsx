import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveDate } from 'redux/tasks/tasks.selectors';
// import { createTask, updateTask } from 'redux/tasks/tasks.operations';
import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { editTask, addTask } from 'redux/tasks/tasks.operations';

function TaskModal({ task, category, onClose, isModalOpen }) {
  const dispatch = useDispatch();
  const activeDate = new Date(JSON.parse(useSelector(getActiveDate)));

  const handleSubmit = newData => {
    if (!task) {
      // If there's no initial data, we're creating a new task
      dispatch(addTask({ ...newData, date: activeDate }))
        .unwrap()
        .then(() => toast.success(`Created!`))
        .catch(e => {
          toast.error(`Failed to add task!`);
        });
    } else {
      dispatch(editTask(newData))
        .unwrap()
        .then(() => toast.success(`Updated!`))
        .catch(e => {
          toast.error(`Unable to update task`);
        });
    }
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal onClose={handleClose} isModalOpen={isModalOpen}>
      <TaskForm
        task={task}
        category={category}
        onSubmit={handleSubmit}
        onClose={handleClose}
        isModalOpen={isModalOpen}
      />
    </Modal>
  );
}

export default TaskModal;
