import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ErrorSVG from '../assets/error.svg';

export const GenericError = () => {
  return (
    <View style={styles.errorContainer}>
      <ErrorSVG />
      <Text>Ups!</Text>
      <Text>Try again in a few minutes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
