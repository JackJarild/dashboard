import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Input } from '@chakra-ui/react';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <Input
        type={type}
        className={className}
        {...registration}
      />
    </FieldWrapper>
  );
};