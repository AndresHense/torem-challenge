import {
  Avatar,
  Badge,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { FiPaperclip, FiSend } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { sendMsg } from '../../actions/chatActions';
import { sanitizeImage } from './aux';
import ChatBubble from './ChatBubble';
import { ChatType, UserData } from './types';

type Props = {
  chat: ChatType;
};

const Chat = ({ chat }: Props) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const sendMessage = () => {
    dispatch(sendMsg(message, chat?.chatId));
    setMessage('');
  };

  return (
    <Flex direction='column' h='full'>
      <HStack w='full' bg='#e8e8e8' justify='space-between' px={8}>
        <HStack py={4} spacing={5}>
          <Avatar
            size='lg'
            src={
              chat.image
                ? `http://localhost:8080/${sanitizeImage(chat.image)}`
                : ''
            }
          />

          <Text
            color='#083045'
            fontSize='xl'
            fontWeight='bold'
            fontStyle='italic'
          >
            {chat?.name}
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
            {chat && chat?.messages?.length != 0
              ? chat?.messages[chat?.messages.length - 1].timeDate.slice(0, 10)
              : ''}
          </Text>
        </Badge>
        {chat?.messages.map(({ message, timeDate }, index) => (
          <ChatBubble
            message={message}
            from={index % 2 == 0 ? 'me' : 'others'}
            dateSent={timeDate.slice(0, 10)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          isDisabled={chat?.chatId === undefined}
        />
        <IconButton
          icon={<FiSend />}
          aria-label='send'
          variant='unstyled'
          fontSize='3xl'
          onClick={sendMessage}
          isDisabled={chat?.chatId === undefined}
        />
      </HStack>
    </Flex>
  );
};

export default Chat;
