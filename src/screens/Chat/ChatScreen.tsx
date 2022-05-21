import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import ChatSidebar from './ChatSidebar';
import Chat from './Chat';

const ChatScreen = () => {
  return (
    <HStack h='86vh' spacing={0}>
      <ChatSidebar />
      <Flex as='main' flex={1} h='full' direction='column'>
        <Chat />
      </Flex>
    </HStack>
  );
};

export default ChatScreen;
