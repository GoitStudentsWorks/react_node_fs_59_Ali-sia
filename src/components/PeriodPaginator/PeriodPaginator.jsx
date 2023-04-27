import { addDays, addMonths, format } from 'date-fns';
import {
  ButtonsWrapper,
  DateField,
  PeriodPaginationWrapper,
  StyledHiChevronLeft,
  StyledHiChevronRight,
  StyledLink,
} from './PeriodPaginator.styled';

export default function PeriodPaginator({
  activeDate,
  changeActiveDay,
  isDayPage,
}) {
  const date = isDayPage
    ? format(activeDate, 'dd MMMM yyyy')
    : format(activeDate, 'MMMM yyyy');

  const dateForLinkNext = isDayPage
    ? format(addDays(activeDate, 1), 'ddMMMMyyyy')
    : format(addMonths(activeDate, 1), 'MMMMyyyy');

  const dateForLinkPrev = isDayPage
    ? format(addDays(activeDate, -1), 'ddMMMMyyyy')
    : format(addMonths(activeDate, -1), 'MMMMyyyy');

  return (
    <PeriodPaginationWrapper>
      <div>
        <DateField>{date}</DateField>
      </div>
      <ButtonsWrapper>
        {isDayPage ? (
          <>
            <StyledLink
              onClick={() => changeActiveDay(-1)}
              to={`/calendar/day/${dateForLinkPrev}`}
            >
              <StyledHiChevronLeft />
            </StyledLink>
            <StyledLink
              onClick={() => changeActiveDay(1)}
              to={`/calendar/day/${dateForLinkNext}`}
            >
              <StyledHiChevronRight />
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink
              to={`/calendar/month/${dateForLinkPrev}`}
              onClick={() => changeActiveDay(-1)}
            >
              <StyledHiChevronLeft />
            </StyledLink>
            <StyledLink
              to={`/calendar/month/${dateForLinkNext}`}
              onClick={() => changeActiveDay(1)}
            >
              <StyledHiChevronRight />
            </StyledLink>
          </>
        )}
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
