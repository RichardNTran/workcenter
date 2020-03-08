import React, { FunctionComponent } from 'react';
import { Form, Input } from 'antd';

interface ITextAriaFieldProps {
  field: any,
  form: {
    submitCount: Number,
    errors: String,
  },
  type: String,
  label: String,
  isRequire: Boolean,
  style: Object,
}

const TextAriaField: FunctionComponent<ITextAriaFieldProps> = ({
  field,
  form: {
    submitCount, errors
  },
  label,
  isRequire,
  children,
  style,
  ...props
}) => {
  const showError = !!errors[field.name] && submitCount !== 0;
  const validateStatus = showError ? 'error' : 'validating';
  return (
    <Form.Item
      label={label}
      name={field.name}
      hasFeedback={showError}
      validateStatus={validateStatus}
      help={showError && errors[field.name]}
      style={style}
    >
      <Input.TextArea {...props} {...field} />
    </Form.Item>
  );
};

export { TextAriaField };
