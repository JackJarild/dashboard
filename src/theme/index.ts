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
  extendTheme,
  theme,
  ThemeConfig,
  withDefaultColorScheme
} from "@chakra-ui/react";
import { foundations } from '@/theme/foundations'
import { Button } from '@/theme/components'


const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  cssVarPrefix: 'chakra'
}

const baseThemeOverrides = {
  config,
  ...foundations,
  semanticTokens: {
    colors: {
      primary: 'tfogreen',
      accent: 'tfopink.500',
      success: 'green.400',
      error: 'red.500',
      warning: 'orange.300',
      information: 'blue.500'
    }
  },
  components: {
    Button
  }
};

export default extendTheme(baseThemeOverrides)
// export default extendTheme(
//   baseThemeOverrides,
//   withDefaultColorScheme({
//     colorScheme: 'tfogreen',
//     components: ['Button']
//   })
// )
