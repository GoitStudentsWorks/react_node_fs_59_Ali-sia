import ColumnToolbar from 'components/ColumnToolbar/ColumnToolbar';
import React, { useState } from 'react';
import TaskModal from '../../../TaskModal/TaskModal';
import {
  ColumnHeadBarWrapper,
  ColumnHeadBarTitle,
  StyledRoundButton,
  RoundBtnIconSvg,
} from './ColumnHeadBar.styled';

export default function ColumnHeadBar({column}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ColumnHeadBarWrapper>
      <ColumnHeadBarTitle>{column.title}</ColumnHeadBarTitle>
      {/* <StyledRoundButton type="button" onClick={handleOpenModal}>
        <RoundBtnIconSvg />
      </StyledRoundButton> */}
      <div><ColumnToolbar column={column}/></div>
      {/* <ColumnToolbar /> */}
      {/* <TaskModal
        category={title}
        onClose={handleCloseModal}
        isModalOpen={isModalOpen}
      /> */}
    </ColumnHeadBarWrapper>
  );
}

// 1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач в цій колонці (To do | In progress | Done)
// 2. Компонент рендерить блок розмітки
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі.
