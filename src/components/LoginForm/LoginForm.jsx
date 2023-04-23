import React from 'react';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

// import { logIn } from '../../redux/auth/auth.operations';

import {
  StyledContainer,
  FormHeader,
  StyledForm,
  InputContainer,
  StyledLabel,
  StyledField,
  StyledButton,
} from './LoginForm.styled';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  // const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(setSubmitting);
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify('Логін успішний'));
      setSubmitting(false);
    }, 400);
  };

  return (
    <StyledContainer>
      <FormHeader>Log In</FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {({ errors, touched }) => (
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
                {/* If this field has been touched, and it contains an error, display it */}
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
            <StyledButton type="submit">Log In</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledContainer>
  );
};
