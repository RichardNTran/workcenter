import React, { FunctionComponent } from 'react';

import { Text } from '../styles';
import { FormError } from './FormError';

interface ISelectFieldProps {
  field: any,
  form: {
    submitCount: Number,
    errors: String,
  },
  label: String,
  options: Array<any>,
  placeholder: String,
  isRequire: Boolean,
  isInLine: Boolean,
}

const SelectField: FunctionComponent<ISelectFieldProps> = ({
  field,
  form: {
    submitCount, errors
  },
  label,
  options,
  placeholder,
  isRequire,
  isInLine,
  ...props
}) => {
  function renderLabelAndInput() {
    if (isInLine) {
      return (
        <div className="row">
          {label && (
            <div className="d-flex align-items-center col-sm-4">
              <Text className="col-form-label">{label}</Text>
              {isRequire && <Text className="ml-1" error w6>*</Text>}
            </div>
          )}
          <div className="d-flex align-items-center col-sm-8">
            <select
              className="form-control bg-light"
              {...props}
              {...field}
            >
              <option value="" selected disabled hidden>{placeholder}</option>
              {options.map((item, itemIndex) => (
                <option key={itemIndex} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }
    return (
      <>
        {label && (
          <div className="d-flex">
            <Text>{label}</Text>
            {isRequire && <Text className="ml-1" error w6>*</Text>}
          </div>
        )}
        <select
          className="form-control bg-light"
          {...props}
          {...field}
        >
          <option value="" selected disabled hidden>{placeholder}</option>
          {options.map((item, itemIndex) => (
            <option key={itemIndex} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </>
    );
  }
  return (
    <div className="form-group">
      {renderLabelAndInput()}
      <FormError value={errors[field.name]} submitCount={submitCount} />
    </div>
  );
};

export { SelectField };
