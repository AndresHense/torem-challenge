import { HStack, Icon, Text, Image, Link } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link as ReactLink,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userId, loading, error } = userLogin;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const submitLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <HStack as='nav' justify='space-between' w='100%' bg='#083045' py={4}>
      <Image
        src='CHATTER_TR.png'
        w='190px'
        filter='invert(100%) saturate(0)'
        pt={3}
      />
      <HStack pr={12} spacing={4} pt={3}>
        {!userId ? (
          <>
            <Text textStyle='h4'>Información de la empresa</Text>
            <Link
              as={ReactLink}
              to='/register'
              color={pathname === '/register' ? 'green.500' : 'white'}
              _focus={{ border: 'none' }}
            >
              Registrarse
            </Link>
            <Link
              as={ReactLink}
              to='/login'
              color={pathname === '/login' ? 'green.500' : 'white'}
              _focus={{ border: 'none' }}
            >
              Iniciar sesión
            </Link>
          </>
        ) : (
          <>
            <Link
              _hover={{ color: 'green.500' }}
              onClick={submitLogout}
              color='white'
            >
              Abandonar sesión
            </Link>
          </>
        )}
      </HStack>
    </HStack>
  );
};

export default Header;
