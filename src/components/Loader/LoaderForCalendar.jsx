import { useEffect } from 'react';

import {
  LoaderCalendarWrapper,
  RockinGooseCalendar,
} from './LoaderForCalendar.styled';

const LoaderForCalendar = () => {
  useEffect(() => {
    return () => {
      setTimeout(console.log('click'), 100000);
    };
  }, []);

  return (
    <LoaderCalendarWrapper>
      <RockinGooseCalendar />
    </LoaderCalendarWrapper>
  );
};

export default LoaderForCalendar;
