import axios from 'axios';
import { AnyAction } from 'redux';
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';
import {
  deleteToken,
  deleteUserInfo,
  setToken,
  setUserInfo,
} from '../localStorage/storage';

export const login = (email: string, password: string) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'http://localhost:8080/user/login',
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    setUserInfo(data.userId);
    setToken(data.token);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  deleteUserInfo();
  deleteToken();
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
};

export const register =
  ({ name, lastName, email, password, file }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const formData = new FormData();
      formData.append('name', name);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('image', file);
      const response = await axios.post(
        'http://localhost:8080/user/create',
        formData,
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserDetails =
  (id: string) => async (dispatch: any, getState: any) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });

      const {
        userLogin: { token },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:8080/user/${id}`,
        config
      );

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      });
    }
  };

export const deleteUserById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });

    const {
      userLogin: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`http://localhost:8080/user/${id}`, config);

    dispatch({ type: USER_DELETE_SUCCESS });
    dispatch(logout());
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};
