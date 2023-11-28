import React, {useCallback} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import UseArtWorks from '../../hooks/UseArtWorks';

export const PageNavigation = ({
  currentPage,
  total,
}: //limit,
{
  currentPage: number;
  total: number;
  limit: number;
}) => {
  const {fetchArtWorksByPage} = UseArtWorks();

  const handlePreviousPage = useCallback(
    () => currentPage > 1 && fetchArtWorksByPage(2),
    [currentPage, fetchArtWorksByPage],
  );

  const handleNextPage = useCallback(
    () => currentPage < total && fetchArtWorksByPage(currentPage - 1),
    [currentPage, fetchArtWorksByPage, total],
  );

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="<"
          onPress={handlePreviousPage}
          disabled={currentPage === 1}
        />
      </View>
      <View style={styles.paginationDisplay}>
        <Text style={styles.paginationText}>{`${currentPage}/${total}`}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title=">"
          onPress={handleNextPage}
          disabled={currentPage === total || total === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    bottom: 20,
    justifyContent: 'space-between',
  },
  paginationDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  paginationText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '700',
    fontSize: 20,
  },
  button: {
    borderRadius: 30,
  },
});
