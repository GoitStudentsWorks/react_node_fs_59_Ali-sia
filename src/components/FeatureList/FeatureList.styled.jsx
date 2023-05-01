import styled from 'styled-components';
import { greaterThan, lesserThan } from 'helpers/breakpoints.styled';

export const List = styled.ul`
  font-weight: 500;
  font-size: 14px;
  color: rgba(17, 17, 17, 0.9);

  li:nth-child(2n) div {
    ${props =>
      greaterThan(
        'tablet',
        `
            margin-left:auto;
        `
      )}
  }
`;
export const ListItem = styled.li`
  margin-bottom: 64px;
`;
export const ListDescriptionHolder = styled.div`
  ${props =>
    greaterThan(
      'tablet',
      `
        width: 275px
      `
    )}
`;
export const ListNumber = styled.h3`
  margin-bottom: 14px;

  font-weight: 700;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: -4px;
  color: #3e85f3;

  ${props =>
    greaterThan(
      'tablet',
      `
        font-size: 104px;
        line-height: 104px;
      `
    )}
`;
export const ListEmphasize = styled.p`
  display: inline-block;

  margin-bottom: 8px;
  padding: 8px 18px;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;

  color: #3e85f3;
  background-color: #dcebf7;
  border-radius: 44px;

  ${props =>
    greaterThan(
      'tablet',
      `
        font-size: 40px;
        line-height: 44px;
        padding: 6px 18px;
      `
    )}
`;
export const ListText = styled.p`
  margin-bottom: 14px;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;

  text-transform: uppercase;

  color: #171820;

  ${props =>
    greaterThan(
      'tablet',
      `
        margin-bottom: 24px;

        font-size: 40px;
        line-height: 44px;
      `
    )}
`;
export const ListDescription = styled.p`
  margin-bottom: 40px;
  ${props =>
    greaterThan(
      'tablet',
      `
        margin-bottom: 48px;
      `
    )}
`;
export const ListImg = styled.img`
  ${props =>
    greaterThan(
      'tablet',
      `
      `
    )}
`;
