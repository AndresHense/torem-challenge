import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Button,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { FocusableElement } from '@chakra-ui/utils';
import React, { useRef, useState } from 'react';
import { BsCheck2All } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMsg, selectMsg } from '../../actions/chatActions';
import { sanitizeImage } from './aux';
import { BiTrash } from 'react-icons/bi';
import { useEffect } from 'react';

type Props = {
  name: string;
  image: string;
  lastMessage: string;
  chatId: string;
};

const ChatBox = ({ name, image, lastMessage, chatId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | FocusableElement>();

  const [textColor, setTextColor] = useState('gray.600');
  const [chatBgColor, setChatBgColor] = useState('#e8e8e8');
  const [showDots, setShowDots] = useState(false);
  const [bxShadow, setBxShadow] = useState('');
  const dispatch = useDispatch();

  const handleFocus = () => {
    dispatch(selectMsg(chatId));
  };

  const deleteChat = () => {
    dispatch(deleteMsg(chatId));
  };

  const chatSelect = useSelector((state) => state.chatSelect);
  const { chat, loading, error } = chatSelect;

  useEffect(() => {
    if (chatId === chat.chatId) {
      setTextColor('white');
      setChatBgColor('green.500');
      setBxShadow('0px 3px 5px gray');
    } else {
      setTextColor('gray.600');
      setChatBgColor('#e8e8e8');
      setBxShadow('');
    }
  }, [chat]);
  return (
    <HStack
      justify='space-between'
      px={6}
      w='100%'
      h='100%'
      bg={chatBgColor}
      boxShadow={bxShadow}
      onMouseEnter={() => {
        setShowDots(true);
      }}
      onMouseLeave={() => {
        setShowDots(false);
      }}
    >
      <Button
        variant='unstyled'
        w='100%'
        h='100%'
        onClick={handleFocus}
        _focus={{ border: 'none' }}
        py={3}
      >
        <HStack>
          <Avatar src={`http://localhost:8080/${sanitizeImage(image)}`} />
          <VStack alignItems='flex-start' overflow='hidden'>
            <Text fontWeight='bold'>{name}</Text>
            <HStack>
              <Icon color='#36dd81' fontSize='xl' as={BsCheck2All} />
              <Text
                color={textColor}
                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
                w='330px'
              >
                {lastMessage}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Button>
      <Menu placement='right' px={0}>
        <MenuButton
          as={IconButton}
          icon={<HiDotsVertical />}
          aria-label='chat-options'
          variant='unstyled'
          display={showDots ? 'block' : 'none'}
          _focus={{ border: 'none' }}
        />
        <Portal>
          <MenuList bg='gray.100' mx={-2} display={showDots ? 'block' : 'none'}>
            <MenuItem icon={<BiTrash color='red' />} onClick={onOpen}>
              Borrar
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Borrar Chat
            </AlertDialogHeader>

            <AlertDialogBody>
              Estas de acuerdo? Esta acción no se puede deshacer.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={deleteChat} ml={3}>
                Borrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </HStack>
  );
};

export default ChatBox;
