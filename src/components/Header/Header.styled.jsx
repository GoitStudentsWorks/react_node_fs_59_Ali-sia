import styled from 'styled-components';

import { greaterThan } from 'helpers/breakpoints.styled';

import { ReactComponent as BurgerSVG } from './burger.svg';
import glorygoose from './glorygoose.png';
import glorygoose2x from './glorygoose@2x.png';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 64px;

  margin-left: auto;
  margin-right: auto;

  max-width: ${props => props.theme.breakpoints.mobile};

  background-color: transparent;
  color: ${props => props.theme.colors.textHeaderTheme};

  ${props =>
    greaterThan(
      'tablet',
      `
        max-width: ${props.theme.breakpoints.tablet};
        padding-left: 32px;
        padding-right: 32px;
    `
    )};

  ${props =>
    greaterThan(
      'laptop',
      `
        min-width: 1151px;
        max-width: 1151px;
        height: 132px;
        padding-bottom: 32px;
    )};
`
    )};
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  padding: 4px;

  cursor: pointer;

  display: block;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.loginBtn};
    border-radius: 50%;
  }

  ${() =>
    greaterThan(
      'laptop',
      `
        display: none;
    `
    )};
`;

export const PageName = styled.h1`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.heading};

  line-height: 1;

  text-shadow: ${props => props.theme.shadows.headerText};
`;

export const BurgerSVGStyled = styled(BurgerSVG)`
  display: block;
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textHeaderTheme};

  ${props =>
    greaterThan(
      'laptop',
      `
        width: 32px;
        height: 32px;
    `
    )};
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  height: 100%;

  background-color: transparent;
`;
export const ForTheGloryOfMentors = styled.div`
  ${() =>
    greaterThan(
      'laptop',
      `
        width: 100%;
        height: 100%;
        background: no-repeat url(${glorygoose});
        background-size: 100% 100%;

        @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
            background-image: url(${glorygoose2x});
        };
    `
    )};
`;

export const SiteNameContainer = styled.div`
  display: none;

  ${() =>
    greaterThan(
      'laptop',
      `
        display: flex;
        align-items: center;
        gap: 8px;
    `
    )};
`;

export const GooseContainer = styled.div`
  width: 64px;
  height: 60px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TakeToWork = styled.div`
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.29;

  & span {
    color: ${props => props.theme.colors.btnLogout};
  }
`;
