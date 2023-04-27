import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import { useOutletContext } from 'react-router-dom';

export default function ChoosedDay() {
  const { toggleModal } = useOutletContext();

  return (
    <div>
      <div>
        <DayCalendarHead />
        <h1 style={{ color: 'grey' }}>Choosed Day</h1>
        <h2 style={{ color: 'grey' }}> Modal test</h2>
        <button type="button" onClick={() => toggleModal()}>
          openModal
        </button>
      </div>
    </div>
  );
}
