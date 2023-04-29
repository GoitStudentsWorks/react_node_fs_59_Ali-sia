import { AddTaskBtn } from 'components/Buttons/AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from './ColumnsTasksList/ColumnsTasksList';
import { TaskColumnsWrapper } from './TasksColumn.styled';

export default function TasksColumn({ toggleModal }) {
  const columnData = [
    { title: 'To do', number: 1 },
    { title: 'In progress', number: 2 },
    { title: 'Done', number: 3 },
  ];

  const tasksCollection = {};
  return (
    <TaskColumnsWrapper>
      <ColumnHeadBar title={columnData.title} toggleModal={toggleModal} />
      {tasksCollection && <ColumnTasksList />}

      <AddTaskBtn openModal={toggleModal} />
    </TaskColumnsWrapper>
  );
}

// 1. Компонент отримує в пропсах заголовок групи завданнь та колекцію завданнь цієї групи.
// 2. Компонент рендерить:
//  - ColumnHeadBar - компонент з назвою колонки та кнопою для створення завдання в цій колонці.
//  - ColumnTasksList - компонент що показує список завдань, рендериться за умови, що відповідні завдання є в наявності.
//  - AddTaskBtn - кнопка для додавання завдання в колонку.
