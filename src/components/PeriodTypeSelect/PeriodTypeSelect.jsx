import { Button, ButtonsWrapper } from './PeriodTypeSelect.styled';

export default function PeriodTypeSelect({ isMonthPage, togglePage }) {
  return (
    <ButtonsWrapper>
      <Button type="button" onClick={() => togglePage()} disabled={isMonthPage}>
        Month
      </Button>
      <Button
        type="button"
        onClick={() => togglePage()}
        disabled={!isMonthPage}
      >
        Day
      </Button>
    </ButtonsWrapper>
  );
}
