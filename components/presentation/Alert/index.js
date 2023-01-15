import React, {useState, useEffect} from 'react';
import {useAlert} from '../../../hooks';
import {View, Alert as RNAlert} from 'react-native';
import {translate} from '../../../utils/locale';

function Alert() {
  const {error, removeError} = useAlert();
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = () => {
    removeError();
    setIsVisible(false);
  };

  const alertDialog = () => {
    setIsVisible(true);
    RNAlert.alert(error.title, error.message, [
      {text: translate('dismiss'), onPress: () => handleSubmit()},
    ]);
  };

  return <View>{error && !isVisible && alertDialog()}</View>;
}

export default Alert;
