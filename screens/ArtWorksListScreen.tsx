import React, {ReactNode, useCallback, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';
import {ArtWorkItem} from '../models/entity';
import {ThumbNail, GenericError, Loader} from '../components';
import {DEFAULT_LIMIT} from '../constants';

export function ArtworksListScreen(): ReactNode {
  const {data, status, pagination, fetchArtWorksByPage} = UseArtWorks();

  const loadMoreArtWorks = useCallback(() => {
    if (!pagination) {
      return;
    }
    const nextPage = pagination.current_page + 1;
    fetchArtWorksByPage(nextPage, DEFAULT_LIMIT);
  }, [pagination, fetchArtWorksByPage]);

  useEffect(() => {
    loadMoreArtWorks();
  }, [loadMoreArtWorks]);

  const renderThumbNail = ({item}: {item: ArtWorkItem}) => {
    return <ThumbNail item={item} />;
  };

  if (status?.error) {
    return <GenericError />;
  }

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={data}
        renderItem={renderThumbNail}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={Loader}
        onEndReached={loadMoreArtWorks}
        onEndReachedThreshold={0.3}
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
