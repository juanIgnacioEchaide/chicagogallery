import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtworksListScreen, SingleArtworkScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import LogoSVG from '../assets/logo.svg';
import {StyleSheet, Text, View} from 'react-native';

const Stack = createStackNavigator();
const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>FULL GALLERY</Text>
      <LogoSVG style={styles.headerLeft} />
    </View>
  );
};

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        header: CustomHeader,
        headerTintColor: '#333333',
        headerStyle: {
          height: 80,
        },
      }}
      initialRouteName="Splash">
      <Stack.Screen name="ArtworksList" component={ArtworksListScreen} />
      <Stack.Screen name="SingleArtwork" component={SingleArtworkScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    elevation: 2,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  headerTitle: {
    fontFamily: 'Verdana, sans-serif',
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    marginLeft: 40,
  },
  headerLeft: {
    marginLeft: 40,
  },
});

export default AppNavigator;
