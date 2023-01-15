import * as Keychain from 'react-native-keychain';
import DeviceInfo from 'react-native-device-info';
import {config} from '../constants';

const server = DeviceInfo.getBundleId();

const options = config.IS_IOS
  ? {}
  : {
      accessControl: Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD,
      rules: Keychain.SECURITY_RULES.NONE,
    };

export const storeUUID = async uuid => {
  const username = 'ClicID';
  await Keychain.setInternetCredentials(server, username, uuid, options);
};

export const getUUID = async () => {
  try {
    const credentials = await Keychain.getInternetCredentials(server, options);
    if (credentials) {
      return credentials.password;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const resetUUID = async () => {
  await Keychain.resetInternetCredentials(server);
};
