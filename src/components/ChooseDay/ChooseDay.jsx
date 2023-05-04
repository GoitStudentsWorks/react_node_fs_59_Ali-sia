import React, { useEffect } from 'react';
// , { useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchColumns } from 'redux/columns/columns.operations';
// import { selectColumns, selectError } from 'redux/columns/columns.selectors';

import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumn from './TasksColumn/TasksColumn';

import {
  ChoosedDayWrapper,
  TasksColumnsList,
  TasksColumnsListWrapper,
} from './ChooseDay.styled';

import { endOfDay, getTime, parseJSON, startOfDay } from 'date-fns';
import { useTasks } from 'hooks/useTasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumns } from 'redux/columns/columns.selectors';
// useSelector
import { fetchColumns } from 'redux/columns/columns.operations';

export default function ChoosedDay({
  currentDate,
  activeDate,
  changeActiveDay,
}) {
  const dispatch = useDispatch();
  // const error = useSelector(selectError);
  const columns = useSelector(selectColumns);

  const { tasks } = useTasks();
  const columnData = [...columns];

  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch]);

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
                  key={'taskcolumn' + idx}
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
};

