import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  fonts: {
    body: 'Lato'
  },
  styles: {
    global: (props) => ({
      'body, h2, p': {
        color: mode('black', 'white')(props)
      }
    })
  }
});

export default theme;