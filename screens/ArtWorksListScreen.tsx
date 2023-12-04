import React, {ReactNode, useCallback, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import UseArtWorks from '../hooks/UseArtWorks';
import {ArtWorkItem} from '../models/entity';
import {ThumbNail, GenericError, Loader} from '../components';

export function ArtworksListScreen(): ReactNode {
  const {data, status, fetchArtWorksByPage} = UseArtWorks();
  const [localError, setLocalError] = useState<boolean>(false);

  const loadArtWorks = useCallback(async () => {
    try {
      fetchArtWorksByPage();
    } catch (e: any) {
      setLocalError(true);
    }
  }, [fetchArtWorksByPage]);

  const renderThumbNail = ({item}: {item: ArtWorkItem}) => {
    return <ThumbNail item={item} />;
  };

  if (status?.error || localError) {
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
