import {
  addDays,
  eachDayOfInterval,
  endOfDay,
  format,
  getMonth,
  isSameDay,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import {
  DayWrapper,
  RowWrapper,
  CurrentDayWrapper,
  CalendarWrapper,
  TasksWrapper,
  TaskWrapper,
  MoreTasksLabel,
  CellLink,
  TableList,
} from './CalendarTable.styled';
import { useOutletContext } from 'react-router-dom';

export default function CalendarTable() {
  const { changeActiveDay, openModal, tasks, activeDate, currentDate } =
    useOutletContext();

  const currentMonth = getMonth(activeDate);
  const totalDaysForGrid = 41; // 42 = (0 - 41)
  const startDay = startOfWeek(startOfMonth(activeDate));
  const endDay = addDays(startDay, totalDaysForGrid);
  const visibleDaysArray = eachDayOfInterval({
    start: startDay,
    end: endDay,
  });

  // console.log('tasks', tasks.tasks);

  const isCurrentDay = day => isSameDay(currentDate, day);
  const getIsSameMonth = day => currentMonth === getMonth(day);
  const getDayNumber = day => format(day, 'd');
  const dayForLink = format(activeDate, 'ddMMMMyyyy');

  let filteredTasks = [];
  const getDayTasks = day => {
    filteredTasks = tasks?.tasks?.filter(
      task => task.date >= startOfDay(day) && task.date <= endOfDay(day)
    );
    filteredTasks.sort((a, b) => a.date - b.date);
  };

  const handleClick = (e, item) => {
    //item = day or task
    const { nodeName } = e.target;
    console.log(nodeName);

    if (nodeName === 'BUTTON') {
      // console.log('task', item);
      e.stopPropagation();
      openModal();

      return;
    }
    changeActiveDay(0, item);
  };

  return (
    <div>
      <CalendarWrapper>
        <TableList>
          {visibleDaysArray.map(day => (
            <li key={format(day, 'ddMMyyyy')}>
              <CellLink
                to={`/calendar/day/${dayForLink}`}
                onClick={e => handleClick(e, day)}
                issamemonth={getIsSameMonth(day).toString()}
              >
                <RowWrapper>
                  {isCurrentDay(day) ? (
                    <CurrentDayWrapper>{getDayNumber(day)}</CurrentDayWrapper>
                  ) : (
                    <DayWrapper isSameMonth={getIsSameMonth(day)}>
                      {getDayNumber(day)}
                    </DayWrapper>
                  )}
                </RowWrapper>
                <TasksWrapper>
                  {getDayTasks(day)}
                  {filteredTasks.slice(0, 2).map(task => (
                    <TaskWrapper
                      key={task.id}
                      priority={task.priority}
                      onClick={e => handleClick(e, task)}
                    >
                      {task.title}
                    </TaskWrapper>
                  ))}
                  {filteredTasks.length > 2 && (
                    <MoreTasksLabel>
                      {filteredTasks.length - 2} more..
                    </MoreTasksLabel>
                  )}
                </TasksWrapper>
              </CellLink>
            </li>
          ))}
        </TableList>
      </CalendarWrapper>
    </div>
  );
}
