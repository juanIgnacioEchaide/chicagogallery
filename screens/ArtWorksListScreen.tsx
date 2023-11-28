import React, {ReactNode} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';
import {ArtWorkItem} from '../models/entity';
import {ThumbNail, PageNavigation} from '../components';

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
    return <ThumbNail {...item} />;
  };

  console.log(pagination);
  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={data}
        renderItem={renderThumbNail}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <PageNavigation
        limit={pagination.limit}
        currentPage={pagination.current_page}
        total={pagination.total_pages}
      />
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
  artistName: {
    fontSize: 20,
    fontWeight: '700',
  },
  year: {
    fontWeight: '400',
  },
  artworkTitle: {
    textAlign: 'justify',
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
