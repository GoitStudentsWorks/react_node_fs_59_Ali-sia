import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logInGoose from './SVG/logInGoose.svg';
import logInSpeak from './SVG/logInSpeak.svg';

export const PageContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.bgcLogin};
`;

export const BackdropContainer = styled.div`
  position: relative;
  background-color: transparent;

  display: flexbox;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const PositionContainer = styled.div`
  position: absolute;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${p => p.theme.space[5] + 2}px;

  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: ${p => p.theme.space[6]}px;
  }
`;

export const PositionImgContainer = styled.div`
  position: absolute;

  top: 35%;
  left: 65%;
`;

export const GooseContainer = styled.div`
  position: relative;

  width: 500px;
  height: 600px;

  display: flexbox;
  align-items: center;
  justify-content: center;

  @media (max-width: 1439px) {
    /* visibility: hidden; */
    display: none;
  }
`;

export const Goose = styled.div`
  position: absolute;

  width: 80%;
  height: 80%;

  background: url(${logInGoose});
  transform: rotate(-9deg);

  background-repeat: no-repeat;
  background-size: contain;
`;

export const Speak = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 175px;
  height: 125px;

  left: 30%;
  top: 5%;

  transform: rotate(7deg);

  background: url(${logInSpeak});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TextContainer = styled.div`
  position: absolute;

  left: 7%;
  top: 25%;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;

  color: #111111;

  transform: rotate(15deg);
`;

export const AccentText = styled.span`
  color: ${props => props.theme.colors.primary};
`;
