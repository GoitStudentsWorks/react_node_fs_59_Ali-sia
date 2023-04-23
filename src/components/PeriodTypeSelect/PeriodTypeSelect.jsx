import { Button, ButtonsWrapper } from './PeriodTypeSelect.styled';

export default function PeriodTypeSelect() {
  return (
    <ButtonsWrapper>
      <Button type="button">Month</Button>
      <Button type="button">Day</Button>
    </ButtonsWrapper>
  );
}
