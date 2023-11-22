import React, {ReactNode} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';
import {ArtWorkItem} from '../models/entity';
import ThumbNail from '../components/atoms/ThumbNail';

export function ArtworksListScreen(): ReactNode {
  const {data, status, pagination} = UseArtWorks();

  if (status?.loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>LOADING</Text>
      </View>
    );
  }

  const renderThumbNail = ({item}: {item: ArtWorkItem}) => {
    return (
      <View style={styles.thumbNailContainer}>
        <ThumbNail
          lqip={item.thumbnail.lqip}
          height={item.thumbnail.height}
          width={item.thumbnail.width}
        />
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={data}
        renderItem={renderThumbNail}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.screenContainer}>
        <Text>{JSON.stringify(pagination)}</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  loadingContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationButtons: {
    width: '100%',
  },
  screenContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbNailContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});
