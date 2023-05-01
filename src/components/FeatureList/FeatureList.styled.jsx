import styled from 'styled-components';
import { greaterThan, lesserThan } from 'helpers/breakpoints.styled';

export const List = styled.ul`
  font-weight: 500;
  font-size: 14px;
  color: rgba(17, 17, 17, 0.9);
`;
export const ListItem = styled.li``;
export const ListDescriptionHolder = styled.div``;
export const ListNumber = styled.h3`
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  /* identical to box height, or 80px */

  letter-spacing: -4px;

  /* blue1 */

  color: #3e85f3;
`;
export const ListEmphasize = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: uppercase;

  /* blue1 */

  color: #3e85f3;
`;
export const ListText = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: uppercase;

  color: #171820;
`;
export const ListDescription = styled.p``;
export const ListImg = styled.img``;
