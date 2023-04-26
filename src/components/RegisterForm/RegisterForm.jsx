import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { register } from '../../redux/auth/auth.operations';
import { LoginRegisterBtn } from '../Buttons/LoginRegisterBtn/LoginRegisterBtn';

import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
  ErrorMsgContainer,
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

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(res => {
        const successNotify = () =>
          toast.success(
            `Welcome ${res.data.user.name}! Enjoy using the Goose App :)`
          );
        successNotify();
        resetForm();
      })
      .catch(error => {
        const errorNotify = () => toast.error(`${error.message}`);
        errorNotify();
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
        {({ isSubmitting, errors, touched }) => (
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
                {/* If this field has been touched, and it contains an error, display it
                 */}
                {touched.name && errors.name && (
                  <ErrorMsgContainer>{errors.name}</ErrorMsgContainer>
                )}
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
                  autoComplete="off"
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
                  autoComplete="off"
                />
                {/* If this field has been touched, and it contains an error, display it
                 */}
                {touched.password && errors.password && (
                  <ErrorMsgContainer>{errors.password}</ErrorMsgContainer>
                )}
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
