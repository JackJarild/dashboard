import { ReactElement, ReactNode } from "react"
import { Button as ChakraButton } from '@chakra-ui/react'

const variants = {
    primary: {
        bg: 'tfogreen.500',
        color: 'white',
    },
    secondary: 'secondary',
    outline: 'outline',
    ghost: 'ghost'
}

const sizes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg'
}

const types = {
    button: 'button',
    submit: 'submit',
    reset: 'reset'
}

// const spinnerPlacement = {
//     start: 'start',
//     end: 'end'
// }

type IconProps = 
| { leftIcon: ReactElement; rightIcon?: never }
| { rightIcon: ReactElement; leftIcon?: never }
| { rightIcon?: undefined; leftIcon?: undefined }

export type ButtonProps = {
    variant?: keyof typeof variants
    size?: keyof typeof sizes
    type?: keyof typeof types,
    isLoading?: boolean
    loadingText?: string
    onClick?: () => void
    children: ReactNode
    //spinnerPlacement?: keyof typeof spinnerPlacement
} & IconProps

export const Button = ({ 
    variant = 'primary',
    size = 'md',
    type = 'button',
    isLoading = false,
    loadingText,
    leftIcon,
    rightIcon,
    ...props
 }: ButtonProps) => {
    return(
        <ChakraButton
            variant={variant}
            size={size}
            type={type}
            isLoading={isLoading}
            loadingText={loadingText}
            leftIcon={leftIcon && leftIcon}
            rightIcon={rightIcon && rightIcon}
            //onClick={props.onClick}
            spinnerPlacement={'end'}
            {...props}
        >
            {props.children}
        </ChakraButton>
    )
} 