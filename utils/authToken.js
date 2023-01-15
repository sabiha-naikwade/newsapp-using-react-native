import ApiClient from '../api/client';
import {httpStatus, config, asyncStorageKeys} from '../constants';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';

export const createAuthToken = async deviceUUID => {
  // try {
  //   const response = await ApiClient.post('/token', {
  //     body: {
  //       username: deviceUUID,
  //       password: config.SHARED_KEY,
  //       platform: DeviceInfo.getSystemName(),
  //     },
  //     responseType: 'text',
  //   });
  //   if (response && response.status === httpStatus.OK && response.data) {
  //     await setAuthToken(response.data);
  //   }
  // } catch (e) {
  //   // TODO: What happens if there is an error?
  //   console.log(e);
  // }
};

export const setAuthToken = async token =>
  AsyncStorage.setItem(asyncStorageKeys.AUTH_TOKEN, token);

export const getAuthToken = async () =>
  AsyncStorage.getItem(asyncStorageKeys.AUTH_TOKEN);

export const removeAuthToken = async () =>
  AsyncStorage.removeItem(asyncStorageKeys.AUTH_TOKEN);
