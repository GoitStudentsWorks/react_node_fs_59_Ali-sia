import styled from 'styled-components';

import { greaterThan } from 'helpers/breakpoints.styled';

export const StyledMain = styled.div`
  padding-left: ${prop => prop.theme.space[2] * 5}px;
  padding-right: ${prop => prop.theme.space[2] * 5}px;
  padding-bottom: ${prop => prop.theme.space[3] * 5}px;
  background-color: ${prop => prop.theme.colors.bgcMainTheme};

  ${greaterThan(
    'mobile',
    `padding-left: ${prop => prop.theme.space[7]}px;
  padding-right: ${prop => prop.theme.space[7]}px;
  padding-bottom: ${prop => prop.theme.space[8] - 2}px;`
  )}
  ${greaterThan(
    'laptop',
    `padding-left: ${prop => prop.theme.space[7]}px;
  padding-right: ${prop => prop.theme.space[7]}px;
  padding-bottom: ${prop => prop.theme.space[7]}px;`
  )}
`;
