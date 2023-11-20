import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface FullSizeArtWorkProps {
  lqip: string;
}
export const FullSizeArtWork = ({lqip}: FullSizeArtWorkProps) => {
  return (
    <Image source={{uri: `${lqip}`}} style={styles.image} resizeMode="cover" />
  );
};

export const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
export default FullSizeArtWork;
