import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const LoginScreen = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }}
      gap={0}
      flex='1'
    >
      <GridItem
        display='flex'
        alignItems='center'
        justifyContent='center'
        bgImage='BACKGROUND.jpg'
        bgPosition='center'
        bgSize='200%'
        filter='opacity(0.9) grayscale(80%) '
        h={{ base: '100vh', lg: 'inherit' }}
      >
        <Image src='CHATTER_WHITE_TR.png' w='60%' />
      </GridItem>
      <GridItem bg='green.500' display='flex'>
        <VStack alignItems='start' px={32} w='100%' spacing={10} pt={48}>
          <Box w='100%'>
            <Text textStyle='h2'>E-MAIL</Text>
            <Input
              placeholder='Ingresa tu correo electronico'
              color='white'
              _placeholder={{ color: 'white' }}
              variant='flushed'
              fontSize='lg'
            />
          </Box>
          <Box w='100%'>
            <Text textStyle='h2'>CONTRASEÑA</Text>
            <Input
              placeholder='Ingresa tu contraseña'
              variant='flushed'
              _placeholder={{ color: 'white' }}
              color='white'
              fontSize='lg'
            />
          </Box>
          <Button
            borderRadius={999}
            bg='#083045'
            _hover={{ bg: '#e8e8e8', color: 'black' }}
            color='white'
            size='lg'
            marginX='2rem'
            w='170px'
          >
            Ingresar
          </Button>
          <HStack>
            <Text textStyle='h3'>¿Ya tienes una cuenta?</Text>
            <Text
              as='button'
              textStyle='h3'
              _hover={{ color: 'black' }}
              fontStyle='italic'
            >
              inicia sesion aquí
            </Text>
          </HStack>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default LoginScreen;
