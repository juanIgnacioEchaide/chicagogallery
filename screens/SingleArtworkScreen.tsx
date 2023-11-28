import React, {ReactNode} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ArtworkArticle} from '../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type SingleArtworkScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SingleArtwork'
>;

export const SingleArtworkScreen = (): ReactNode => {
  const route = useRoute<SingleArtworkScreenProps['route']>();
  const navigation = useNavigation<SingleArtworkScreenProps['navigation']>();
  const {params} = route;

  const {artWork} = params;

  return (
    <View style={styles.articleContainer}>
      <ArtworkArticle
        artist_display={artWork.artist_display}
        date_display={artWork.date_display}
        dimensions={artWork.dimensions}
        material_titles={artWork?.material_titles}
        image_id={artWork?.image_id}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}> ← Back to gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'left',
    height: '100%',
    backgroundColor: 'white',
  },
  backButton: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#3333',
    borderRadius: 8,
    marginBottom: 5,
  },
});
