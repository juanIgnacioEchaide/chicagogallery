import React, {ReactNode, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';
import {ArtWorkItem} from '../models/entity';
import {ThumbNail, PageNavigation, Loader, GenericError} from '../components';

export function ArtworksListScreen(): ReactNode {
  const {data, status, pagination} = UseArtWorks();
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  if (status?.loading || loadingPage) {
    return <Loader />;
  }

  if (status?.error) {
    return <GenericError />;
  }

  const renderThumbNail = ({item}: {item: ArtWorkItem}) => {
    return <ThumbNail item={item} />;
  };

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
        setLoadingPage={setLoadingPage}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
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
