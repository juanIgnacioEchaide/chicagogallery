import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtworksListScreen, SingleArtworkScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {FullGalleryHeader} from '../components/atoms/FullGalleryHeader';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{
          headerTitle: 'Full Gallery',
          headerTitleAlign: 'center',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <FullGalleryHeader />,
          headerLeftContainerStyle: {paddingLeft: 10},
          headerShown: true,
        }}
        name="ArtworksList"
        component={ArtworksListScreen}
      />
      <Stack.Screen name="SingleArtwork" component={SingleArtworkScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
