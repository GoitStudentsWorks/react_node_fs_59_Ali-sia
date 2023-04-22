import React from 'react';
// import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// import { register } from '../../redux/auth/auth.operations';

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
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
            />
            {/* If this field has been touched, and it contains an error, display it
             */}
            {touched.name && errors.name && <div>{errors.name}</div>}

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            {touched.password && errors.password && <div>{errors.password}</div>}

            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
