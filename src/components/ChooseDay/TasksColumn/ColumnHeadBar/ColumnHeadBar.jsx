import { useOutletContext } from 'react-router-dom';
import { ColumnHeadBarWrapper, ColumnHeadBarTitle, StyledRoundButton } from './ColumnHeadBar.styled';
import RoundBtnIcon from './RoundBtnIcon.svg';

export default function ColumnHeadBar() {
    const { toggleModal } = useOutletContext();
    
    return (
        <ColumnHeadBarWrapper>
            <ColumnHeadBarTitle>ToDo</ColumnHeadBarTitle>
            <StyledRoundButton
                type="button"
                onClick={() => toggleModal()}>
                <img src={RoundBtnIcon} alt="+"></img>
            </StyledRoundButton>
        </ColumnHeadBarWrapper>
    );
};

// 1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач в цій колонці (To do | In progress | Done)
// 2. Компонент рендерить блок розмітки 
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі.