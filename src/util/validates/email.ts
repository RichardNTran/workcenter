import i18next from '../i18n';
import { regexEmail } from '../../constants/regexValidate';

export const validateEmail = (values, errors) => {
  const email = (values || '').trim();
  if (!regexEmail.test(email)){
    return i18next.t('login.validate.email.format');
  }
};
