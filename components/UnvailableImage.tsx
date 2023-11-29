import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ErrorSVG from '../assets/error.svg';

export const UnavailableImage = (): ReactNode => {
  return (
    <View style={[styles.image, styles.unavailableContainer]}>
      <ErrorSVG height={100} />
      <Text style={styles.unavailableText}>Unavailable</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 7,
    width: 150,
    height: 150,
  },
  unavailableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3333',
  },
  unavailableText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
