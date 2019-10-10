import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup  from 'yup';
import { PureComponent } from 'react';

export default class LoginForm extends PureComponent {
render() {
  return (<Form noValidate autoComplete="off">
                <Field type="text" name="email" placeholder="email" />
                <ErrorMessage name="email" />
                <Field type="password" name="password" placeholder="hasło" />
                <ErrorMessage name="password" />
                <button type="submit">Załóż konto</button> </Form>
  )
 }
}