import {
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiWechatLine } from 'react-icons/ri';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ChatScreen from './screens/Chat/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <Flex direction='column' h='100vh'>
      <Flex maxH='sm'>
        <Header />
      </Flex>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/chat' element={<ChatScreen />} />
      </Routes>
      <Flex maxH='sm'>
        <Footer />
      </Flex>
    </Flex>
  );
}

export default App;
