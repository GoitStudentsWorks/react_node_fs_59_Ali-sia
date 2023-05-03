import React, { useState } from 'react';
import AddTaskIcon from './AddTaskIcon.svg';
import { StyledBtn } from './AddColumnBtn.styled';
// import TaskModal from 'components/TaskModal/TaskModal';
import ColumnModal from 'components/ColumnModal/ColumnModal';

export const AddColumnBtn = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <StyledBtn onClick={handleOpenModal}>
                <img src={AddTaskIcon} alt="+"></img>
                <span>{children}</span>
            </StyledBtn>
            <ColumnModal
                onClose={handleCloseModal}
                isModalOpen={isModalOpen}
            />
        </>
    );
};