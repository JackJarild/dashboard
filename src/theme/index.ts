// import {
//   extendTheme, type ThemeConfig
// } from '@chakra-ui/react'
// import * as foundations from '@/theme/foundations'

// const config: ThemeConfig = {
//   initialColorMode: 'system',
//   useSystemColorMode: true,
//   //cssVarPrefix: 'chakra'
// }

// export default extendTheme({
//   config,
//   ...foundations
// })



import {
  ChakraProvider,
  Container,
  extendTheme,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Stack,
  Box,
  isChakraTheme,
  theme,
  ThemeConfig
} from "@chakra-ui/react";
import * as foundations from '@/theme/foundations'

const baseTheme = {
  ...theme,
  components: {
    ...theme.components,
    Button: {
      ...theme.components.Button,
      baseStyle: {
        ...theme.components.Button.baseStyle,
        borderRadius: "md"
      },
      variants: {
        ...theme.components.Button.variants,
        // solid: {
        //   border: "3px dashed"
        // }
      },
      defaultProps: {
        ...theme.components.Button.defaultProps,
        variant: "solid",
        colorScheme: "teal",
        size: "md"
      }
    }
  }
};

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  cssVarPrefix: 'chakra'
}

const baseThemeOverrides = {
  ...foundations,
  config
};


export default extendTheme(
  baseThemeOverrides, baseTheme
)