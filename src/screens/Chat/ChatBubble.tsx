import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

type Props = {
  message: string;
  dateSent: string;
  from: string;
};

const ChatBubble = ({ message, dateSent, from }: Props) => {
  const isMe = from === 'me';
  const alignment = isMe ? 'flex-end' : 'flex-start';
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = !isMe ? 0 : 32;
  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      <Box
        bg={isMe ? 'green.200' : 'white'}
        px={6}
        py={4}
        maxW={96}
        borderTopRadius={32}
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
      >
        <Text fontSize='lg'>{message}</Text>
        <Box w='full' display='flex' justifyContent='flex-end'>
          <Text fontSize='xs' color='gray.500' mb={-3}>
            {dateSent}
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default ChatBubble;
