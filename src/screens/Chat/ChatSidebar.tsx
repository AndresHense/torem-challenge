import {
  Avatar,
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import ChatBox from './ChatBox';
import { GoSearch } from 'react-icons/go';
const ChatSidebar = () => {
  return (
    <Flex
      as='aside'
      bg='#e8e8e8'
      h='full'
      maxW='lg'
      w='full'
      direction='column'
    >
      <Box bg='green.500' py={4} px={8}>
        <Avatar size='lg' />
      </Box>
      <Box w='full' px={6}>
        <InputGroup my={4}>
          <InputLeftElement children={<Icon as={GoSearch} />} />
          <Input
            bg='#e8e8e8'
            placeholder='Buscar en los chats'
            variant='filled'
            rounded='full'
            boxShadow='2px 2px 5px gray'
          />
        </InputGroup>
      </Box>
      <Box alignItems='flex-start' py={4} w='full' overflowY='auto'>
        <List w='full' spacing={6}>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
          <ListItem>
            <ChatBox />
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default ChatSidebar;
