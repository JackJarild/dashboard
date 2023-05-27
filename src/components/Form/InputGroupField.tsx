import { FieldWrapper } from './FieldWrapper';
import { InputGroup } from '@chakra-ui/react';
import { InputField, InputFieldPassThroughProps } from './InputField';

type InputGroupFieldProps = InputFieldPassThroughProps & {
    className?: string
    inputLeftAddon?: JSX.Element
    inputRightAddon?: JSX.Element
};

export const InputGroupField = (props: InputGroupFieldProps) => {
    const {
        type = 'text',
        label,
        className,
        registration,
        placeHolder,
        size = 'md',
        variant = 'outline',
        inputLeftAddon,
        inputRightAddon,
        error
    } = props;
    return (
        <FieldWrapper label={label} error={error}>
            <InputGroup>
                {inputLeftAddon && inputLeftAddon}
                <InputField
                    type={type}
                    className={className}
                    placeHolder={placeHolder}
                    size={size}
                    variant={variant}
                    registration={registration}
                    withoutWrapper={true}
                />
                {inputRightAddon && inputRightAddon}
            </InputGroup>
        </FieldWrapper>
    );
};