import styled from 'styled-components';
import { greaterThan } from './../../helpers/breakpoints.styled';

export const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px 40px;

  background: #f7f6f9;

  ${greaterThan(
    'tablet',
    `
        padding: 0 32px 38px;
    `
  )}
`;
