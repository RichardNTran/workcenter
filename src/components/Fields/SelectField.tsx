import React, { FunctionComponent } from 'react';

import { Form, Select, Typography } from 'antd';

interface ISelectFieldProps {
  field: any,
  form: {
    setFieldValue: Function;
    submitCount: Number,
    errors: String,
  },
  label: String,
  options: Array<any>,
  isRequire: Boolean,
  width: String,
  style: Object,
}

const SelectField: FunctionComponent<ISelectFieldProps> = ({
  field,
  form: {
    setFieldValue,
    submitCount,
    errors,
  },
  label,
  options,
  isRequire,
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
      <Select
        {...props}
        {...field}
        onChange={(value) => setFieldValue(field.name, value)}
        style={props.width ? { width: props.width } : { width: '100%' }}
      >
        {options.map((item, itemIndex) => (
          <Select.Option key={itemIndex} value={item.id}>
            {item.title}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export { SelectField };
