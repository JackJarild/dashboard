import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { Input } from '@chakra-ui/react';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password'
  className?: string
  registration: Partial<UseFormRegisterReturn>
  placeHolder?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled' 
};

export type InputFieldPassThroughProps = Omit<InputFieldProps, 'className' | 'children'>;

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, placeHolder, size = 'md', variant = 'outline', error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <Input
        type={type}
        className={className}
        placeholder={placeHolder}
        size={size}
        variant={variant}
        {...registration}
      />
    </FieldWrapper>
  );
};