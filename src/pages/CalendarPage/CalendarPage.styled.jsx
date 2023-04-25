import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  max-width: 336px;

  font: inherit;

  ${greaterThan(
    'tablet',
    `
    max-width: 704px;
    gap: 32x;
`
  )}

  ${greaterThan(
    'laptop',
    `
    width: 1087px;
    max-width: 1087px;
    padding-left: 32px;
    padding-right: 32px;
`
  )}
`;
