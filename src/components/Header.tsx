import {
  HStack,
  Icon,
  Text,
  Image,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link as ReactLink,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { logout } from '../actions/userActions';
import { GiHamburgerMenu } from 'react-icons/gi';

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
    <HStack
      as='nav'
      justify='space-between'
      w='100%'
      bg='#083045'
      py={4}
      pt={{ base: 2, xl: 4 }}
    >
      <Image
        src='CHATTER_TR.png'
        w={{ base: '120px', md: '140px', lg: '190px' }}
        filter='invert(100%) saturate(0)'
        pt={3}
      />
      <HStack pr={{ base: 8, xl: 12 }} spacing={4} pt={3}>
        {!userId ? (
          <>
            <HStack display={{ base: 'none', xl: 'inherit' }}>
              <Text textStyle='h4'>Información de la empresa</Text>
              <Link
                as={ReactLink}
                to='/register'
                color={pathname === '/register' ? 'green.500' : 'white'}
                fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
                _focus={{ border: 'none' }}
              >
                Registrarse
              </Link>
              <Link
                as={ReactLink}
                to='/login'
                color={pathname === '/login' ? 'green.500' : 'white'}
                _focus={{ border: 'none' }}
                fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
              >
                Iniciar sesión
              </Link>
            </HStack>
            <Menu placement='bottom'>
              <MenuButton
                display={{ base: 'inherit', xl: 'none' }}
                as={IconButton}
                aria-label='hamburger'
                fontSize='2xl'
                icon={<GiHamburgerMenu color='white' />}
                variant=''
              />
              <MenuList bg='#083045' border='none'>
                <MenuItem _focus={{ bg: 'gray.700' }}>
                  <Text textStyle='h4'>Información de la empresa</Text>
                </MenuItem>
                <MenuItem _focus={{ bg: 'gray.700' }}>
                  <Link
                    as={ReactLink}
                    to='/register'
                    color={pathname === '/register' ? 'green.500' : 'white'}
                    fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
                    _focus={{ border: 'none' }}
                  >
                    Registrarse
                  </Link>
                </MenuItem>
                <MenuItem _focus={{ bg: 'gray.700' }}>
                  <Link
                    as={ReactLink}
                    to='/login'
                    color={pathname === '/login' ? 'green.500' : 'white'}
                    _focus={{ border: 'none' }}
                    fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
                  >
                    Iniciar sesión
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Link
              _hover={{ color: 'green.500' }}
              onClick={submitLogout}
              color='white'
              fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}
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
