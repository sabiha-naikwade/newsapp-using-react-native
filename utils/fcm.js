import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import {config} from '../constants';

export const requestFirebaseMessagingPermission = async () => {
  const granted = await messaging().requestPermission(); // iOS specific
  if (granted) {
    registerAppWithFCM();
  }
};

export const registerAppWithFCM = async () => {
  if (config.IS_IOS) {
    const registered = await messaging().registerDeviceForRemoteMessages(); // iOS specific
    if (registered) {
      getToken();
    }
  } else {
    getToken();
  }
};

export const checkPermission = async () => {
  const hasPermission = await messaging().hasPermission();
  if (hasPermission) {
    getToken();
  } else {
    requestFirebaseMessagingPermission();
  }
};

export const getToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    AsyncStorage.setItem('fcmToken', fcmToken);
  }
};

export const firebaseMessageListener = () => {
  messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
};

export const onTokenRefreshListener = () => {
  messaging().onTokenRefresh(token => {
    if (token) {
      AsyncStorage.setItem('fcmToken', token.toString());
    }
  });
};
