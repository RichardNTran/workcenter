import { MAX_LENGHT_50, MIN_LENGHT_NAME } from '../../constants/common';

export const required = value => (value ? undefined : 'Required');
export const maxLenght = value => (
  value && value.length > MAX_LENGHT_50 ? `Must be ${MAX_LENGHT_50} characters or less` : undefined
);
export const minLength = value => (
  value && value.length < MIN_LENGHT_NAME ? `Must be ${MIN_LENGHT_NAME} characters or more` : undefined
);
