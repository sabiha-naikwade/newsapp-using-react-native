import React from 'react';
import Nav from '../src/navigation/AppNavigator';
import {setI18nConfig} from './utils/locale';
import {StateProvider} from './store';

export default () => {
  setI18nConfig('alb');
  return (
    <StateProvider>
      <Nav />
    </StateProvider>
  );
};
