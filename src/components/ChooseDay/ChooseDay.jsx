import React, { useEffect } from 'react';

import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import TasksColumn from './TasksColumn/TasksColumn';

import {
  ChoosedDayWrapper,
  TasksColumnsList,
  TasksColumnsListWrapper,
  AddNewColumn
} from './ChooseDay.styled';

import { endOfDay, getTime, parseJSON, startOfDay } from 'date-fns';
import { useTasks } from 'hooks/useTasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectColumns } from 'redux/columns/columns.selectors';
import { fetchColumns } from 'redux/columns/columns.operations';
import { AddColumnBtn } from 'components/Buttons/AddColumnBtn/AddColumnBtn';

export default function ChoosedDay({
  currentDate,
  activeDate,
  changeActiveDay,
}) {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  const { tasks } = useTasks();
  const columnData = [...columns];

  useEffect(() => {
    dispatch(fetchColumns())
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
  function getTasksForColumn(columnId) {
    tasksForColumn = dayTasks?.filter(task => task.category === columnId);
  }
  let tasksForDeleteColumn = [];
  function getTasksForDeleteColumn(columnId) {
    tasksForDeleteColumn = tasks?.filter(task => task.category === columnId);
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
              getTasksForColumn(column._id);
              getTasksForDeleteColumn(column._id);
              return (
                <TasksColumn
                  key={'taskcolumn' + idx}
                  column={column}
                  sortedColumnList={sortedColumnList}
                  tasksForColumn={tasksForColumn}
                  tasksForDeleteColumn={tasksForDeleteColumn}
                />
              );
            })}
            <AddNewColumn>
              <AddColumnBtn
                children="Add your own category"
                column={columnData}
              />
            </AddNewColumn>
          </TasksColumnsList>
        </TasksColumnsListWrapper>
      </ChoosedDayWrapper>
    </>
  );
}

