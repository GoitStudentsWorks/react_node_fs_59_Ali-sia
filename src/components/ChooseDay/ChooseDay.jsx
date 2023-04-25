// import CalendarTable from 'components/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';
// import TaskModal from 'components/TaskModal/TaskModal';

export default function ChoosedDay({ currentDate }) {
  return (
    <div>
      <MonthCalendarHead currentDate={currentDate} />
      <h1>Choosed Day</h1>
    </div>
  );
}
