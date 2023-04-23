import CalendarTable from 'components/CalendarTable/CalendarTable';
import MonthCalendarHead from 'components/MonthCalendarHead/MonthCalendarHead';

export default function ChoosedMonth({ currentDate, activeDate }) {
  return (
    <div>
      <MonthCalendarHead currentDate={currentDate} />
      <CalendarTable currentDate={currentDate} activeDate={activeDate} />
    </div>
  );
}

// 1. Модуль рендериться на розширеному маршруті - /calendar/month/:currentDate
// 2. Модуль рендерить компоненти:
//  - MonthCalendarHead - дні тижня без дат
//  - CalendarTable - таблиця з днями обраного місяця, відповідно до днів тижня.

// 3. Модуль підписаний на колекцію задач з глобального стейту.
