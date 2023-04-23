import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const PeriodPaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${greaterThan(
    'mobile',
    `
   gap: 8px;
`
  )}
`;
export const DateField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;

  background-color: #3e85f3;
  color: ${p => p.theme.colors.white};

  border-radius: 8px;
  line-height: 1.29;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};

  ${greaterThan(
    'mobile',
    `
   height: 34px;
`
  )}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 0;
  color: #616161;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 36px;

  cursor: pointer;
  border: 1px solid rgba(220, 227, 229, 0.5);
  font-size: ${p => p.theme.fontSizes.l};
  background-color: ${p => p.theme.colors.white};

  &:first-of-type {
    border-radius: 8px 0px 0px 8px;
  }
  &:last-of-type {
    border-radius: 0px 8px 8px 0px;
    border-left: none;
  }

  &:hover,
  :focus {
    background-color: #e3f3ff;
  }
  
  ${greaterThan(
    'mobile',
    `
   height: 34px;
`
  )}
`;
