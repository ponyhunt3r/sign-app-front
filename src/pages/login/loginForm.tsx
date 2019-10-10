import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup  from 'yup';
import { PureComponent } from 'react';

const LoginForm = ( props: any)=> {

  const { onSubmit } = props;
  return (<form autoComplete="off">
                <Field type="text" name="email" placeholder="email"/>
                <ErrorMessage name="email" />
                <Field type="password" name="password" placeholder="hasło" />
                <ErrorMessage name="password" />
                <button type="submit">Zaloguj</button> </form>
  )

}

export default LoginForm