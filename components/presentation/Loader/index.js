import React from 'react';
import {View, Modal, ActivityIndicator, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {themeStyle, componentStyle} from '../../../styles';
import loaderStyles from './styles';
import Text from '../../typography/Text';
import {bgImageVariations} from '../../../constants';
import Background from '../Background';
import {useScreenDimensions} from '../../../hooks';

const Loader = props => {
  const screenDimensions = useScreenDimensions();

  const backgroundColor = {
    backgroundColor: props.backgroundColor
      ? props.backgroundColor
      : themeStyle.colors.PRIMARY_LIGHT,
  };

  const textColor = {
    color: props.textColor ? props.textColor : themeStyle.colors.WHITE,
  };
  const iconColor = props.iconColor ? props.iconColor : themeStyle.colors.WHITE;

  return (
    <Modal
      transparent={props.transparent}
      animationType="fade"
      visible={props.loading}>
      <SafeAreaView style={[loaderStyles.modalBackground, backgroundColor]}>
        {!props.transparent && (
          <View style={componentStyle.backgroundContainer}>
            <Background color={bgImageVariations.PRIMARY} />
          </View>
        )}
        <View
          style={[
            loaderStyles.activityIndicatorWrapper,
            {height: screenDimensions.height / 2},
          ]}>
          <ActivityIndicator
            loading={props.loading}
            size="large"
            color={iconColor}
            style={loaderStyles.activityIndicator}
          />
          {props.title && <Text style={textColor}>{props.title}</Text>}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  transparent: PropTypes.bool.isRequired,
};

export default Loader;
