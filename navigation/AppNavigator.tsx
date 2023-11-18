import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtworksListScreen, SingleArtworkScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="ArtworksList"
        component={ArtworksListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SingleArtwork" component={SingleArtworkScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
