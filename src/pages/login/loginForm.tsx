import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';

const LoginForm = ( props: any)=> {

  const { values } = props;

  return (<Form autoComplete="off">
                <Field type="text" name="email" placeholder="email" value={values.email}/>
                <ErrorMessage name="email" />
                <Field type="password" name="password" placeholder="hasło" />
                <ErrorMessage name="password" />
                <button type="submit">Zaloguj</button> </Form>
  )

}

export default LoginForm