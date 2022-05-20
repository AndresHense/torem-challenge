import { HStack, Icon, Text, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { RiWechatLine } from 'react-icons/ri';
import { Link as ReactLink } from 'react-router-dom';

const Header = () => {
  return (
    <HStack justify='space-between' w='100%' bg='#083045' py={4}>
      <Image
        src='CHATTER_TR.png'
        w='190px'
        filter='invert(100%) saturate(0)'
        pt={3}
      />
      <HStack pr={12} spacing={4} pt={3}>
        <Text textStyle='h4'>Información de la empresa</Text>
        <Link as={ReactLink} to='/register' color='white'>
          Registrarse
        </Link>
        <Link as={ReactLink} to='/login' color='white'>
          Iniciar sesión
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
