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
  withoutWrapper?: boolean
};

export type InputFieldPassThroughProps = Omit<InputFieldProps, 'className'>;

export const InputField = (props: InputFieldProps) => {
  const {
    type = 'text',
    label,
    className,
    registration,
    placeHolder,
    size = 'md',
    variant = 'outline',
    withoutWrapper = false,
    error
  } = props;
  return (
    <>
      {
        withoutWrapper ?
          <Input
            type={type}
            className={className}
            placeholder={placeHolder}
            size={size}
            variant={variant}
            {...registration}
          />
          :
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
      }
    </>
  );
};