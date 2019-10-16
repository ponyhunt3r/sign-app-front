import { withFormik } from "formik"
import * as yup from "yup"
import RegisterForm from "./registerForm"
import Axios from 'axios';
import RootStore from './../../shared/stores/RootStore'


const RegisterWrapper = RegisterForm
const { MessageStore } = RootStore

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .test('email', 'Ten adres email jest juz zajęty', async function(value) {
        if (value.length > 5) {
            return new Promise((resolve, _reject) => {
                Axios.get('http://localhost:3000/users/' + value).then(
                  response => {
                      console.log('res ', response)
                    resolve(response.data === true);
                  },
                );
              });
        }

    })
    .required(),
  password: yup
    .string()
    .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        "Haslo musi sie składać z przynajmniej 8 znaków, w tym małej i dużej litery, oraz cyfry"
      )
    .required(),
  confirmPassword: yup
    .string()
    .test('password', 'Hasła nie są takie same', function(value) {
        if (value) {       
            const { password } = this.parent;
            return password === value;
        }
      })
})

function submitLogin(values) {
    const { confirmPassword, ...rest} = values
    return Axios.post('http://localhost:3000/users', rest)
    .then((res) => {
        if (res.status === 201) {
            MessageStore.displayMessage('Konto utworzone')
        }
    })
}

export default withFormik({
    handleSubmit: (values, { setSubmitting }) => {
    submitLogin(values)
    setTimeout(() => setSubmitting(false), 3 * 1000)
  },
  validationSchema: LoginValidation,
  mapPropsToValues: () => ({ email: '', password: '', confirmPassword: '' }),
})(RegisterWrapper)