import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import { routes } from "../routes";

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Registration = () => {
    const validate = useCallback((values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (
          values.name.length < 3) {
          errors.name = 'Name should be more then 3 symbols';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Required';
        } else if (
          values.password.length < 8) {
          errors.password = 'password should be more then 8 symbols';
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = 'Required';
        } else if (
          values.confirmPassword.length < 8) {
          errors.confirmPassword = 'password should be more then 8 symbols';
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = 'Confirm password should be equal to password';
        }
        return errors;
      }, []);

     const handleSubmit = useCallback((values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
     }, []);
              
    return (
  <div>
    <h1>Registration form</h1>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validate}
      onSubmit={handleSubmit}
    >
         {({ isSubmitting, touched, errors }) => (
         <Form>
            <Field type="text" name="name" />
           <ErrorMessage name="name" component="div" />
           <br />

           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
                     <br />

           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <br />

           <Field type="password" name="passwordRepeat" />
           <ErrorMessage name="passwordRepeat" component="div" />
           <br />

           <button type="submit" disabled={isSubmitting ||
                !(
                  Object.keys(touched).length ===
                    Object.keys(INITIAL_VALUES).length &&
                  Object.keys(errors).length === 0
                )}>
             Submit
           </button>
         </Form>
       )}
      {/* {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form> */}
      {/* )} */}
    </Formik>
    <Link to={routes.login}>Jump to login form</Link>

  </div>
);
      }
export { Registration };