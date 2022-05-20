import { Avatar, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ChatBox = () => {
  return (
    <HStack>
      <Avatar />
      <VStack>
        <Text>Maria Lopez</Text>
        <HStack>
          <Icon />
          <Text>Si, me gusta la albomndiga</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ChatBox;
