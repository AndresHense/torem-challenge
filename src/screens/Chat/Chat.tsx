import {
  Avatar,
  Badge,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FiPaperclip, FiSend } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { getChatDetails, sendMsg } from '../../actions/chatActions';
import { getUserDetails } from '../../actions/userActions';
import { sanitizeImage } from './aux';
import ChatBubble from './ChatBubble';
import ChatSidebarDrawer from './ChatSidebarDrawer';
import { ChatType, UserData } from './types';
import { AiOutlineLeft } from 'react-icons/ai';

type Props = {
  chat: ChatType;
};

const Chat = ({ userId }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { onOpen, isOpen, onClose } = useDisclosure();

  const chatSelect = useSelector((state) => state.chatSelect);
  const { chatId: selectedChatId, loading, error } = chatSelect;

  const chatDetails = useSelector((state) => state.chatDetails);
  const { chat, loading: chatLoading } = chatDetails;
  const sendMessage = () => {
    dispatch(sendMsg(message, chat?.chatId));
    setMessage('');
  };

  useEffect(() => {
    if (selectedChatId) {
      dispatch(getChatDetails(selectedChatId));
    }
  }, [dispatch, selectedChatId]);

  return (
    <Flex direction='column' h='full'>
      <HStack
        w='full'
        bg='#e8e8e8'
        justify='space-between'
        px={{ base: 3, lg: 8 }}
      >
        <HStack py={{ base: 2, lg: 4 }} spacing={{ base: 2, lg: 5 }}>
          <IconButton
            icon={<AiOutlineLeft />}
            display={{ base: 'inherit', lg: 'none' }}
            aria-label='to-sidebar'
            variant='outline'
            onClick={onOpen}
          />
          <Avatar
            w={{ base: 12, lg: 16 }}
            h={{ base: 12, lg: 16 }}
            src={
              !chatLoading && chat?.image
                ? `http://localhost:8080/${sanitizeImage(chat?.image)}`
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
      <ChatSidebarDrawer userId={userId} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Chat;
