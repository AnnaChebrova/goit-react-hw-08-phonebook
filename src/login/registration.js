import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
repeatPassword: '',
};

const Registration = () => {
    const validate = useCallback((values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
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
         {({ isSubmitting }) => (
         <Form>
            <Field type="text" name="name" />
           <ErrorMessage name="name" component="div" />
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <Field type="password" name="passwordRepeat" />
           <ErrorMessage name="passwordRepeat" component="div" />
           <button type="submit" disabled={isSubmitting}>
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
  </div>
);
      }
export { Registration };