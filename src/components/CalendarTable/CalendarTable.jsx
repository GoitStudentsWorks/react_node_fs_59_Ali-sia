import {
  addDays,
  eachDayOfInterval,
  format,
  getMonth,
  isSameDay,
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
} from './CalendarTable.styled';

export default function CalendarTable({ currentDate, activeDate }) {
  const currentMonth = getMonth(activeDate);
  const totalDaysForGrid = 41; // 42 = (0 - 41)
  const startDay = startOfWeek(startOfMonth(activeDate));
  const endDay = addDays(startDay, totalDaysForGrid);
  const visibleDaysArray = eachDayOfInterval({
    start: startDay,
    end: endDay,
  });

  const isCurrentDay = day => isSameDay(currentDate, day);
  const getIsSameMonth = day => currentMonth === getMonth(day);
  const getDayNumber = day => format(day, 'd');

  return (
    <div>
      <CalendarWrapper>
        <TableWrapper>
          {visibleDaysArray.map(day => (
            <CellWrapper key={format(day, 'ddMMyyyy')}>
              <RowWrapper jc={'flex-end'}>
                {isCurrentDay(day) ? (
                  <CurrentDayWrapper>{getDayNumber(day)}</CurrentDayWrapper>
                ) : (
                  <DayWrapper isSameMonth={getIsSameMonth(day)}>
                    {getDayNumber(day)}
                  </DayWrapper>
                )}
              </RowWrapper>
            </CellWrapper>
          ))}
        </TableWrapper>
      </CalendarWrapper>
    </div>
  );
}
