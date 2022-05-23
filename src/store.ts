import { configureStore } from '@reduxjs/toolkit';
import { getUserInfo, getToken } from './localStorage/storage';
import {
  chatDeleteReducer,
  chatDetailsReducer,
  chatSelectReducer,
  chatSendReducer,
} from './reducers/chatReducers';
import {
  userDeleteReducer,
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
    userDelete: userDeleteReducer,
    chatSend: chatSendReducer,
    chatSelect: chatSelectReducer,
    chatDelete: chatDeleteReducer,
    chatDetails: chatDetailsReducer,
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
    chatSelect: {},
    chatDetails: {
      loading: true,
      chats: [{ messages: [] }],
    },
  },
});
