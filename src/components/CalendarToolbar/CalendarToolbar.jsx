import PeriodPaginator from 'components/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarWrapper } from './CalendarToolbar.styled';

export default function CalendarToolbar({ activeDate, setActiveDate }) {
  return (
    <CalendarToolbarWrapper>
      <PeriodPaginator
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      ></PeriodPaginator>
      <PeriodTypeSelect></PeriodTypeSelect>
    </CalendarToolbarWrapper>
  );
}

// 1. Компонент рендерить:
//  - PeriodPaginator - дозволяє юзеру змінити дату періоду, задачі за який він хоче подивитись.
//  - PeriodTypeSelect - дозволяє юзеру змінити тип періоду, задачі за який він хоче подивитись.
//
// 2. Компонент отримує тип періоду, та має локальний стейт з датою.
// При зміні дати або типу періоду відбуваеться запит на отримання задач за обраний період, якщо задач з даного періоду досі немає в глобальному стейті.
// Успіх - дані пишуться в глобальний стейт
// Помилка - виводиться відповідне пуш повідомлення.
