import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ArtworksListScreen, SingleArtworkScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {CustomHeader} from '../components';
import {ArtWorkItem} from '../models/entity';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {defaultArtWork} from '../constants/navigation';

const Stack = createStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  ArtworksList: undefined;
  SingleArtwork: {
    artWork: ArtWorkItem;
  };
};

export type SingleArtworkProps = NativeStackScreenProps<
  RootStackParamList,
  'SingleArtwork'
>;

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
      initialRouteName="ArtworksList">
      <Stack.Screen name="ArtworksList" component={ArtworksListScreen} />
      <Stack.Screen
        name="SingleArtwork"
        component={SingleArtworkScreen}
        initialParams={{artWork: defaultArtWork}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
