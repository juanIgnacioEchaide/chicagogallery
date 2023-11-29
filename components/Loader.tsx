import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RotatingContainer} from '../components';
import LoadingSVG from '../assets/loading.svg';

export const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <RotatingContainer>
        <LoadingSVG />
      </RotatingContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
