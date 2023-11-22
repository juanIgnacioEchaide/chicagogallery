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
  console.log(lqip);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${lqip}`}}
        style={styles.image}
        resizeMode="stretch"
      />
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
