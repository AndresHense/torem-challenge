import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import ChatBox from './ChatBox';

const ChatScreen = () => {
  return (
    <Flex>
      <VStack bg='#e8e8e8'>
        <Box bg='#36dd81'>
          <Avatar />
        </Box>
        <Input />
        <VStack>
          <ChatBox />
          <ChatBox />
          <ChatBox />
        </VStack>
      </VStack>
      <Flex>
        <HStack>
          <HStack>
            <Avatar />
            <Text>Mariaina Lopez</Text>
          </HStack>
          <IconButton aria-label='clip' />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default ChatScreen;
