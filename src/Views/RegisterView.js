import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations  from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}


// import React, { useCallback, useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Link } from 'react-router-dom';
// import { routes } from '../routes';
// import { useDispatch } from 'react-redux';
// import { register } from '../login/thunkLogin';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

// import authOperations from '../redux/auth/auth-operations';

// const INITIAL_VALUES = {
//   name: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

// const RegisterView = () => {
//   const dispatch = useDispatch();
//   const validate = useCallback(values => {
//     const errors = {};

//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }

//     return errors;
//   }, []);

//   const handleSubmit = useCallback(
//     (values, { setSubmitting }) => {
//       const { name, email, password } = values;
//       dispatch(authOperations.register({ name, email, password }));

//       setSubmitting(false);
//     },
//     [dispatch],
//   );

//   return (
//     <div>
//       <h1>Registration form</h1>
//       <Formik
//         initialValues={INITIAL_VALUES}
//         validate={validate}
//         onSubmit={handleSubmit}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               id="name"
//               name="name"
//               label="Name"
//               type="text"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.name && Boolean(errors.name)}
//               helperText={touched.name && errors.name}
//             />

//             <TextField
//               fullWidth
//               id="email"
//               name="email"
//               label="Email"
//               type="email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.email && Boolean(errors.email)}
//               helperText={touched.email && errors.email}
//             />

//             <TextField
//               fullWidth
//               id="password"
//               name="password"
//               label="Password"
//               type="password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.password && Boolean(errors.password)}
//               helperText={touched.password && errors.password}
//             />

//             <TextField
//               fullWidth
//               id="confirmPassword"
//               name="confirmPassword"
//               label="Confirm Password"
//               type="password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.password && Boolean(errors.password)}
//               helperText={touched.password && errors.password}
//             />

//             <Button
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//               disabled={
//                 isSubmitting ||
//                 !(
//                   Object.keys(touched).length ===
//                     Object.keys(INITIAL_VALUES).length &&
//                   Object.keys(errors).length === 0
//                 )
//               }
//             >
//               Submit
//             </Button>
//           </form>
//         )}
//       </Formik>
//       <Link to={routes.login}>Jump to login form</Link>
//     </div>
//   );
// };
// export { RegisterView };
