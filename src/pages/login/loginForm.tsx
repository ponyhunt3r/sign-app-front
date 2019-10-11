import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button'

const LoginForm = ( props: any)=> {

  const { values } = props;

  return (<Form autoComplete="off">
                <Field type="text" name="email" placeholder="email" value={values.email}/>
                <ErrorMessage name="email" />
                <Field type="password" name="password" placeholder="hasło" />
                <ErrorMessage name="password" />
                <Button variant="contained" color="primary" type="submit">Zaloguj</Button> </Form>
  )

}

export default LoginForm