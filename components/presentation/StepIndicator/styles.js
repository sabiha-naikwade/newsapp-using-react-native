import {StyleSheet} from 'react-native';
import {themeStyle} from '../../../styles';

const stepIndicatorStyles = StyleSheet.create({
  stepIndicator: {
    flex: 1,
    flexDirection: 'row',
  },
  step: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  dot: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: themeStyle.borders.RADIUS_30,
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.STEP_INDICATOR.BASE,
    zIndex: 1,
  },
  dotActive: {
    backgroundColor: themeStyle.colors.STEP_INDICATOR.ACTIVE,
    borderColor: themeStyle.colors.STEP_INDICATOR.ACTIVE,
  },
  line: {
    flex: 1,
    height: 2,
    alignSelf: 'center',
    backgroundColor: themeStyle.colors.STEP_INDICATOR.BASE,
    borderColor: themeStyle.colors.STEP_INDICATOR.BASE,
  },
  lineActive: {
    backgroundColor: themeStyle.colors.STEP_INDICATOR.BASE,
    borderColor: themeStyle.colors.STEP_INDICATOR.BASE,
  },
  stepFinished: {
    backgroundColor: themeStyle.colors.STEP_INDICATOR.FINISHED,
    borderColor: themeStyle.colors.STEP_INDICATOR.FINISHED,
  },
});

export default stepIndicatorStyles;
