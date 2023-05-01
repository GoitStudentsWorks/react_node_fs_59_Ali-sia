import React from 'react';
import TaskToolbar from 'components/TaskToolbar/TaskToolbar';
import {
  CardContainer,
  StatsContainer,
  TaskTitle,
  ImageContainer,
  UserAvatar,
  LowPriority,
  MediumPriority,
  HighPriority,
  ToolbarContainer,
} from './TaskColumnCard.styled';
import userAvatarDefault from './user.jpg';
import { useAuth } from 'hooks';

export const TaskColumnCard = ({ task, sortedColumnList }) => {
  const { user } = useAuth();
  const { title, priority } = task;
  const userAvatar = user.avatarURL ? user.avatarURL : userAvatarDefault;

  const getDescription = () => {
    if (title.length <= 26) {
      return title;
    } else {
      return `${title.slice(0, 26)}...`;
    }
  };

  return (
    <CardContainer>
      <TaskTitle> {getDescription()} </TaskTitle>
      <StatsContainer>
        <ImageContainer>
          <UserAvatar src={userAvatar} alt="U" />
          {priority === 'low' && <LowPriority>Low</LowPriority>}
          {priority === 'medium' && <MediumPriority>Medium</MediumPriority>}
          {priority === 'high' && <HighPriority>High</HighPriority>}
        </ImageContainer>
        <ToolbarContainer>
          <TaskToolbar task={task} columns={sortedColumnList} />
        </ToolbarContainer>
      </StatsContainer>
    </CardContainer>
  );
};

// 1. Компонент отримує в пропсах дані необхідні для створення картки.
// 2. Компонент підписаний на url аватару юзера
// 3. Компонент рендерить блоки:
//  - розмітку з описом завдання, який має фіксовану висоту і текст з описом, якщо той не вміщається, обрізається та показуються три крапки.
//  - аватар юзера.
//  - пріоритет завдання, з фоном відповідного кольору.
//  - TaskToolbar - інетрфейс для роботи з карткою
//  - TaskModal - модалка з формою для редагування завдання.
