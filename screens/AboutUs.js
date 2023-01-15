import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Text} from '../components';
import {translate} from '../utils/locale';
import {themeStyle} from '../styles';

const AboutUs = () => {
  return (
    <>
      <SafeAreaView>
        <View style={{margin: 10}}>
          <Text bold style={{marginBottom: themeStyle.spacing.SPACING_5}}>
            {translate('whoWeAre')}
          </Text>
          <Text style={{marginBottom: themeStyle.spacing.SPACING_15}}>
            {translate('whoWeAreDescription')}
          </Text>
          <Text bold style={{marginBottom: themeStyle.spacing.SPACING_5}}>
            {translate('ourMission')}
          </Text>
          <Text style={{marginBottom: themeStyle.spacing.SPACING_15}}>
            {translate('ourMissionDescription')}
          </Text>
          <Text bold style={{marginBottom: themeStyle.spacing.SPACING_5}}>
            {translate('contact')}
          </Text>
          <Text>{translate('contactDescription')}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AboutUs;
