import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const ChoosedDayWrapper = styled.div`
  overflow: hidden;
`;
export const TasksColumnsListWrapper = styled.div`
  overflow-x: auto;
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

export const AddNewColumn= styled.div`
  /* display: flex; */
  flex-grow: 1;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  padding: 25px 6px 25px 18px;

  height: 74px;
  width: 336px;

  border-radius: ${p => p.theme.radii.light};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.12;

  background-color: ${p => p.theme.colors.bgcSecondaryTheme};
  color: ${p => p.theme.colors.textDaysNameAtDaysPage};

  ${greaterThan(
    'tablet',
    `
   height: 68px;
   width: 344px;
   padding: 27px 8px 27px 20px;
`
  )}
`;
