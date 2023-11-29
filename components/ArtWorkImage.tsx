import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {UnavailableImage} from './UnvailableImage';

export const ArtWorkImage = ({
  imageId,
  type,
}: {
  imageId: string;
  type: 'thumbnail' | 'article';
}) => {
  const imageURI = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  return (
    <View
      style={
        type === 'thumbnail'
          ? styles.thumbnailContainer
          : styles.articleContainer
      }>
      {imageId ? (
        <Image
          source={{
            uri: imageURI,
          }}
          style={
            type === 'thumbnail' ? styles.thumbnailImage : styles.articleImage
          }
          resizeMode="cover"
        />
      ) : (
        <UnavailableImage />
      )}
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  thumbnailContainer: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailImage: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  articleContainer: {
    width: windowWidth - 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
  articleImage: {
    height: 300,
    width: '100%',
  },
});
