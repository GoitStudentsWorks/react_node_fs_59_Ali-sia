import React from 'react';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

// import { register } from '../../redux/auth/auth.operations';

import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
  StyledButton,
} from './RegisterForm.styled';

// #TODO - дописати в redux-auth-operations

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(setSubmitting );

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <StyledContainer>
      <FormHeader>Sign Up</FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {({ errors, touched }) => (
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
                {touched.name && errors.name && <div>{errors.name}</div>}
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
                {touched.email && errors.email && <div>{errors.email}</div>}
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
                {touched.password && errors.password && (
                  <div>{errors.password}</div>
                )}
              </StyledLabel>
            </InputContainer>

            <StyledButton type="submit">Sign Up</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
