import {
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
