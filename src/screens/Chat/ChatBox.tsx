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

const ChatBox = () => {
  const [textColor, setTextColor] = useState('gray.600');
  const [chatBgColor, setChatBgColor] = useState('#e8e8e8');
  const [showDots, setShowDots] = useState(false);

  const clickChange = () => {
    setTextColor('white');
    setChatBgColor('green.500');
  };
  const clickChange2 = () => {
    setTextColor('gray.600');
    setChatBgColor('#e8e8e8');
  };

  const clickChange3 = () => {
    setShowDots(true);
  };
  const clickChange4 = () => {
    setShowDots(false);
  };
  return (
    <HStack
      justify='space-between'
      px={6}
      w='100%'
      h='100%'
      bg={chatBgColor}
      onMouseEnter={clickChange3}
      onMouseLeave={clickChange4}
    >
      <Button
        variant='unstyled'
        w='100%'
        h='100%'
        onFocus={clickChange}
        onBlur={clickChange2}
        _focus={{ border: 'none' }}
      >
        <HStack>
          <Avatar />
          <VStack alignItems='flex-start' overflow='hidden'>
            <Text fontWeight='bold'>Maria Lopez</Text>
            <HStack>
              <Icon color='#36dd81' fontSize='xl' as={BsCheck2All} />
              <Text
                color={textColor}
                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
                w='60%'
              >
                Si, me gusta la albomndiga con aceituna y rellenodas de acelga
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
