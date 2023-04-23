import { greaterThan } from 'helpers/breakpoints.styled';
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  height: 640px;

  ${greaterThan(
    'mobile',
    `
  height: 928px;
`
  )}

  ${greaterThan(
    'tablet',
    `
  height: 812px;
`
  )}
`;

export const TableWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;

  background: rgba(220, 227, 229, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  overflow: hidden;

  ${greaterThan(
    'mobile',
    `
    box-shadow: none;
`
  )}
`;

export const CellWrapper = styled.div`
  background: #ffffff;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: ${p => (p.jc ? p.jc : 'flex-start')};
`;

export const DayWrapper = styled.div`
  margin-top: 8px;
  margin-right: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 22px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.16;
  color: ${p => (!p.isSameMonth ? 'lightgrey' : '#343434')};

  ${greaterThan(
    'mobile',
    `
  margin-top: 14px;
  margin-right: 14px;
  width: 26px;
  height: 26px;
  font-size: 16px;
  line-height: 1.12;
`
  )}
`;

export const CurrentDayWrapper = styled(DayWrapper)`
  background-color: #3e85f3;
  border-radius: 6px;
  color: ${p => p.theme.colors.white};
  /* padding-bottom: 1px; */

  ${greaterThan(
    'mobile',
    `
  border-radius: 8px;
`
  )}
`;
