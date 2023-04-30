import React from 'react';
// import { createTask, updateTask } from 'redux/tasks/tasks.operations';
import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { editTask } from 'redux/tasks/tasks.operations';

function TaskModal({ task, onClose, isModalOpen }) {
  const dispatch = useDispatch();

  const handleSubmit = newData => {
    if (!task) {
      // If there's no initial data, we're creating a new task
      //   dispatch(createTask(newData));
    } else {
      // console.log('DATA FOR DISPTACH', newData);
      dispatch(editTask(newData))
        .unwrap()
        .then(() => toast.success(`Updated!`))
        .catch(e => {
          toast.error(`Unable to update task`);
          // console.log('ERRROOORRR', e);
        });
    }

    // Close the modal
    onClose();
  };
  const handleClose = () => {
    // Close the modal
    onClose();
  };

  return (
    <Modal onClose={handleClose} isModalOpen={isModalOpen}>
      <TaskForm task={task} onSubmit={handleSubmit} onClose={handleClose} />
    </Modal>
  );
}

export default TaskModal;
