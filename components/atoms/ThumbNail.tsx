import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArtWorkItem} from '../../models/entity';
import {SingleArtworkScreenProps} from '../../screens';

export const ThumbNail = ({item}: {item: ArtWorkItem}) => {
  const navigation = useNavigation<SingleArtworkScreenProps['navigation']>();
  const artistName = item?.artist_title || 'Untitled';

  const handlePress = () => {
    navigation.navigate('SingleArtwork', {artWork: item});
  };

  return (
    <TouchableOpacity style={styles.thumbNailContainer} onPress={handlePress}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.artistName}>{artistName}</Text>
        <Text style={styles.year}>-{item?.date_display || 'Unknown'}-</Text>
        <Text style={styles.artworkTitle}>{item?.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://www.artic.edu/iiif/2/${item?.image_id}/full/843,/0/default.jpg`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
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
});
