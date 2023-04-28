import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { greaterThan, lesserThan } from 'helpers/breakpoints.styled';

export const NavContainer = styled.div`
  display: flex;

  background-color: ${p => p.theme.colors.btnLogout};

  ${p =>
    lesserThan(
      'tablet',
      `
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: center;
      height: 268px;`
    )}

  ${p =>
    greaterThan(
      'tablet',
      `
      justify-content: center;
      `
    )}
`;

export const NavLinkStyledRegister = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.xs};

  color: ${props => props.theme.colors.white};
  text-decoration: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;
export const NavLinkStyledLogin = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 131px;

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[7] + 1}px;

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  cursor: pointer;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};

  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.btnLogout};

  img {
    margin-left: ${props => props.theme.space[3]}px;
    fill: ${props => props.theme.colors.btnLogout};
  }

  ${p => greaterThan('tablet', `margin-left: ${p.theme.space[6]}px;`)}
`;
