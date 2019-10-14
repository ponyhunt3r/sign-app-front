import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button'

const LoginForm = ( props: any)=> {

  const { values } = props;

  return (<div className="login-form">
  <Form autoComplete="off">
                <Field type="text" name="email" placeholder="email" value={values.email}/>
                <div className="validationErr"><ErrorMessage className="validationErr" name="email" /></div>
                
                <Field type="password" name="password" placeholder="hasło" />
                <ErrorMessage className="validationErr" name="password" />
                <Button variant="contained" color="primary" type="submit">Zaloguj</Button>
        </Form>
        </div>
  )

}

export default LoginForm