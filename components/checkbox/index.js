import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import CheckIcon from '../icons/CheckIcon';
import checkBoxStyles from './styles';
import {themeStyle} from '../../styles';

const CheckBox = ({onPress, checked, label}) => {
  return (
    <TouchableOpacity onPress={onPress} style={checkBoxStyles.container}>
      <View style={[checkBoxStyles.wrapper]}>
        <CheckIcon
          color={checked ? themeStyle.colors.PRIMARY : themeStyle.colors.WHITE}
        />
      </View>
      {label && <Text style={[checkBoxStyles.text]}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default CheckBox;
