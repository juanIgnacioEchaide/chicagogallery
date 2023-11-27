import React, {ReactNode} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';
import {ArtWorkItem} from '../models/entity';
import ThumbNail from '../components/atoms/ThumbNail';

export function ArtworksListScreen(): ReactNode {
  const {data, status, pagination} = UseArtWorks();

  if (status?.loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>LOADING</Text>
        <Image source={require('../assets/logo.svg')} />
      </View>
    );
  }

  const renderThumbNail = ({item}: {item: ArtWorkItem}) => {
    return (
      <View style={styles.thumbNailContainer}>
        <View style={styles.descriptionContainer}>
          <Text>{item.artist_title}</Text>
          <Text>{item.date_display}</Text>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <ThumbNail lqip={item.image_id} />
        </View>
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
      <View>
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
  descriptionContainer: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  imageContainer: {
    width: 200,
  },
  paginationButtons: {
    width: '100%',
  },
  screenContainer: {
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
