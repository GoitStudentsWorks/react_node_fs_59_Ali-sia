import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { logIn } from '../../redux/auth/auth.operations';
import { LoginRegisterBtn } from '../Buttons/LoginRegisterBtn/LoginRegisterBtn';

import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
} from './LoginForm.styled';

// #TODO: check
// Make sure you add the <Toaster/> component to your app first.

// #TODO: повидаляти консоль логи

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
  // const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      // const data = await dispatch(logIn(values)).unwrap();
      // console.log('Login successfull:', data);
      // navigate('/calendar/month/:currentDay');
      resetForm();
    } catch (error) {
      const errorNotify = () => toast.error(`${error.message}`);
      errorNotify();
      // console.error('Login error:', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer>
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
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" component="div" />
              </StyledLabel>
            </InputContainer>

            <LoginRegisterBtn
              type="submit"
              disabled={isSubmitting}
              btnText="Log In"
            />
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
