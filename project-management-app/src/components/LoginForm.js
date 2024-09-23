import { useDispatch, useSelector, setCurrentUser, selectCurrentUser } from 'react-redux';
import { useState } from 'react';
import { FormGroup, Button, Label } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
    )}; 

export default LoginForm;