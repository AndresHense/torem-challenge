import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { login } from '../actions/userActions';
import Hero from '../components/Hero';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userId, loading, error } = userLogin;

  useEffect(() => {
    if (userId) {
      navigate('/chat');
    }
  }, [userId]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(login(email, password));
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
          <VStack alignItems='start' px={32} w='100%' spacing={10} pt={48}>
            <Box w='100%'>
              <Text textStyle='h2'>E-MAIL</Text>
              <Input
                placeholder='Ingresa tu correo electronico'
                color='white'
                _placeholder={{ color: 'white' }}
                variant='flushed'
                fontSize='lg'
                value={email}
                type='email'
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Button
              borderRadius={999}
              type='submit'
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
              <Text textStyle='h3'>¿No tienes una cuenta?</Text>
              <Link
                as={ReactLink}
                to='/register'
                color='white'
                fontSize='lg'
                _hover={{ color: 'black' }}
                fontStyle='italic'
              >
                Crea una nueva cuenta aqui
              </Link>
            </HStack>
          </VStack>
        </form>
      </GridItem>
    </Grid>
  );
};

export default LoginScreen;
