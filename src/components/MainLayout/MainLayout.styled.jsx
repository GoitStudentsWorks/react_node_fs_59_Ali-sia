import styled from 'styled-components';

import { greaterThan } from 'helpers/breakpoints.styled';

export const StyledMain = styled.div`
  background-color: ${prop => prop.theme.colors.bgcMainTheme};
  min-height: 100vh;

  
`;

export const WrapperMain = styled.div`
  ${() =>
    greaterThan(
      'laptop',
      `
    display: flex;
    flex-direction: row;
    justify-content: center;
  `
    )};
`;

export const WrapperMainContent = styled.div``;
