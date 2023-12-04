import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getMaterialsSentence} from '../utils';

export const ArticleSummary = ({
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
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Artist: </Text>
        {artist_display}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Date: </Text>
        {date_display}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Dimensions: </Text>
        {dimensions}
      </Text>
      <Text style={styles.info}>
        {material_titles && (
          <>
            <Text style={styles.label}>Materials: </Text>
            {getMaterialsSentence(material_titles) || 'unknown'}
          </>
        )}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Place of Origin: </Text>
        {place_of_origin || 'unknown'}
      </Text>
      {description && (
        <View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
});
