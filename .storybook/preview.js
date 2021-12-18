import React from 'react';
import theme from '../src/theme';
import { ChakraProvider } from '@chakra-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: theme,
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
