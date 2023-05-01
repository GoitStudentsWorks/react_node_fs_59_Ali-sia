import React from 'react';
// import { createTask, updateTask } from 'redux/tasks/tasks.operations';
import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { editTask } from 'redux/tasks/tasks.operations';

function TaskModal({ task, category, onClose, isModalOpen }) {
  const dispatch = useDispatch();

  const handleSubmit = newData => {
    if (!task) {
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
      />
    </Modal>
  );
}

export default TaskModal;
