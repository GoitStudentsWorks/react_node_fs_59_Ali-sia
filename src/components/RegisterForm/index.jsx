import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// #TODО - підключити пакети
// $ yarn add formik
// $ yarn add yup

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
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            name="name"
            placeholder="Enter your name"
            type="text"
          />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
          />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};
