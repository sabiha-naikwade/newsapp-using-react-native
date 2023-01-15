import React from 'react';
import {Text} from 'react-native';
import labelStyles from './styles';

const Label = ({name, ...props}) => {
  return <Text style={[labelStyles.label, props.style]}>{name}</Text>;
};

export default Label;
