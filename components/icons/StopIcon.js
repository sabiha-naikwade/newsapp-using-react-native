import React from 'react';
import {TouchableOpacity} from 'react-native';
import {themeStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StopIcon = ({onPress, style, color}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon
        name={'stop'}
        size={18}
        color={color ? color : themeStyle.colors.BLACK}
      />
    </TouchableOpacity>
  );
};

export default StopIcon;
