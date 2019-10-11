import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { PureComponent } from 'react';

export default class LoginForm extends PureComponent {
render() {
  return (<Form noValidate autoComplete="off">
                <Field type="text" name="email" placeholder="email" />
                <ErrorMessage name="email" />
                <Field type="password" name="password" placeholder="hasło" />
                <ErrorMessage name="password" />
                <Field type="password" name="confirmPassword" placeholder="potwiedź hasło" />
                <ErrorMessage name="confirmPassword" />
                <button type="submit">Załóż konto</button> </Form>
  )
 }
}