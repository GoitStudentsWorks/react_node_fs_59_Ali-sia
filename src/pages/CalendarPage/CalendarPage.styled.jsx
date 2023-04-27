import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  max-width: 375px;
  padding: 0 20px 52px;

  font: inherit;

  ${greaterThan(
    'tablet',
    `
   
    max-width: 768px;
    height: 1032px;
    padding 0 32px 42px;
    gap: 32x;
`
  )}

  ${greaterThan(
    'laptop',
    `
    height: 909px;
    width: 1151px;
    max-width: 1151px;
    padding 0 32px 32px;

`
  )}
`;
