import axios from 'axios';
import {
  CHAT_DELETE_FAIL,
  CHAT_DELETE_REQUEST,
  CHAT_DELETE_SUCCESS,
  CHAT_DETAILS_FAIL,
  CHAT_DETAILS_REQUEST,
  CHAT_DETAILS_SUCCESS,
  CHAT_SELECT_FAIL,
  CHAT_SELECT_REQUEST,
  CHAT_SELECT_SUCCESS,
  CHAT_SEND_FAIL,
  CHAT_SEND_REQUEST,
  CHAT_SEND_SUCCESS,
} from '../constants/chatConstants';

export const selectMsg = (chatId) => (dispatch, getState) => {
  dispatch({ type: CHAT_SELECT_REQUEST });
  const {
    userDetails: {
      user: { chats },
    },
  } = getState();

  const chat = chats.find((chat) => chatId === chat.chatId);

  if (chat) {
    dispatch({ type: CHAT_SELECT_SUCCESS, payload: chat.chatId });
  } else {
    dispatch({ type: CHAT_SELECT_FAIL, payload: 'Chat not found' });
  }
};

export const sendMsg =
  (message: string, chatId: string) => async (dispatch, getState) => {
    try {
      dispatch({ type: CHAT_SEND_REQUEST });
      const {
        userLogin: { token, userId },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      axios.post(
        `http://localhost:8080/chat/${userId}/${chatId}/`,
        { message },
        config
      );
      dispatch({ type: CHAT_SEND_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CHAT_SEND_FAIL,
        payload: message,
      });
    }
  };

export const getChatDetails =
  (chatId: string) => async (dispatch, getState) => {
    try {
      dispatch({ type: CHAT_DETAILS_REQUEST });
      const {
        userLogin: { token, userId },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:8080/chat/${userId}/`,
        config
      );
      const chat = data.chats.find((chat) => chatId === chat.chatId);
      if (chat) {
        dispatch({ type: CHAT_DETAILS_SUCCESS, payload: chat });
      } else {
        dispatch({ type: CHAT_DETAILS_FAIL, payload: 'chat not found' });
      }
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CHAT_DETAILS_FAIL,
        payload: message,
      });
    }
  };

export const deleteMsg = (chatId: string) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT_DELETE_REQUEST });
    const {
      userLogin: { token, userId },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(
      `http://localhost:8080/chat/${userId}/${chatId}/`,
      config
    );
    dispatch({ type: CHAT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CHAT_DELETE_FAIL,
      payload: message,
    });
  }
};
