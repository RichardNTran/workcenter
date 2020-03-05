  
import * as Yup from 'yup';

import { PASSWORD_REGEX } from './constants';

export default Yup.object().shape({
  job: Yup.string()
    .required('Job is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email incorrect format'),
  password: Yup.string()
    .required('Password is required')
    .test('passLength', 'Password incorrect format',
      (value) => (value || '').length >= 6 && (value || '').length <= 16 && (value || '').length)
    .matches(PASSWORD_REGEX, 'Password incorrect format'),
  confirmPassword: Yup.string()
    .required('Comfirm password is required')
    .test('equalTo', 'Must match password', function equalTo(this: any, value) {
      return value === this.options.parent.password;
    }),
  name: Yup.string()
    .required('Name is required')
    .max(50, 'Name incorrect format'),
});
