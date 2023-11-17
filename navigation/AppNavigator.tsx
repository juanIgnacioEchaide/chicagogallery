import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtworksListScreen, SingleArtworkScreen} from '../screens';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={ArtworksListScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Home" component={SingleArtworkScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
