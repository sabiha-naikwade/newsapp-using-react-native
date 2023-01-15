import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import buttonStyles from './styles';

const Button = ({onPress, title, enabled, children, ...props}) => {
  return (
    <View style={buttonStyles.buttonContainer}>
      <TouchableOpacity
        style={[
          enabled ? buttonStyles.buttonActive : buttonStyles.buttonInactive,
          props.style,
        ]}
        onPress={onPress}
        disabled={!enabled}>
        {children ? (
          children
        ) : (
          <Text style={buttonStyles.buttonText}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
