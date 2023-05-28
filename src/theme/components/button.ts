import { defineStyleConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'tfogreen.500',
      color: 'tfogreen.500',
      _hover: {
        bg: 'tfogreen.500',
        borderColor: 'tfogreen.500',
        color: 'white',
      }
    },
    solid: (props: StyleFunctionProps) => ({
      bg: 'tfogreen.500',
      color: 'white',
      _hover: {

      }
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'tfogreen'
  },
})