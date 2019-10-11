import { withFormik } from "formik"
import * as yup from "yup"
import LoginForm from "./loginForm"
import Axios from 'axios';

const LoginWrapper = LoginForm

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required(),
})

function submitLogin(values) {
    return Axios.post('http://localhost:3000/login', values)
    .then((res) => {
      if (res.status === 201) {
        window.alert('u are logged in')
      }
    });
}

export default withFormik({
    handleSubmit: (values, { setSubmitting }) => {
    submitLogin(values)
    setTimeout(() => setSubmitting(false), 3 * 1000)
  },
  validationSchema: LoginValidation,
  mapPropsToValues: () => ({ email: '', password: '' }),
})(LoginWrapper)