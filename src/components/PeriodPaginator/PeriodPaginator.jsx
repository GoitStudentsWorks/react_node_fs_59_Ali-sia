import { addMonths, format } from 'date-fns';
import {
  Button,
  ButtonsWrapper,
  DateField,
  PeriodPaginationWrapper,
} from './PeriodPaginator.styled';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function PeriodPaginator({ activeDate, setActiveDate }) {
  const date = format(activeDate, 'MMMM yyyy');
  const handlePrevBtnClick = () => setActiveDate(addMonths(activeDate, -1));
  const handleNextBtnClick = () => setActiveDate(addMonths(activeDate, 1));

  return (
    <PeriodPaginationWrapper>
      <div>
        <DateField>{date}</DateField>
      </div>
      <ButtonsWrapper>
        <Button type="button" onClick={() => handlePrevBtnClick()}>
          <HiChevronLeft />
        </Button>
        <Button type="button" onClick={() => handleNextBtnClick()}>
          <HiChevronRight />
        </Button>
      </ButtonsWrapper>
    </PeriodPaginationWrapper>
  );
}
// 1. Компонент отримує в пропсах дату, тип періоду та метод для зміни дати.
// 2. Компонент рендерить розмітку з відформатованим періодом дат в залежності від обраних дати та періоду та блок з кнопками для зміни дати, що збільшують або зменшують період до наступного/попереднього відповідно.
// 3. Клік по кнопках змінює дату в залежності від типу періоду:
//  - month - залишає число поточного дня місяця змінюючи місяць/рік попереднього/наступного місяця
//  - day - змінює дату поточного дня  на дату попереднього/наступного дня
// 4. Компонент форматує період:
//  - month - MARCH 2023
//  - day - 6 MARCH 2023
