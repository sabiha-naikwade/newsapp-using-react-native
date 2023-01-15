import React, {useRef} from 'react';
import {
  TextInput as TextInputComponent,
  View,
  TouchableOpacity,
} from 'react-native';
import textInputStyles from './styles';
import Label from '../Label';

TextInputComponent.defaultProps = {
  textAlign: 'left',
  autoCorrect: false,
  autoCapitalize: 'none',
  returnKeyType: 'next',
};

const TextInput = ({
  label,
  errorHighlight,
  value,
  onChangeText,
  name,
  rightIcon,
  ...props
}) => {
  const inputRef = useRef(null);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => inputRef.current.focus()}
      style={[
        textInputStyles.textInputWrapper,
        errorHighlight && {borderColor: errorHighlight},
      ]}>
      <Label name={label} style={errorHighlight && {color: errorHighlight}} />
      <View style={textInputStyles.textInputContainer}>
        <TextInputComponent
          ref={inputRef}
          style={textInputStyles.textInputStyle}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid={'transparent'}
          {...props}
        />
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
};

export default TextInput;
