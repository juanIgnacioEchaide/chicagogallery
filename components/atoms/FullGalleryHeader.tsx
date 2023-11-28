import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgUri} from 'react-native-svg';

export const FullGalleryHeader = () => {
  return (
    <SvgUri
      style={styles.imageContainer}
      width={20}
      height={20}
      uri={require('../../assets/logo.svg')}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {width: 20, height: 20, marginLeft: 10},
});
