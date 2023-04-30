import {
  addDays,
  addMonths,
  format,
  parseISO,
  startOfDay,
  startOfMonth,
} from 'date-fns';
import {
  ButtonsWrapper,
  DateField,
  PeriodPaginationWrapper,
  StyledHiChevronLeft,
  StyledHiChevronRight,
  StyledLink,
} from './PeriodPaginator.styled';
import { useAuth } from 'hooks';

export default function PeriodPaginator({
  activeDate,
  changeActiveDay,
  isDayPage,
}) {
  const { user } = useAuth();
  const date = isDayPage
    ? format(activeDate, 'dd MMMM yyyy')
    : format(activeDate, 'MMMM yyyy');

  const dateForLinkNext = isDayPage
    ? format(addDays(activeDate, 1), 'ddMMMMyyyy')
    : format(addMonths(activeDate, 1), 'MMMMyyyy');

  const dateForLinkPrev = isDayPage
    ? format(addDays(activeDate, -1), 'ddMMMMyyyy')
    : format(addMonths(activeDate, -1), 'MMMMyyyy');

  const isCreatedAtDay = isDayPage
    ? startOfDay(parseISO(user.createdAt)) >= startOfDay(activeDate)
    : parseISO(user.createdAt) >= startOfMonth(activeDate);

  return (
    <PeriodPaginationWrapper>
      <div>
        <DateField>{date}</DateField>
      </div>
      <ButtonsWrapper>
        {isDayPage ? (
          <>
            <StyledLink
              disabled={isCreatedAtDay}
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
              disabled={isCreatedAtDay}
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
