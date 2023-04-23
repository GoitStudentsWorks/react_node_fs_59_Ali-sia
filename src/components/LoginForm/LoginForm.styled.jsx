import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledContainer = styled.div`
  max-width: 335px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[8]}px ${p => p.theme.space[6]}px;

  border-radius: ${props => props.theme.radii.light};

  font-family: ${props => props.theme.fonts.main};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 480px;
  }
`;

export const FormHeader = styled.h2`
  margin-bottom: ${p => p.theme.space[7]}px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.l};

  text-shadow: ${props => props.theme.shadows.headerText};

  color: ${props => props.theme.colors.primary};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: ${p => p.theme.space[6]}px;

  color: ${props => props.theme.colors.black};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 90%;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.xs};
`;

export const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.input};
  border-radius: ${props => props.theme.radii.light};
  outline: 0;

  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};

  background-color: ${props => props.theme.colors.white};

  &:hover{
    background-color: ${props => props.theme.colors.bgcLogin};
  }

  &:focus{
    background-color: ${props => props.theme.colors.bgcLogin};
  }
`;

export const StyledButton = styled.button`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${p => p.theme.space[7]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  cursor: pointer;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};

  color: ${props => props.theme.colors.white};
`;
