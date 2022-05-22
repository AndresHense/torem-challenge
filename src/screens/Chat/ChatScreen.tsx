import { Flex, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ChatSidebar from './ChatSidebar';
import Chat from './Chat';
import axios from 'axios';
import { sanitizeImage } from './aux';
import { UserData } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../actions/userActions';

const ChatScreen = () => {
  document.title = 'Inicio / Chatter';
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userId } = userLogin;

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [dispatch, userId]);

  return (
    <HStack h='86vh' spacing={0}>
      {!loading && (
        <ChatSidebar
          chats={user.chats}
          userImage={sanitizeImage(user?.image || '')}
          userId={userId}
        />
      )}
      <Flex as='main' flex={1} h='full' direction='column'>
        {!loading && <Chat />}
      </Flex>
    </HStack>
  );
};

export default ChatScreen;
