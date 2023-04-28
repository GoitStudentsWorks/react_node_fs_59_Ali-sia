import React from 'react';
import TaskToolbar from 'components/TaskToolbar/TaskToolbar';
import {
  CardContainer,
  StatsContainer,
  TaskDescription,
  ImageContainer,
  UserAvatar,
  LowPriority,
  MediumPriority,
  HighPriority,
  ToolbarContainer,
} from './TaskColumnCard.styled';
import userAvatar from './user.jpg';

export const TaskColumnCard = ({ task, avatarUrl }) => {
  //   const { description, priority } = task;

  //   TODO: замінити const description і const priority даними з пропсів
  const description =
    'А я вам сейчас покажу, звідки приходить цей текст: з ChooseDay -> TasksColumn -> ColumnTasksList -> TaskColumnCard';
  const priority = 'medium';

  const checkedPriority = priority.toUpperCase();

  const getDescription = () => {
    if (description.length <= 26) {
      return description;
    } else {
      return `${description.slice(0, 26)}...`;
    }
  };

  return (
    <CardContainer>
      <TaskDescription> {getDescription()} </TaskDescription>

      <StatsContainer>
        <ImageContainer>
          <UserAvatar src={userAvatar} alt="U" />
          {priority === 'LOW' && <LowPriority> {priority} </LowPriority>}
          {checkedPriority === 'MEDIUM' && (
            <MediumPriority> {priority} </MediumPriority>
          )}
          {priority === 'HIGH' && <HighPriority> {priority} </HighPriority>}
        </ImageContainer>

        <ToolbarContainer>
          <TaskToolbar task={{ column: [] }} />
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
