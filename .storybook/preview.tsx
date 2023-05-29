// import type { Preview } from "@storybook/react";
// import theme from '../src/theme'

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//     chakra: {
//       theme
//     }
//   },
// };

// export default preview;

import React from 'react';
import { AppProvider } from '../src/providers/AppProvider';
import '../src/index.css';
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*', chakra: { theme } },
};

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
];