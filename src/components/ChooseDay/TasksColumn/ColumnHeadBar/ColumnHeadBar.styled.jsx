import styled from 'styled-components';
// import { greaterThan } from 'helpers/breakpoints.styled';
// import { Link } from 'react-router-dom';



export const ColumnHeadBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
 
export const ColumnHeadBarTitle = styled.h2`
  color: ${p => p.theme.colors.textHeaderTheme};
`;

export const StyledRoundButton = styled.button`
    border: none;
    background-color: inherit;
`;
