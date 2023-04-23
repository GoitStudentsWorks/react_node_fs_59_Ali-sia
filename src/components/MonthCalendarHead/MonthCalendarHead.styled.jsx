import styled from 'styled-components';
import { greaterThan } from 'helpers/breakpoints.styled';

export const DaysNamesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  min-height: 50px;
  max-width: 336px;

  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  color: #616161;

  ${greaterThan(
    'mobile',
    `
  min-height: 46px;
   max-width: 704px;
`
  )}

  ${greaterThan(
    'tablet',
    `
  max-width: 1087px;

`
  )}
`;

export const DayNameWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  color: ${p => (p.isWeekend ? '#3e85f3' : 'inherit')};

  /* &:nth-last-child(-n + 2) {
    color: #3e85f3;
  } */
`;

export const DayName = styled.span`
  display: none;

  ${greaterThan(
    'mobile',
    `display: block;
`
  )}
`;

export const MobileDayName = styled.span`
  display: block;

  ${greaterThan('mobile', `display: none;`)}
`;
