import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ChatBox from './ChatBox';
import { FiPaperclip, FiSend } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';
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
