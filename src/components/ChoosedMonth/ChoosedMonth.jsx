import CalendarTable from 'components/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';

export default function ChoosedMonth({
  currentDate,
  activeDate,
  toggleModal,
  changeActiveDay,
}) {
  return (
    <div>
      <MonthCalendarHead currentDate={currentDate} />
      <CalendarTable
        currentDate={currentDate}
        activeDate={activeDate}
        toggleModal={toggleModal}
        changeActiveDay={changeActiveDay}
      />
    </div>
  );
}
