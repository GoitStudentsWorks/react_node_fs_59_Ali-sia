import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';
// import { Link } from 'react-router-dom';

export const TaskColumnsWrapper = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* margin-bottom: ${p => p.theme.space[4]}px; */
  padding: 25px 18px 20px 18px;

  min-height: 155px;
  width: 336px;

  border-radius: ${p => p.theme.radii.light};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.12;

  background-color: ${p => p.theme.colors.bgcSecondaryTheme};
  color: ${p => p.theme.colors.textDaysNameAtDaysPage};

  /* ${greaterThan(
    'tablet',
    `
   min-height: 68px;
   width: 704px;
   font-size: 14px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  width: 1087px;
`
  )} */
`;

