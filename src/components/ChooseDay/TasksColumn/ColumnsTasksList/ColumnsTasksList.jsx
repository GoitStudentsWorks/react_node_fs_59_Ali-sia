import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';
import { TasksListContainer } from './ColumnsTasksList.styled';

export default function ColumnTasksList({ tasksForColumn, sortedColumnList }) {
  return (
    <TasksListContainer>
      {tasksForColumn?.map(task => (
        <TaskColumnCard
          key={'task-' + task.id}
          task={task}
          sortedColumnList={sortedColumnList}
        />
      ))}
    </TasksListContainer>
  );
}

// 1. Компонент отримує в пропсах колекцію завдань групи
// 2. Компонент рендерить колекцію компонентів TaskColumnCard
// 3. Компонент має максимальну висоту визначену пропорційно до висоти пристрою юзера.
// 4. Компонент має скрол, якщо висота списку карточок завдань більша визначеної висоти компонента.
