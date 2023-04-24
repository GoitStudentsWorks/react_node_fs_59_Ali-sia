import styled from 'styled-components';
import signUpGoose from './SVG/signUpGoose.svg';
import signUpSpeak from './SVG/signUpSpeak.svg';

export const PageContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.bgcLogin};
`;

export const INeedMoreContainers = styled.div`
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

export const PositionImgContainer = styled.div`
  position: absolute;

  top: 50%;
  left: 3%;
`;

export const GooseContainer = styled.div`
  position: relative;

  width: 450px;
  height: 450px;

  display: flexbox;
  align-items: center;
  justify-content: center;

  @media (max-width: 1439px) {
    visibility: hidden;
  }
`;

export const Goose = styled.div`
  position: absolute;

  width: 355px;
  height: 330px;

  background: url(${signUpGoose});
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

  left: 14%;
  top: 4%;

  transform: rotate(-9deg);

  background: url(${signUpSpeak});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TextContainer = styled.div`
  position: absolute;

  left: 10%;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;

  color: #111111;

  transform: rotate(-27deg);
`;
