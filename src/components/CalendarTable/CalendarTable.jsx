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
  TableWrapper,
  CellWrapper,
  DayWrapper,
  RowWrapper,
  CurrentDayWrapper,
  CalendarWrapper,
  TasksWrapper,
  TaskWrapper,
  MoreTasksLabel,
} from './CalendarTable.styled';

export default function CalendarTable({
  currentDate,
  activeDate,
  tasks,
  openModal,
  changeActiveDay,
  togglePage,
}) {
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

    if (nodeName === 'BUTTON') {
      // console.log('task', item);
      e.stopPropagation();
      openModal();

      return;
    }
    changeActiveDay(0, item);
    togglePage();
  };

  return (
    <div>
      <CalendarWrapper>
        <TableWrapper>
          {visibleDaysArray.map(day => (
            <CellWrapper
              key={format(day, 'ddMMyyyy')}
              onClick={e => handleClick(e, day)}
              isSameMonth={getIsSameMonth(day)}
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
            </CellWrapper>
          ))}
        </TableWrapper>
      </CalendarWrapper>
    </div>
  );
}
