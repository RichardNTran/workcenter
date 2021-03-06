import React, { FunctionComponent } from 'react';
import { Form, Input, Typography  } from 'antd';

interface IInputFieldProps {
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

const InputField: FunctionComponent<IInputFieldProps> = ({
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
  function renderRequireLabel() {
    return (
      <>
        <Typography.Text type="danger">*</Typography.Text>&nbsp;
        {label}
      </>
    )
  }
  return (
    <Form.Item
      label={isRequire && label ? renderRequireLabel() : label}
      name={field.name}
      hasFeedback={showError}
      validateStatus={validateStatus}
      help={showError && errors[field.name]}
      style={style}
    >
      {props.type === 'password'
        ? <Input.Password size="large" {...props} {...field} />
        : <Input {...props} {...field} />
      }
    </Form.Item>
  );
};

export { InputField };
