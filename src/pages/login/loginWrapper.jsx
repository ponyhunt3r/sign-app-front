import { withFormik } from "formik"
import * as yup from "yup"
import LoginForm from "./loginForm"

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

export default withFormik({
    handleSubmit: (values, { setSubmitting }) => {
    console.log("Submitted Email:", values.email)
    console.log("Submitted Password:", values.password)
    setTimeout(() => setSubmitting(false), 3 * 1000)
  },
  validationSchema: LoginValidation,
  initialValues: {email: 'fff', password: ''}
})(LoginWrapper)