import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import ChatBox from './ChatBox';
import { GoSearch } from 'react-icons/go';
import axios from 'axios';
import { ChatType } from './types';
import { FocusableElement } from '@chakra-ui/utils';
import { useDispatch } from 'react-redux';
import { deleteUserById } from '../../actions/userActions';

type Props = {
  userImage: string;
  chats: ChatType[];
  userId: string;
};

const ChatSidebar = ({ userImage, chats, userId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | FocusableElement>();
  const dispatch = useDispatch();
  const deleteUser = () => {
    onClose();
    dispatch(deleteUserById(userId));
  };

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
        <Tooltip label='Borrar cuenta'>
          <IconButton
            icon={
              <Avatar size='lg' src={`http://localhost:8080/${userImage}`} />
            }
            variant='unstyled'
            _focus={{ border: 'none' }}
            aria-label='delete account'
            h='full'
            onClick={onOpen}
          />
        </Tooltip>
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
          {chats.map(({ name, image, messages, chatId }, index) => (
            <ListItem key={index}>
              <ChatBox
                name={name}
                image={image}
                chatId={chatId}
                lastMessage={
                  messages.length > 0
                    ? messages[messages.length - 1]?.message
                    : ''
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={deleteUser} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default ChatSidebar;
