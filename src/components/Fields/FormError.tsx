import React, { FunctionComponent }  from 'react';

import { Text } from '../styles';

interface IFormErrorProps {
  value: String,
  submitCount: Number,
}

export const FormError:FunctionComponent<IFormErrorProps> = ({
  value,
  submitCount,
}) => (
  <Text error sm>{!!submitCount && value}</Text>
);
