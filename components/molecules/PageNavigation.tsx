import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from 'react-native';

export const PageNavigation = ({
  currentPage,
  total,
  //limit,
  onPrevPage,
  onPressNextPage,
}: {
  currentPage: number;
  total: number;
  limit: number;
  onPressNextPage?: ((event: GestureResponderEvent) => void) | undefined;
  onPrevPage?: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="<" onPress={onPrevPage} disabled={currentPage === 1} />
      </View>
      <View style={styles.paginationDisplay}>
        <Text style={styles.paginationText}>{`${currentPage}/${total}`}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title=">"
          onPress={onPressNextPage}
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
