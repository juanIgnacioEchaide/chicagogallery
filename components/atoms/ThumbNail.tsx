import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';

interface ThumbNailProps {
  lqip: string;
}

export const ThumbNailSkeleton = () => (
  <View style={styles.skeleton}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export const ThumbNail = ({lqip}: ThumbNailProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://www.artic.edu/iiif/2/${lqip}/full/843,/0/default.jpg`,
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
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
