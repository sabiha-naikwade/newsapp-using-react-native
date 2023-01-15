import React from 'react';
import {TouchableOpacity} from 'react-native';
import {themeStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BackspaceIcon = ({onPress, style, color}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon
        name={'backspace-outline'}
        size={22}
        color={color ? color : themeStyle.colors.BLACK}
      />
    </TouchableOpacity>
  );
};

export default BackspaceIcon;
