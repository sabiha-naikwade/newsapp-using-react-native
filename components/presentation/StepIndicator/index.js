import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {themeStyle} from '../../../styles';
import stepIndicatorStyles from './styles';
import {config} from '../../../constants';

const States = {
  BASE: 1,
  ACTIVE: 2,
  FINISHED: 3,
};

export const CheckIcon = () => {
  return <Icon name={'check'} size={16} color={themeStyle.colors.WHITE} />;
};

export const Dot = ({state, step}) => {
  let styles = [];
  if (state === States.ACTIVE) {
    styles.push(stepIndicatorStyles.dotActive);
  } else if (state === States.FINISHED) {
    styles.push(stepIndicatorStyles.stepFinished);
  }

  return (
    <View key={`DOT_${step}`} style={[stepIndicatorStyles.dot, styles]}>
      {state === States.FINISHED && <CheckIcon />}
    </View>
  );
};

export const Line = ({state, step}) => {
  let styles = [];
  if (state === States.ACTIVE) {
    styles.push(stepIndicatorStyles.lineActive);
  } else if (state === States.FINISHED) {
    styles.push(stepIndicatorStyles.stepFinished);
  }

  return (
    <View key={`LINE_${step}`} style={[stepIndicatorStyles.line, styles]} />
  );
};

const StepIndicator = ({currentStep}) => {
  const generateSteps = () => {
    let dots = [];
    for (let i = 1; i <= config.STEPS; i++) {
      let state = States.BASE;
      if (i === currentStep) {
        state = States.ACTIVE;
      } else if (i < currentStep) {
        state = States.FINISHED;
      }
      let step = (
        <View
          key={i}
          style={[
            stepIndicatorStyles.step,
            i === config.STEPS ? {width: 18} : {flex: 1},
          ]}>
          <Dot state={state} step={i} />
          {i !== config.STEPS && <Line state={state} step={i} />}
        </View>
      );
      dots.push(step);
    }
    return dots;
  };

  return (
    <View style={stepIndicatorStyles.stepIndicator}>{generateSteps()}</View>
  );
};

export default StepIndicator;
