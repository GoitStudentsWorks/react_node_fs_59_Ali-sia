import { useOutletContext } from 'react-router-dom';
import { ColumnHeadBarWrapper } from './ColumnHeadBar.styled';

export default function ColumnHeadBar() {
    const { toggleModal } = useOutletContext();

    return (
        <ColumnHeadBarWrapper>
            <h2>ToDo</h2>
            <button type="button" onClick={() => toggleModal()}>+</button>
        </ColumnHeadBarWrapper>
    )
}

// 1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач в цій колонці (To do | In progress | Done)
// 2. Компонент рендерить блок розмітки 
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі.