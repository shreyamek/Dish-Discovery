// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Define your color mode config
const colorModeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme with color mode config
const theme = extendTheme({ config: { colorMode: colorModeConfig } });

export default theme;
