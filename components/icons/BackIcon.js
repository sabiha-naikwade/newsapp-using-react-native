import React from 'react';
import {TouchableOpacity} from 'react-native';
import {themeStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BackIcon = ({onPress, style, color}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={1}>
      <Icon
        name={'keyboard-backspace'}
        size={32}
        color={color ? color : themeStyle.colors.PRIMARY}
      />
    </TouchableOpacity>
  );
};

export default BackIcon;
