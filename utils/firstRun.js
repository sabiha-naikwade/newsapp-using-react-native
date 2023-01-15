import AsyncStorage from '@react-native-community/async-storage';
import {asyncStorageKeys} from '../constants';

function setAppLaunched() {
  AsyncStorage.setItem(asyncStorageKeys.HAS_LAUNCHED, 'true');
}

export default async function firstRun() {
  try {
    const hasLaunched = await AsyncStorage.getItem(
      asyncStorageKeys.HAS_LAUNCHED,
    );
    if (hasLaunched === null) {
      setAppLaunched();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
