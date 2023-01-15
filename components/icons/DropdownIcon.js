import React from 'react';
import {TouchableOpacity} from 'react-native';
import {themeStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DropdownIcon = ({onPress, isOpen, style}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Icon
        style={style}
        name={isOpen ? 'menu-up' : 'menu-down'}
        size={24}
        color={themeStyle.colors.GRAY40}
      />
    </TouchableOpacity>
  );
};

export default DropdownIcon;
