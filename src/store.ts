import { configureStore } from '@reduxjs/toolkit';
import { getUserInfo, getToken } from './localStorage/storage';
import {
  chatDeleteReducer,
  chatSelectReducer,
  chatSendReducer,
} from './reducers/chatReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
} from './reducers/userReducers';

const userIdFromStorage = getUserInfo();
const tokenFromStorage = getToken();

export default configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userLogout: userLogoutReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    chatSend: chatSendReducer,
    chatSelect: chatSelectReducer,
    chatDelete: chatDeleteReducer,
  },
  preloadedState: {
    userLogin: {
      userId: userIdFromStorage,
      token: tokenFromStorage,
    },
    userDetails: {
      user: {},
      loading: true,
    },
    chatSelect: {
      chat: { messages: [] },
    },
  },
});
