import React, { FunctionComponent } from 'react';

import { Text } from '../styles';
import { FormError } from './FormError';

interface IInputFieldProps {
  field: any,
  form: {
    submitCount: Number,
    errors: String,
  },
  name: any,
  label: String,
  isRequire: Boolean,
  isInLine: Boolean,
}

const InputField:FunctionComponent<IInputFieldProps> = ({
  field,
  form: {
    submitCount, errors
  },
  label,
  isRequire,
  isInLine,
  children,
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
            <input
              className="form-control bg-light"
              {...props}
              {...field}
            />
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
        <input
          className="form-control bg-light"
          type="text"
          {...props}
          {...field}
        />
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

export { InputField };
