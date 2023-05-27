import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
    label?: string;
    className?: string;
    children: React.ReactNode;
    error?: FieldError | undefined;
    description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
    const { label, className, error, children } = props;
    return (
        <FormControl mt={6} className={className} isInvalid={error !== undefined}>
            {label && <FormLabel>{label}</FormLabel>}
            {children}
            {error?.message && (
                <FormErrorMessage>{error.message}</FormErrorMessage>
            )}
        </FormControl>
    );
};