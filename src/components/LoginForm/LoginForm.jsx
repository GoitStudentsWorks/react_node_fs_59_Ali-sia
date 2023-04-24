import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/auth.operations';
import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
  StyledButton,
} from './LoginForm.styled';

// #TODO коли кнопка буде готова, перемістити її в потрібний файл
import { LogoutBtn } from '../LogoutBtn/LogoutBtn';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const dispatch = useDispatch();
  // const history = useHistory();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const data = await dispatch(logIn(values)).unwrap();
      console.log('Login successfull:', data);
      resetForm();
      // history.push('/calendar/month');
    } catch (error) {
      console.error('Login error:', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer>

      {/* #TODO коли кнопка буде готова, перемістити її в потрібний файл */}
      <LogoutBtn />
      
      <FormHeader>Log In</FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputContainer>
              <StyledLabel htmlFor="email">
                Email
                <StyledField
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <ErrorMessage name="email" component="div" />
              </StyledLabel>
            </InputContainer>

            <InputContainer>
              <StyledLabel htmlFor="password">
                Password
                <StyledField
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                />
                <ErrorMessage name="password" component="div" />
              </StyledLabel>
            </InputContainer>

            <StyledButton type="submit" disabled={isSubmitting}>
              Log In
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
