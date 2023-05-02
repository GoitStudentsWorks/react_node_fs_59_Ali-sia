import { AddTaskBtn } from 'components/Buttons/AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from './ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from './ColumnsTasksList/ColumnsTasksList';
import { TaskColumnsWrapper } from './TasksColumn.styled';

export default function TasksColumn({
  title,
  tasksForColumn,
  sortedColumnList,
}) {
  // const toggleModal = () => {
  //   console.log('TasksColumn open modal');
  // };

  return (
    <TaskColumnsWrapper>
      <ColumnHeadBar title={title} />
      <ColumnTasksList
        tasksForColumn={tasksForColumn}
        sortedColumnList={sortedColumnList}
      />
      <AddTaskBtn category={title} />
    </TaskColumnsWrapper>
  );
}

// 1. Компонент отримує в пропсах заголовок групи завданнь та колекцію завданнь цієї групи.
// 2. Компонент рендерить:
//  - ColumnHeadBar - компонент з назвою колонки та кнопою для створення завдання в цій колонці.
//  - ColumnTasksList - компонент що показує список завдань, рендериться за умови, що відповідні завдання є в наявності.
//  - AddTaskBtn - кнопка для додавання завдання в колонку.
