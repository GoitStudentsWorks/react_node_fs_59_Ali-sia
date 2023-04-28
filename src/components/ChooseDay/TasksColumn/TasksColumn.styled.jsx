import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const TaskColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  ${greaterThan(
    'tablet',
    `
   min-height: 165px;
   width: 344px;
`
  )}
  ${greaterThan(
    'laptop',
    `
  width: 328px;
  min-height: 165px;
`
)}
`;

