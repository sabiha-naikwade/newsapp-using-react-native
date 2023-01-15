import React from 'react';
import {View} from 'react-native';
import {componentStyle, themeStyle} from '../../styles';
import BackIcon from '../icons/BackIcon';
import ThreeDotsIcon from '../icons/ThreeDotsIcon';

const Navbar = ({onBackPress}) => {
  return (
    <View style={componentStyle.headerIcons}>
      <BackIcon
        color={onBackPress ? themeStyle.colors.BLACK : themeStyle.colors.WHITE}
        onPress={onBackPress}
      />
      <ThreeDotsIcon
        style={componentStyle.headerBackIcon}
        color={themeStyle.colors.BLACK}
      />
    </View>
  );
};

export default Navbar;
