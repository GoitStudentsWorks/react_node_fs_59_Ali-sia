import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

export const Warapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin: 0 auto;

  max-width: 336px;

  ${greaterThan(
    'mobile',
    `
    max-width: 704px;
    gap: 32x;
`
  )}

  ${greaterThan(
    'tablet',
    `
    max-width: 1087px;
`
  )}
`;
