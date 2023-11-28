import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtworksListScreen, SingleArtworkScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import LogoSVG from '../assets/logo.svg';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{
          headerTitle: 'FULL GALLERY',
          headerTintColor: '#333333',
          headerTitleStyle: {
            fontFamily: 'Verdana, sans-serif',
            fontSize: 20,
            fontWeight: '700',
          },
          headerTitleAlign: 'center',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => {
            return <LogoSVG />;
          },
          headerLeftContainerStyle: {paddingLeft: 40},
          headerStyle: {height: 80},
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
