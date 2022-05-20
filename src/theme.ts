import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    h2: {
      fontFamily: 'helvetica',
      color: 'white',
      fontSize: '3xl',
      fontWeight: 'bold',
      letterSpacing: '3px',
    },
    h3: {
      fontFamily: 'helvetica',
      color: 'white',
      fontSize: 'lg',
    },
    h4: {
      fontFamily: 'helvetica',
      color: 'white',
      fontSize: 'md',
    },
  },
});

export default theme;
