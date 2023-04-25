import React, { useState, useEffect } from 'react';
// import { createTask, updateTask } from '../../redux/tasks/tasks.operations';
import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';

function TaskModal({ initialData, onClose }) {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleSubmit = newData => {
    // Get the Redux dispatch function
    // const dispatch = useDispatch();

    if (!initialData) {
      // If there's no initial data, we're creating a new task
      //   dispatch(createTask(newData));
    } else {
      // If there is initial data, we're updating an existing task
      //   dispatch(updateTask(newData));
    }

    // Close the modal
    onClose();
  };
  const handleClose = () => {
    // Close the modal
    onClose();
  };

  return (
    <Modal onClose={handleClose}>
      <TaskForm
        initialData={formData}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </Modal>
  );
}

export default TaskModal;
