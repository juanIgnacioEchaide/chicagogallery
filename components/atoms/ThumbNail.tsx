import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface ThumbNailProps {
  lqip: string;
  width?: number;
  height?: number;
}

export const ThumbNailSkeleton = () => (
  <View style={styles.skeleton}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export const ThumbNail = ({lqip}: ThumbNailProps) => {
  return (
    <View style={styles.container}>
      <FastImage source={{uri: lqip}} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
  skeleton: {
    width: 200,
    height: 200,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThumbNail;
