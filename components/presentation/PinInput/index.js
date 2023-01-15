import React from 'react';
import {View, Text} from 'react-native';
import pinInputStyles from './style';

const PinInput = ({codeLength, currentCodeLength}) => (
  <PinBoxList codeLength={codeLength} currentCodeLength={currentCodeLength} />
);

export default PinInput;

const PinBoxList = ({codeLength, currentCodeLength}) => (
  <View style={pinInputStyles.pinInputContainer}>
    {renderList({codeLength, currentCodeLength})}
  </View>
);

const renderList = ({codeLength, currentCodeLength}) => {
  let fields = [];

  for (let i = 0; i < codeLength; i++) {
    const index = i + 1;
    fields.push(
      <PinBox key={index} hasValue={currentCodeLength - index >= 0} />,
    );
  }

  return fields;
};

const PinBox = ({hasValue}) => (
  <View style={pinInputStyles.pinBox}>
    {hasValue && <Text style={pinInputStyles.pinSymbol}>*</Text>}
  </View>
);
