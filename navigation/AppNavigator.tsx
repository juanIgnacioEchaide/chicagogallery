import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtworksListScreen, SingleArtworkScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {CustomHeader} from '../components';
import {ArtWorkItem} from '../models/entity';

const Stack = createStackNavigator();
export type RootStackParamList = {
  ArtworksList: undefined;
  SingleArtwork: {artWork: ArtWorkItem};
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
      <Stack.Screen
        name="SingleArtwork"
        component={SingleArtworkScreen}
        initialParams={{artWork: {}}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
