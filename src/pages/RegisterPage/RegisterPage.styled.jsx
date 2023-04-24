import styled from 'styled-components';
import signUpGoose from './SVG/signUpGoose.svg';
import signUpSpeak from './SVG/signUpSpeak.svg';

export const PageContainer = styled.div`
  position: fixed;

  display: flexbox;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.bgcLogin};
`;

export const GooseContainer = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    visibility: hidden;
  }
`;

export const Goose = styled.div`
  position: absolute;

  width: 340px;
  height: 340px;
  left: 5%;
  top: 60%;

  background: url(${signUpGoose});
  transform: rotate(-8deg);

  background-repeat: no-repeat;
  background-size: contain;
`;

export const Speak = styled.div`
  position: absolute;
  width: 200px;
  height: 130px;
  left: 5%;
  top: 50%;

  transform: rotate(-5deg);

  background: url(${signUpSpeak});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 48px;
  left: 5.5%;
  top: 54%;

  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;

  color: #111111;

  transform: rotate(-30deg);
`;
