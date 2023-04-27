import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const ChoosedDayWrapper = styled.div`
overflow: hidden;

`;
export const TasksColumnsListWrapper = styled.div`
  overflow-x: scroll;
  width: 336px;
`;
export const TasksColumnsList = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: fit-content;

  /* ${greaterThan(
    'tablet',
    `
   min-height: 68px;
   max-width: 704px;
   font-size: 14px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  max-width: 1087px;
`
  )} */
// `;

// export const DayNameAndNumberWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   justify-content: center;
//   align-items: center;
//   gap: 6px;
// `;

// //Day Name
// export const DayName = styled.span`
//   display: none;

//   ${greaterThan(
//     'tablet',
//     `
//    display: block;
//    gap:8px;
// `
//   )}
// `;

// export const MobileDayName = styled.span`
//   display: block;

//   ${greaterThan('tablet', `display: none;`)}
// `;

// //Day Number
// export const DayNumber = styled(Link)`
//   padding: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 20px;
//   height: 22px;

//   font-weight: ${p => p.theme.fontWeights.bold};
//   font-size: ${p => p.theme.fontSizes.xs};
//   line-height: 1;

//   border-radius: 6px;
//   border: none;
//   color: ${p =>
//     p.iscurrentday === 'true'
//       ? p.theme.colors.white
//       : p.theme.colors.calendarDayNumbers};

//   background-color: ${p =>
//     p.iscurrentday === 'true'
//       ? p.theme.colors.primary
//       : p.theme.colors.bgcSecondaryTheme};

//   &:hover {
//     outline: ${p =>
//       `${p.theme.borders.medium} ${p.theme.colors.calendarDayNumbers}`};
//   }

//   ${p =>
//     p.isselectedday === 'true' &&
//     `outline: ${p.theme.borders.normal} ${p.theme.colors.calendarDayNumbers}`};

//   ${greaterThan(
//     'tablet',
//     `
//   width: 26px;
//   height: 26px;
//   font-size: 16px;
//   border-radius: 8px;
// `
//   )}
// `;
