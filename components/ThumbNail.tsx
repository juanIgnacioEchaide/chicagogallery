import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArtWorkItem} from '../models/entity';
import {SingleArtworkScreenProps} from '../screens';
import {UnavailableImage} from './UnvailableImage';
import {ThumbnailSummary} from './ThumbnailSummary';

export const ThumbNail = ({item}: {item: ArtWorkItem}) => {
  const navigation = useNavigation<SingleArtworkScreenProps['navigation']>();
  const artistName = item?.artist_title || 'Untitled';

  const handlePress = () => {
    navigation.navigate('SingleArtwork', {artWork: item});
  };

  const imageURI = `https://www.artic.edu/iiif/2/${item?.image_id}/full/843,/0/default.jpg`;

  return (
    <TouchableOpacity style={styles.thumbNailContainer} onPress={handlePress}>
      <ThumbnailSummary
        artistName={artistName}
        date_display={item?.date_display}
        title={item?.title}
      />
      <View style={styles.imageContainer}>
        {item?.image_id ? (
          <Image
            source={{
              uri: imageURI,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <UnavailableImage />
        )}
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 7,
    width: 150,
    height: 150,
  },
  descriptionContainer: {
    marginTop: 10,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    marginRight: 20,
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
  thumbNailContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  unavailableContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3333',
  },
  unavailableText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
