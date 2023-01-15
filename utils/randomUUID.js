import {getUniqueId} from 'react-native-device-info';
import {currentDateTimeToString} from './dateFormatter';

const randomUUID = () => {
  return `${getUniqueId()}-${currentDateTimeToString()}`;
};

export default randomUUID;
