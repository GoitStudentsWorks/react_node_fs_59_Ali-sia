import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

export const PeriodSelectorWrapper = styled.div`
  display: flex;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 76px;

  cursor: pointer;
  border: none;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.29;

  color: #3e85f3;
  background-color: #cae8ff;

  &:first-of-type {
    border-right: 1px solid rgba(62, 133, 243, 0.2);
    border-radius: 8px 0px 0px 8px;
  }
  &:last-of-type {
    border-radius: 0px 8px 8px 0px;
  }

  &:hover,
  :focus {
    background-color: #e3f3ff;
  }

  ${greaterThan(
    'mobile',
    `
 font-size: ${p => p.theme.fontSizes.m};
`
  )}
`;
