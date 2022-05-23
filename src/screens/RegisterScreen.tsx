import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { UserData } from './Chat/types';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import './register.css';

const RegisterScreen = () => {
  document.title = 'Registro / Chatter';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userId, loading, error } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const {
    success,
    loading: loadingRegister,
    error: errorRegister,
  } = userRegister;

  useEffect(() => {
    if (userId) {
      navigate('/chat');
    }
  });

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
    dispatch(register({ name, lastName, email, password, file }));
    navigate('/login');
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
            px={{ base: 8, md: 24, lg: 38, xl: 32 }}
            w='100%'
            spacing={{ base: 6, lg: 10 }}
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
              <label className='custom-file'>
                <input
                  type='file'
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
                Selecciona Archivo
              </label>
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
              <Text textStyle='h3'>
                Acepto todas las declaraciones de las
                <Text
                  as='a'
                  textStyle='h3'
                  _hover={{ color: 'black' }}
                  fontStyle='italic'
                >
                  {' '}
                  condiciones de usuario
                </Text>
              </Text>
            </HStack>

            <Stack
              justify='start'
              pb={{ base: 4 }}
              spacing={4}
              direction={{ base: 'column', lg: 'row' }}
              align='center'
            >
              <Button
                borderRadius={999}
                bg='#083045'
                _hover={{ bg: '#e8e8e8', color: 'black' }}
                color='white'
                size={{ base: 'md', lg: 'lg' }}
                w='170px'
                h={{ base: 10, lg: 12 }}
                type='submit'
                onClick={submitHandler}
              >
                Registrarse
              </Button>
              <Stack direction={{ base: 'column', sm: 'row' }}>
                <Text textStyle='h3'>
                  ¿Ya tienes una cuenta?{' '}
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
                </Text>
              </Stack>
            </Stack>
          </VStack>
        </form>
      </GridItem>
    </Grid>
  );
};

export default RegisterScreen;
