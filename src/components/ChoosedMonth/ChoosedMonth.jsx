import CalendarTable from 'components/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';
// import TaskModal from 'components/TaskModal/TaskModal';

export default function ChoosedMonth({
  currentDate,
  activeDate,
  tasks,
  openModal,
  changeActiveDay,
  togglePage,
}) {
  return (
    <div>
      <MonthCalendarHead currentDate={currentDate} />
      <CalendarTable
        currentDate={currentDate}
        activeDate={activeDate}
        tasks={tasks}
        openModal={openModal}
        changeActiveDay={changeActiveDay}
        togglePage={togglePage}
      />
    </div>
  );
}

// 1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.

// 3. Модуль підписаний на колекцію задач з глобального стейту.
