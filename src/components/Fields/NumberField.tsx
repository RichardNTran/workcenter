import React, { FunctionComponent } from 'react';
import { Form, InputNumber } from 'antd';

interface INumberFieldProps {
  field: any,
  form: {
    setFieldValue: Function,
    submitCount: Number,
    errors: String,
  },
  type: String,
  label: String,
  isRequire: Boolean,
  width: String,
  style: Object,
}

const NumberField: FunctionComponent<INumberFieldProps> = ({
  field,
  form: {
    setFieldValue,
    submitCount,
    errors,
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
      <InputNumber
        {...props}
        {...field}
        min={0}
        onChange={(value) => setFieldValue(field.name, value)}
        style={props.width ? { width: props.width } : { width: '100%' }}
      />
    </Form.Item>
  );
};

export { NumberField };
