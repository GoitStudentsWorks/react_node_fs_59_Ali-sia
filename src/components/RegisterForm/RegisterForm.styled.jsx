import styled from 'styled-components';
import { Field } from 'formik';

export const StyledContainer = styled.div`
  max-width: 335px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding: 40px 24px;

  border-radius: ${props => props.theme.radii.light};

  font-family: ${props => props.theme.fonts.main};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
  }
`;

export const FormHeader = styled.h2`
  margin-bottom: 32px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.l};

  text-shadow: ${props => props.theme.shadows.headerText};

  color: ${props => props.theme.colors.primary};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.black};
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.xs};
`;

export const StyledField = styled(Field)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  padding: 14px;

  border: ${props => props.theme.borders.input};
  border-radius: ${props => props.theme.radii.light};
  outline: 0;

  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const StyledButton = styled.button`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px;

  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radii.normal};

  background-color: ${props => props.theme.colors.primary};
  box-shadow: ${props => props.theme.shadows.loginBtn};

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes.s};

  color: ${props => props.theme.colors.white};
`;
