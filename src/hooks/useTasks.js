import { useSelector } from 'react-redux';

export const useTasks = () => {
  const tasks = useSelector(getTasks);
  const isTasksLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const periods = useSelector(getRecievedPeriods);

  return {
    tasks,
    isTasksLoading,
    error,
    periods,
  };
};

export const getTasks = state => state.tasks.tasks;
export const getIsLoading = state => state.tasks.isTasksLoading;
export const getError = state => state.tasks.error;
export const getRecievedPeriods = state => state.tasks.periods;
