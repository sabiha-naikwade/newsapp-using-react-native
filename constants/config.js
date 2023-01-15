import {Platform} from 'react-native';

const config = {
  IS_ANDROID: Platform.OS === 'android' ? true : false,
  IS_IOS: Platform.OS === 'ios' ? true : false,
  DEFAULT_TIMEOUT: 60000,
  STEPS: 5,
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  SHARED_KEY: '7b64d3c8cc4edd2ffdbb111f1426e4d7',
};

export default config;
