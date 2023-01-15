import React from 'react';
import {View, ImageBackground} from 'react-native';
import Text from '../typography/Text/index';
import {componentStyle} from '../../styles';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Header = ({title, onBackPress, imageType}) => {
  return (
    <View style={componentStyle.header}>
      <Navbar onBackPress={onBackPress} />
      {imageType && (
        <ImageBackground
          style={componentStyle.headerBackground}
          source={imageType}>
          <Text style={componentStyle.textHeader}>{title}</Text>
        </ImageBackground>
      )}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
