import { withFormik } from "formik"
import * as yup from "yup"
import LoginForm from "./loginForm"
import Axios from 'axios';
import RootStore from './../../shared/stores/RootStore'

const LoginWrapper = LoginForm
const { authStore, messageStore } = RootStore

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
  console.log(RootStore)
    return Axios.post('http://localhost:3000/login', values)
    .then((res) => {
      if (res.status === 201) {
        authStore.setLogged(true)
        authStore.setToken(res.data.access_token);
        messageStore.displayMessage("Login successfull")
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