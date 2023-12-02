import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = ({loading}: {loading: boolean}) => {
  return (
    <>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#eee" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    verticalAlign: 'bottom',
    marginVertical: 10,
  },
});
