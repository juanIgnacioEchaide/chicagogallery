import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';

export function ArtworksListScreen(): ReactNode {
  const {data, status, pagination} = UseArtWorks();

  if (status?.loading) {
    return <Text>LOADING</Text>;
  }

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(pagination)}</Text>
    </View>
  );
}
