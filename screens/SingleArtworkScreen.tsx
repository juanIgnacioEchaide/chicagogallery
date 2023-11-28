import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useRoute} from '@react-navigation/native';
import {ArtworkArticle} from '../components';

export type SingleArtworkScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SingleArtwork'
>;

export const SingleArtworkScreen = () => {
  const route = useRoute<SingleArtworkScreenProps['route']>();
  const {params} = route;

  const {artWork} = params;

  useEffect(() => {
    if (artWork) {
      console.log('artWork', artWork);
    }
  }, [artWork]);

  return (
    <View style={styles.articleContainer}>
      <ArtworkArticle
        artist_display={artWork.artist_display}
        date_display={artWork.date_display}
        dimensions={artWork.dimensions}
        material_titles={artWork?.material_titles}
        image_id={artWork?.image_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
});
