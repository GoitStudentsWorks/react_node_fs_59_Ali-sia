import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const CalendarToolbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  ${greaterThan(
    'mobile',
    `
  flex-direction: row;
  justify-content: space-between;
`
  )}
`;
