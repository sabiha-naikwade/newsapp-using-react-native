import React from 'react';
import {View} from 'react-native';
import {themeStyle, componentStyle} from '../../styles';

const Dots = props => {
  const {BASE, ACTIVE} = themeStyle.colors.DOTS_PAGINATION;
  const {length, currentIndex} = props;
  const style = {
    width: 10,
    height: 10,
    marginHorizontal: themeStyle.spacing.SPACING_10,
    borderRadius: themeStyle.borders.RADIUS_30,
  };

  const generateDots = () => {
    let dots = [];
    for (let index = 0; index < length; index++) {
      style.backgroundColor = index === currentIndex ? ACTIVE : BASE;
      dots.push(<View key={`DOT_${index}`} style={{...style}} />);
    }
    return dots;
  };

  return <View style={componentStyle.dots}>{generateDots()}</View>;
};

export default Dots;
