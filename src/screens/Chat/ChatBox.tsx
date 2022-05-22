import {
  Avatar,
  Button,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsCheck2All } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { selectMsg } from '../../actions/chatActions';
import { sanitizeImage } from './aux';

type Props = {
  name: string;
  image: string;
  lastMessage: string;
  chatId: string;
};

const ChatBox = ({ name, image, lastMessage, chatId }: Props) => {
  const [textColor, setTextColor] = useState('gray.600');
  const [chatBgColor, setChatBgColor] = useState('#e8e8e8');
  const [showDots, setShowDots] = useState(false);
  const dispatch = useDispatch();

  const handleFocus = () => {
    setTextColor('white');
    setChatBgColor('green.500');
    dispatch(selectMsg(chatId));
  };
  const handleBlur = () => {
    setTextColor('gray.600');
    setChatBgColor('#e8e8e8');
  };

  return (
    <HStack
      justify='space-between'
      px={6}
      w='100%'
      h='100%'
      bg={chatBgColor}
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        _focus={{ border: 'none' }}
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
      <IconButton
        icon={<HiDotsVertical />}
        aria-label='chat-options'
        variant='unstyled'
        display={showDots ? 'block' : 'none'}
        _focus={{ border: 'none' }}
      />
    </HStack>
  );
};

export default ChatBox;
