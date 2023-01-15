import React from 'react';
import {TouchableOpacity} from 'react-native';
import {themeStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckIcon = ({onCheck, style, color}) => {
  return (
    <TouchableOpacity style={style} onPress={onCheck}>
      <Icon
        name={'check'}
        size={24}
        color={color ? color : themeStyle.colors.GRAY40}
      />
    </TouchableOpacity>
  );
};

export default CheckIcon;
