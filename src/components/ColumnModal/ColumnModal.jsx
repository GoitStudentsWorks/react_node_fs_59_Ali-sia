import React from 'react';
// import { useSelector } from 'react-redux';
// import { getActiveDate } from 'redux/tasks/tasks.selectors';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addColumn } from 'redux/columns/columns.operations';
import ColumnForm from 'components/ColumnForm/ColumnForm';

function ColumnModal({ title, onClose, isModalOpen }) {
  const dispatch = useDispatch();
//   const activeDate = new Date(JSON.parse(useSelector(getActiveDate)));

  const handleSubmit = newData => {
    if (!title) {
      // If there's no initial data, we're creating a new task
        dispatch(addColumn({
            ...newData,
            // date: activeDate
        }))
        .unwrap()
        .then(() => toast.success(`Created!`))
        .catch(e => {
          toast.error(`Failed to add column!`);
        });
    }
    // else {
    //   dispatch(editTask(newData))
    //     .unwrap()
    //     .then(() => toast.success(`Updated!`))
    //     .catch(e => {
    //       toast.error(`Unable to update task`);
    //     });
    // }
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal onClose={handleClose} isModalOpen={isModalOpen}>
      <ColumnForm
        title={title}
        onSubmit={handleSubmit}
        onClose={handleClose}
        isModalOpen={isModalOpen}
      />
    </Modal>
  );
}

export default ColumnModal;
