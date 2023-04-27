import { Wrapper } from './CalendarPage.styled';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import { useState } from 'react';
import { addDays, addMonths, setDefaultOptions } from 'date-fns';
import TaskModal from 'components/TaskModal/TaskModal';
import { Outlet, useLocation } from 'react-router-dom';

export default function CalendarPage() {
  setDefaultOptions({ weekStartsOn: 1 }); //for date-fns, to start count weeks from monday
  const location = useLocation();
  const currentDate = new Date();
  const [activeDate, setActiveDate] = useState(currentDate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDayPage = location?.pathname.includes('day');
  const tasks = { tasks: [] };

  const changeActiveDay = (value, day) => {
    if (day) {
      return setActiveDate(day);
    }

    if (location.pathname.includes('day')) {
      return setActiveDate(addDays(activeDate, value));
    } else {
      setActiveDate(addMonths(activeDate, value));
    }
  };

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  // const isRefreshing = useSelector(selectIsRefreshing);
  // if (isRefreshing) {
  //   return;
  // }

  // const startDayForFetch = Number(format(startOfMonth(activeDate), 'T'));
  // const endDayForFetch = Number(format(endOfMonth(activeDate), 'T'));
  ///////////////// const startDateForFetch = format(startOfMonth(activeDate), 'T');
  ///////////////// const endDateForFetch = format(endOfMonth(activeDate), 'T');
  // const aa = '1690837200000';
  // console.log('endDayForFetch', endDayForFetch);
  // const difff = startDateForFetch === aa;
  /////////////// console.log('startDateForFetch', startDateForFetch);
  /////////////// console.log('endDateForFetch', endDateForFetch);
  // console.log('tasks', tasks);

  // const day = new Date(+startDateForFetch);

  // useEffect(() => {
  //   // if (!isLoggedIn) {
  //   //   return;
  //   // }
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  // console.log('REDNDER CALENDAR PAGE');
  return (
    <Wrapper>
      <CalendarToolbar
        activeDate={activeDate}
        changeActiveDay={changeActiveDay}
        isDayPage={isDayPage}
      />

      {isDayPage ? (
        <Outlet
          context={{
            currentDate,
            activeDate,
            toggleModal,
            changeActiveDay,
          }}
        />
      ) : (
        <Outlet
          context={{
            currentDate,
            activeDate,
            changeActiveDay,
            tasks,
            toggleModal,
          }}
        />
      )}
      {isModalOpen && <TaskModal onClose={toggleModal} />}
    </Wrapper>
  );
}

// 1. Компонент рендериться на маршрут /calendar.
// 2. При першому вході на сторінку компонент виконує переадресацію на розширений маршрут /calendar/month/:currentDate для відображення календяря місяця
// 2. Сторінка повинна відображатись відповідно до макету на 3х розширеннях(375, 768, 1440)
// 3. На сторінці знаходиться модуль CalendarToolbar - з яким користувач може обрати тип періоду, та його інтервал
// 4. На сторінці відображаеться один з модулів періоду дат календаря:
//  - ChoosedMonth - дозволяє подивитись всі задачі на місяць, перейти на сторінку одного дня ChoosedDay.
//  - ChoosedDay - дозволяє створювати задачі та розділити ці задачі  на групи по ступеню їх виконання.
// 5. При новому відвідуванні додатку та першому вході на сторінку відображаеться модуль ChoosedMonth з розкладкою комірок з датами поточного місяця.
// 6. На сторінці повинен здійснюватись запит за завданнями, якщо вони відсутні в глобальному стейті
// 7. Успіх - дані записуються у відповідний стейт
// 8. Помилка - користувачу показується відповідне пуш-повідомлення
