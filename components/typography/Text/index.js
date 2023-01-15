import React from 'react';
import {Text as TextComponent} from 'react-native';
import textStyles from './styles';

const Text = ({bold, ...props}) => {
  return (
    <TextComponent
      style={[
        textStyles.text,
        bold ? textStyles.bold : textStyles.regular,
        props.style,
      ]}>
      {props.children}
    </TextComponent>
  );
};

export default Text;
