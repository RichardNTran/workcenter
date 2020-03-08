import React, { FunctionComponent } from 'react';
import { Form, Checkbox } from 'antd';

interface ICheckboxFieldProps {
  field: any,
  form: {
    setFieldValue: Function;
    submitCount: Number,
    errors: String,
  },
  type: String,
  label: String,
  value: String,
  isRequire: Boolean,
  style: Object,
}

const CheckboxField: FunctionComponent<ICheckboxFieldProps> = ({
  field,
  form: {
    setFieldValue,
    submitCount,
    errors,
  },
  label,
  value,
  isRequire,
  children,
  style,
  ...props
}) => {
  const showError = !!errors[field.name] && submitCount !== 0;
  const validateStatus = showError ? 'error' : 'validating';
  return (
    <Form.Item
      name={field.name}
      validateStatus={validateStatus}
      help={showError && errors[field.name]}
      valuePropName="checked"
      style={style}
    >
      <Checkbox
        {...props}
        {...field}
        value={value}
        onChange={(e) => setFieldValue(field.name, e.target.checked)}
      >
        {label}
      </Checkbox>
    </Form.Item>
  );
};

export { CheckboxField };
