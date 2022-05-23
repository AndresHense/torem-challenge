import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import ChakraLogo from './ChakraLogo';

const Footer = () => {
  return (
    <Box
      as='footer'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDir='row'
      w='100%'
      bg='#083045'
      py={4}
    >
      <Text pr={3} textStyle='h4'>
        Todos los derechos reservados &reg;
      </Text>
      <ChakraLogo pb={1} w={9} h={9} />
    </Box>
  );
};

export default Footer;
