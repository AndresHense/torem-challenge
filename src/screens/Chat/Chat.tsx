import {
  Avatar,
  Badge,
  Box,
  Flex,
  HStack,
  IconButton,
  Input,
  Tag,
  TagLabel,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FiPaperclip, FiSend } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';
import ChatBubble from './ChatBubble';

const messages = [
  {
    message: 'Hey Travis! Would you like to go out for a coffee?',
    from: 'others',
    dateSent: '20:21',
  },
  {
    message: 'Sure! At 11:00 am?',
    from: 'me',
    dateSent: '20:22',
  },
  {
    message: "That's too early! How about at noon?",
    from: 'others',
    dateSent: '20:22',
  },
  {
    message: 'That sounds good as well. Where should we meet?',
    from: 'me',
    dateSent: '20:23',
  },
  {
    message: 'Meet me at the hardware store on 21 Duck Street.',
    from: 'others',
    dateSent: '20:23',
  },
  {
    message: "Sounds good. I'll bring my friend with me as well!",
    from: 'me',
    dateSent: '20:24',
  },
  {
    message: 'Which one? The developer or the designer?',
    from: 'others',
    dateSent: '20:24',
  },
  {
    message: 'The developer. You remember Tony, right?',
    from: 'me',
    dateSent: '20:24',
  },
  {
    message: "Yeah! Tony's a great guy!",
    from: 'others',
    dateSent: '20:25',
  },
  {
    message: 'Indeed he is! Alright, see you later 👋!',
    from: 'me',
    dateSent: '20:25',
  },
];

const Chat = () => {
  return (
    <Flex direction='column' h='full'>
      <HStack w='full' bg='#e8e8e8' justify='space-between' px={8}>
        <HStack py={4} spacing={5}>
          <Avatar size='lg' />
          <Text
            color='#083045'
            fontSize='xl'
            fontWeight='bold'
            fontStyle='italic'
          >
            Mariaina Lopez
          </Text>
        </HStack>
        <IconButton
          icon={<FiPaperclip />}
          aria-label='clip'
          variant='unstyled'
          fontSize='2xl'
        />
      </HStack>
      <VStack flex={1} overflowY='auto' py={4} px={4} bg='#648189'>
        <Badge bg='green.500' rounded='full' w='120px'>
          <Text
            textAlign='center'
            fontWeight='normal'
            color='white'
            fontSize='md'
          >
            02/12/22
          </Text>
        </Badge>
        {messages.map(({ message, from, dateSent }, index) => (
          <ChatBubble
            message={message}
            from={from}
            dateSent={dateSent}
            key={index}
          />
        ))}
      </VStack>
      <HStack bg='green.500' p={4} justify='center' spacing={4}>
        <IconButton
          icon={<VscSmiley />}
          aria-label='emojis'
          variant='unstyled'
          fontSize='3xl'
        />
        <Input
          w='80%'
          bg='#e8e8e8'
          placeholder='Escribe tu mensaje'
          boxShadow='5px 5px 10px gray'
        />
        <IconButton
          icon={<FiSend />}
          aria-label='send'
          variant='unstyled'
          fontSize='3xl'
        />
      </HStack>
    </Flex>
  );
};

export default Chat;
