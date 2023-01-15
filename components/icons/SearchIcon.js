import React from 'react';
import {themeStyle} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchIcon = ({style}) => {
  return (
    <Icon
      style={style}
      name="magnify"
      size={24}
      color={themeStyle.colors.GRAY40}
    />
  );
};

export default SearchIcon;
