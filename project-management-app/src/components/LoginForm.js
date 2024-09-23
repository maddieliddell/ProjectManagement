import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FormGroup, Button, Label } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// Import the Redux selectors and actions from your slice
import { setCurrentUser, selectCurrentUser, selectIsLoggedIn } from '../user/userSlice';
//import { toHaveFormValues } from '@testing-library/jest-dom/matchers';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const currentUser = useSelector(selectCurrentUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    const newUser = {
        id: Date.now(),
        username: values.username,
        password: values.password
    };
    dispatch(setCurrentUser(newUser)); // Dispatch the login action
  };

  const validateUserLoginForm = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  return (
    <Formik
        initialValues={{ username: '', password: '',}}
        onSubmit={handleLogin}
        validate={validateUserLoginForm}
    >
        {({ isSubmitting}) => (
      <Form>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
             <Field
                id="username"
                name="username"
                placeholder="Username"
                className="form-control"
                                    />
            <ErrorMessage name="username">
                {(msg) => <div className="form-control">{msg}</div>}
            </ErrorMessage>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Field
            id="password"
            name="password"
            placeholder="Enter your password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
            <ErrorMessage name="password">
            {(msg) => <div className="form-control">{msg}</div>}
            </ErrorMessage>
        </FormGroup>
        <Button type="submit" color='primary'>Login</Button>
      </Form>
        )}
    </Formik>
 );
}; 

export default LoginForm;