import React, { useState } from 'react';
import AddTaskIcon from './AddTaskIcon.svg';
import { StyledButton } from './AddTaskBtn.styled';
import TaskModal from '../../TaskModal/TaskModal';

// export const AddTaskBtn = ({ taskGroupId, openModal }) => {
//   return (
//     <StyledButton onClick={openModal}>
//       <img src={AddTaskIcon} alt="+"></img>
//       <span> Add task </span>
//     </StyledButton>
//   );
// };

export const AddTaskBtn = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledButton onClick={handleOpenModal}>
        <img src={AddTaskIcon} alt="+"></img>
        <span> Add task </span>
      </StyledButton>
      <TaskModal
        category={category}
        onClose={handleCloseModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
};
