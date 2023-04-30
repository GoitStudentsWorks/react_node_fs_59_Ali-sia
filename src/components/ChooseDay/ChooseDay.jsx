import DayCalendarHead from './DayCalendarHead/DayCalendarHead';

import {
  ChoosedDayWrapper,
  TasksColumnsList,
  TasksColumnsListWrapper,
} from './ChooseDay.styled';
import TasksColumn from './TasksColumn/TasksColumn';
import { endOfDay, getTime, parseJSON, startOfDay } from 'date-fns';
import { useTasks } from 'hooks/useTasks';

export default function ChoosedDay({
  currentDate,
  activeDate,
  changeActiveDay,
}) {
  const { tasks } = useTasks(); //isTasksLoading
  const columnData = [
    { title: 'To do', number: 1 },
    { title: 'In progress', number: 2 },
    { title: 'Done', number: 3 },
    // { title: 'Notes', number: 5 },
    // { title: 'Other', number: 4 },
  ];

  const getSortedColumnList = columnData =>
    columnData.sort((a, b) => a.number - b.number);

  const sortedColumnList = getSortedColumnList(columnData);

  const dayTasks = tasks
    ?.filter(
      task =>
        getTime(parseJSON(task.date)) >= startOfDay(activeDate) &&
        getTime(parseJSON(task.date)) <= endOfDay(activeDate)
    )
    ?.sort((a, b) => a.date - b.date);

  let tasksForColumn = [];
  function getTasksForColumn(columnTitle) {
    tasksForColumn = dayTasks?.filter(task => task.category === columnTitle);
    // console.log('FILTER TASKS FO COLUMN-------->>>', dayTasks);
  }

  return (
    <>
      <ChoosedDayWrapper>
        <DayCalendarHead
          currentDate={currentDate}
          activeDate={activeDate}
          changeActiveDay={changeActiveDay}
        />
        <TasksColumnsListWrapper>
          <TasksColumnsList>
            {sortedColumnList.map((column, idx) => {
              getTasksForColumn(column.title);
              return (
                <TasksColumn
                  key={idx}
                  title={column.title}
                  sortedColumnList={sortedColumnList}
                  tasksForColumn={tasksForColumn}
                />
              );
            })}
          </TasksColumnsList>
        </TasksColumnsListWrapper>
      </ChoosedDayWrapper>
    </>
  );
}

// 1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колинки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done). На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера.
