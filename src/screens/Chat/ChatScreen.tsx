import { Flex, HStack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ChatSidebar from './ChatSidebar';
import Chat from './Chat';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ChatSidebarDrawer from './ChatSidebarDrawer';

const ChatScreen = () => {
  document.title = 'Inicio / Chatter';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userId, loading } = userLogin;

  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
  }, [dispatch, userId]);

  return (
    <HStack h='86vh' spacing={0}>
      <Flex
        as='aside'
        bg='#e8e8e8'
        h='full'
        maxW={{ base: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}
        w='full'
        direction='column'
        display={{ base: 'none', lg: 'flex' }}
      >
        {!loading && <ChatSidebar userId={userId} />}
      </Flex>
      <Flex as='main' flex={1} h='full' direction='column'>
        {!loading && <Chat userId={userId} />}
      </Flex>
    </HStack>
  );
};

export default ChatScreen;
