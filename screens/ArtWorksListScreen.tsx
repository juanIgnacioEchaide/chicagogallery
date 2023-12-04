import React, {ReactNode, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';
import {ArtWorkItem} from '../models/entity';
import {ThumbNail, GenericError, Loader} from '../components';
import {DEFAULT_LIMIT} from '../constants';

export function ArtworksListScreen(): ReactNode {
  const {data, status, pagination, fetchArtWorksByPage} = UseArtWorks();

  const loadArtWorks = useCallback(async () => {
    try {
      fetchArtWorksByPage(pagination.current_page + 1, DEFAULT_LIMIT);
    } catch (e: any) {
      console.error('error');
    }
  }, [fetchArtWorksByPage, pagination.current_page]);

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
        keyExtractor={item => `${item.id}${Math.random()}`}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={Loader}
        onEndReached={loadArtWorks}
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
  screenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});
