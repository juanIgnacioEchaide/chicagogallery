import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size={'large'} color={'black'} />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
});
