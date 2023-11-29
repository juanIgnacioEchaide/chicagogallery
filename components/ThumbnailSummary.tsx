import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ThumbnailSummary = ({
  artistName,
  date_display,
  title,
}: {
  artistName: string;
  date_display: string;
  title: string;
}) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.artistName}>{artistName}</Text>
      <Text style={styles.year}>-{date_display || 'Unknown'}-</Text>
      <Text style={styles.artworkTitle}>{title}</Text>
    </View>
  );
};
export const styles = StyleSheet.create({
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
});
