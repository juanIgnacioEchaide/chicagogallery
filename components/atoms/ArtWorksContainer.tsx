import React from 'react';
import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

export const ArtWorksListContainer = ({children}: {children: ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
