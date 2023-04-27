import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
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
  ErrorMsgContainer,
} from './LoginForm.styled';

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(logIn(values)).unwrap();
      resetForm();
    } catch (error) {
      const errorNotify = () => toast.error(`${error.message}`);
      errorNotify();
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
        {({ isSubmitting, errors, touched }) => (
          <StyledForm>
            <InputContainer>
              <StyledLabel htmlFor="email">
                Email
                <StyledField
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="email"
                />
                {/* If this field has been touched, and it contains an error, display it
                 */}
                {touched.email && errors.email && (
                  <ErrorMsgContainer>{errors.email}</ErrorMsgContainer>
                )}
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
                {/* If this field has been touched, and it contains an error, display it
                 */}
                {touched.password && errors.password && (
                  <ErrorMsgContainer>{errors.password}</ErrorMsgContainer>
                )}
              </StyledLabel>
            </InputContainer>

            <LoginRegisterBtn
              disabled={isSubmitting}
              btnText="Log In"
            />
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
