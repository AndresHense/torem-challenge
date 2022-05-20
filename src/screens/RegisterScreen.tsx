import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Hero from '../components/Hero';

const RegisterScreen = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }}
      gap={0}
      flex='1'
    >
      <Hero />
      <GridItem bg='green.500' display='flex'>
        <VStack
          justifyContent='center'
          alignItems='start'
          px={32}
          w='100%'
          spacing={10}
        >
          <Box w='100%'>
            <Text textStyle='h2'>NOMBRE</Text>
            <Input
              placeholder='Ingresa tu nombre'
              color='white'
              _placeholder={{ color: 'white' }}
              variant='flushed'
              fontSize='lg'
            />
          </Box>
          <Box w='100%'>
            <Text textStyle='h2'>APELLIDO</Text>
            <Input
              placeholder='Ingresa tu apellido'
              color='white'
              _placeholder={{ color: 'white' }}
              variant='flushed'
              fontSize='lg'
            />
          </Box>

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
            <Text textStyle='h2'>FOTO DE PERFIL</Text>
            <input type='file' />
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
          <HStack>
            <Checkbox />
            <Text textStyle='h3'>Acepto todas las declaraciones de las</Text>
            <Text
              as='button'
              textStyle='h3'
              _hover={{ color: 'black' }}
              fontStyle='italic'
            >
              condiciones de usuario
            </Text>
          </HStack>

          <HStack justify='start'>
            <Button
              borderRadius={999}
              bg='#083045'
              _hover={{ bg: '#e8e8e8', color: 'black' }}
              color='white'
              size='lg'
              w='170px'
            >
              Registrarse
            </Button>
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

export default RegisterScreen;
