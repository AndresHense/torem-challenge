import axios from 'axios';
import {
  CHAT_SEND_FAIL,
  CHAT_SEND_REQUEST,
  CHAT_SEND_SUCCESS,
} from '../constants/chatConstants';

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
