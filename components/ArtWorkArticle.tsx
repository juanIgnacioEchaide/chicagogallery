import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import {ArticleSummary} from './ArticleSummary';

export const ArtworkArticle = ({
  image_id,
  artist_display,
  date_display,
  description,
  dimensions,
  material_titles,
  place_of_origin,
  title,
}: {
  image_id: string;
  artist_display: string;
  date_display: string;
  description?: string[] | null;
  dimensions?: string;
  material_titles?: object | null;
  place_of_origin?: string | null;
  title?: string;
}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ArticleSummary
        image_id={image_id}
        artist_display={artist_display}
        date_display={date_display}
        description={description}
        dimensions={dimensions}
        material_titles={material_titles}
        place_of_origin={place_of_origin}
        title={title}
      />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`,
          }}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    fontSize: 30,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
  imageContainer: {
    width: windowWidth - 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
});

export default ArtworkArticle;
