import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';

export type SingleArtworkScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SingleArtwork'
>;

export const SingleArtworkScreen = () => {
  // Access params from the route

  return (
    <View>
      <Text>{JSON.stringify('hola')}</Text>
    </View>
  );
};
