import { useState } from 'react';
import { StyledTask, StyledTaskContainer } from './TaskContainer.styled';
import TaskModal from 'components/TaskModal/TaskModal';

export const TaskContainer = ({ task, activeDate }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditOpen(prev => (prev = !prev));
  };

  return (
    <>
      {isEditOpen ? (
        <StyledTaskContainer>
          <StyledTask priority={task.priority}>{task.title}</StyledTask>
          <TaskModal
            onClose={handleEditClick}
            task={task}
            activeDate={activeDate}
            isModalOpen={isEditOpen}
          />
        </StyledTaskContainer>
      ) : (
        <StyledTaskContainer onClick={e => handleEditClick()}>
          <StyledTask priority={task.priority}>{task.title}</StyledTask>
          <TaskModal
            onClose={handleEditClick}
            task={task}
            activeDate={activeDate}
            isModalOpen={isEditOpen}
          />
        </StyledTaskContainer>
      )}
    </>
  );
};
