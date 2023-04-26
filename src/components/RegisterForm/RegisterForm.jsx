import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { register } from '../../redux/auth/auth.operations';
import { LoginRegisterBtn } from '../Buttons/LoginRegisterBtn/LoginRegisterBtn';

import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(data => {
        console.log('Registration success:', data);
        navigate('/calendar');
        resetForm();
      })
      .catch(error => {
        console.error('Registration error:', error.message);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <StyledContainer>
      <FormHeader>Sign Up</FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputContainer>
              <StyledLabel htmlFor="name">
                Name
                <StyledField
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                />
                <ErrorMessage name="name" component="div" />
              </StyledLabel>
            </InputContainer>

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

            <LoginRegisterBtn
              type="submit"
              disabled={isSubmitting}
              btnText="Sign Up"
            />
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
