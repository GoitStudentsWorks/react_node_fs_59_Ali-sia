import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const ChoosedDayWrapper = styled.div`
  overflow: hidden;
`;
export const TasksColumnsListWrapper = styled.div`
  overflow-x: scroll;
  width: 336px;
  ${greaterThan(
    'tablet',
    `
   width: 704px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  width: 1087px;
`
  )}
`;
export const TasksColumnsList = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: fit-content;
  ${greaterThan(
    'tablet',
    `
   gap: 16px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  gap: 27px;
`
  )};
`;
