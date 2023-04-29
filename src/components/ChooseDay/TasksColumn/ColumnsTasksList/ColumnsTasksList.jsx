import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';
import {TasksListContainer} from './ColumnsTasksList.styled'

export default function ColumnTasksList({ tasks }) {
  return (
    <TasksListContainer>
      {/* TODO: коли в пропси будуть приходити таски, це розкоментувати: */}
      {/* {tasks.map(task => (
        <TaskColumnCard key={task.id} task={task} />
      ))} */}

      {/* TODO: коли в пропси будуть приходити таски, це видалити: */}
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
      <TaskColumnCard />
    </TasksListContainer>
  );
}

// 1. Компонент отримує в пропсах колекцію завдань групи
// 2. Компонент рендерить колекцію компонентів TaskColumnCard
// 3. Компонент має максимальну висоту визначену пропорційно до висоти пристрою юзера.
// 4. Компонент має скрол, якщо висота списку карточок завдань більша визначеної висоти компонента.
