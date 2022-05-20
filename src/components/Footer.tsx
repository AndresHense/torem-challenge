import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
      as='footer'
      display='flex'
      alignItems='center'
      justifyContent='center'
      w='100%'
      bg='#083045'
      py={4}
    >
      <Text textStyle='h4'>Todos los derechos reservados</Text>
    </Box>
  );
};

export default Footer;
