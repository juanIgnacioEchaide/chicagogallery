import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';

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

export const ThumbNail = ({lqip, height, width}: ThumbNailProps) => {
  return (
    <Image
      source={{
        uri: `https://www.artic.edu/iiif/2/${lqip}/full/843,/0/default.jpg`,
      }}
      height={200}
      width={200}
    />
  );
};

export const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
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
