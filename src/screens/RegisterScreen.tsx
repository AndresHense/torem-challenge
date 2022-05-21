import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Link as ReactLink } from 'react-router-dom';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState();
  const [accept, setAccept] = useState(false);

  const submitHandler = (e: any) => {
    if (!accept) {
      return;
    }
    e.preventDefault();
    const register = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
        const formData = new FormData();
        formData.append('name', name);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('image', file);
        const response = await axios.post(
          'http://localhost:8080/user/create',
          formData,
          config
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    register();
  };

  return (
    <Grid
      templateColumns={{ base: '1fr', lg: 'repeat(2,1fr)' }}
      gap={0}
      flex='1'
    >
      <Hero />
      <GridItem bg='green.500' display='flex'>
        <form onSubmit={submitHandler}>
          <VStack
            justifyContent='center'
            pt={12}
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
                isRequired
                value={name}
                type='text'
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                isRequired
                value={lastName}
                type='text'
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
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
                isRequired
                value={email}
                type='email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Box w='100%'>
              <Text textStyle='h2'>FOTO DE PERFIL</Text>
              <input
                type='file'
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
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
                isRequired
                value={password}
                type='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
            <HStack>
              <Checkbox mb={1} onChange={(e) => setAccept(e.target.checked)} />
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
                type='submit'
                onClick={submitHandler}
              >
                Registrarse
              </Button>
              <Text textStyle='h3'>¿Ya tienes una cuenta?</Text>
              <Link
                as={ReactLink}
                to='/login'
                color='white'
                fontSize='lg'
                _hover={{ color: 'black' }}
                fontStyle='italic'
              >
                Inicia sesion aqui
              </Link>
            </HStack>
          </VStack>
        </form>
      </GridItem>
    </Grid>
  );
};

export default RegisterScreen;
