import i18next from '../i18n';
import { PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from '../../constants/common';
import { regexPassword } from '../../constants/regexValidate';

export const validatePassword = (values, errors) => {
  const password = values;
  if (password.length < PASSWORD_MIN_LENGTH) {
    return i18next.t('login.validate.password.minLength');
  }

  if (password.length > PASSWORD_MAX_LENGTH) {
    return i18next.t('login.validate.password.maxLength');
  }

  if (!regexPassword.test(password)) {
    return i18next.t('login.validate.password.format');
  }
};
