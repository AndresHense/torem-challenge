import {
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

export const chatSendReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CHAT_SEND_REQUEST:
      return { ...state, loading: true };
    case CHAT_SEND_SUCCESS:
      return { loading: false };
    case CHAT_SEND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const chatDeleteReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CHAT_SEND_REQUEST:
      return { ...state, loading: true };
    case CHAT_SEND_SUCCESS:
      return { loading: false, success: true };
    case CHAT_SEND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const chatSelectReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CHAT_SELECT_REQUEST:
      return { ...state, loading: true };
    case CHAT_SELECT_SUCCESS:
      return { loading: false, chatId: action.payload };
    case CHAT_SELECT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const chatDetailsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CHAT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CHAT_DETAILS_SUCCESS:
      return { loading: false, chat: action.payload };
    case CHAT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
