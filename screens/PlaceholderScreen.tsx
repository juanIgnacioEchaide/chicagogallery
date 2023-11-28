import React from 'react';
import {StyleSheet, Text} from 'react-native';
import SplashSVG from '../assets/splash.svg';
import {FadeContainer} from '../components/FadingContainer';

export const PlaceholderScreen = () => {
  return (
    <FadeContainer>
      <SplashSVG style={styles.logo} />
      <Text>by</Text>
      <Text style={styles.subtext}>Juan Ignacio Echaide</Text>
    </FadeContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 1000,
    height: 1000,
  },
  subtext: {
    fontWeight: '700',
    fontSize: 20,
  },
});
