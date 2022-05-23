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
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserById, getUserDetails } from '../../actions/userActions';
import { sanitizeImage } from './aux';

type Props = {
  userId: string;
};

const ChatSidebar = ({ userId }: Props) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  const { image: userImage, chats } = user;
  const userDelete = useSelector((state) => state.userDelete);
  const { loading: loadingDelete, success } = userDelete;

  useEffect(() => {
    if (userId) {
      dispatch(getUserDetails(userId));
    }
  }, [success]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | FocusableElement>();

  const deleteUser = () => {
    onClose();
    dispatch(deleteUserById(userId));
  };

  return (
    <>
      <Box
        bg='green.500'
        py={{ base: 2, lg: 4 }}
        mt={{ base: 0, lg: 'inherit' }}
        px={8}
      >
        <Tooltip label='Borrar cuenta'>
          <IconButton
            icon={
              <Avatar
                w={{ base: 12, lg: 16 }}
                h={{ base: 12, lg: 16 }}
                src={
                  loading
                    ? ''
                    : `http://localhost:8080/${sanitizeImage(userImage)}`
                }
              />
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
        <List w='full' spacing={2}>
          {!loading &&
            chats.map(({ name, image, messages, chatId }, index) => (
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
              Borrar Cuenta
            </AlertDialogHeader>

            <AlertDialogBody>
              Estas de acuerdo? Esta acción no se puede deshacer.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={deleteUser} ml={3}>
                Borrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ChatSidebar;
