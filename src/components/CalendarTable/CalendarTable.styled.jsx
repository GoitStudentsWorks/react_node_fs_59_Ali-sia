import { between, greaterThan } from 'helpers/breakpoints.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const getTasksColor = p => {
  const c = p.theme.colors;
  switch (p.priority) {
    case 'low':
      return `color: ${c.primary}; background-color: ${c.taskSecondaryLow};`;
    case 'medium':
      return `color: ${c.taskMainMedium}; background-color: ${c.taskSecondaryMedium};`;
    case 'high':
      return `color: ${c.taskMainHigh}; background-color: ${c.taskSecondaryHigh};`;
    default:
      return `color: ${c.black}; background-color: ${c.secondary};`;
  }
};

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  height: 640px;

  ${greaterThan(
    'tablet',
    `
  height: 928px;
`
  )}

  ${greaterThan(
    'laptop',
    `
  height: 812px;
`
  )}
`;

export const TableList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  grid-gap: 1px;
  marker: none;

  border-radius: ${p => p.theme.radii.light};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};
  background-color: ${p => p.theme.colors.taskBorderTheme};
  overflow: hidden;
`;
export const CellLink = styled(Link)`
  padding: 8px 2px 2px 2px;
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  background-color: ${p => p.theme.colors.bgcSecondaryTheme};

  opacity: ${p => (p.issamemonth === 'false' ? '0.7' : 1)};

  &:hover {
    border: ${p =>
      `${p.theme.borders.normal} ${p.theme.colors.taskBorderTheme}`};
  }

  ${greaterThan(
    'tablet',
    `
  padding: 14px 4px 4px 4px;
`
  )}

  ${greaterThan(
    'laptop',
    `
  padding: 14px 8px 8px 8px;
`
  )}
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${greaterThan(
    'tablet',
    `
  margin-right: 10px;
`
  )}
`;

export const DayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 22px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.16;

  color: ${p =>
    p.isSameMonth
      ? p.theme.colors.calendarDayNumbers
      : p.theme.colors.moreTaskLabel};

  ${greaterThan(
    'tablet',
    `
  width: 26px;
  height: 26px;
  font-size: 16px;
  line-height: 1.12;
`
  )}
`;

export const CurrentDayWrapper = styled(DayWrapper)`
  background-color: ${p => p.theme.colors.primary};
  border-radius: 6px;
  color: ${p => p.theme.colors.white};
  /* padding-bottom: 1px; */

  ${greaterThan(
    'tablet',
    `
  border-radius: 8px;
`
  )}
`;

export const TasksWrapper = styled.div`
  display: flex;
  flex-basis: 44px;
  flex-grow: 1;
  flex-direction: column;
  gap: 2px;
`;

export const TaskWrapper = styled.button`
  padding: 0 4px 0 8px;
  width: 100%;
  height: 22px;
  line-height: 1;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  ${p => getTasksColor(p)};
  cursor: pointer;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxs};

  ${greaterThan(
    'tablet',
    `
  padding: 0 10px 0 12px;
  height: 26px;
  font-size: 14px;
`
  )}

  ${greaterThan(
    'laptop',
    `
  padding: 0 12px 0 12px;
`
  )}
`;

export const MoreTasksLabel = styled.div`
  margin-top: auto;

  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};

  color: grey;

  ${greaterThan(
    'tablet',
    `
  font-size: 16px;
`
  )}
  ${between(
    'mobile',
    'tablet',
    `
  margin: auto;
`
  )};
`;
