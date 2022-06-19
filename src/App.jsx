import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { TopBar, Balance } from './components'

import styles from './styles/App.style'

export const App = () => {

  return (
    <View style={styles.home}>
      <TopBar />
    </View>
  );
};