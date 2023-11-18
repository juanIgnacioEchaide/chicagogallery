/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {ArtWorksProvider} from './context/ArtWorksContext';

function App(): JSX.Element {
  return (
    <ArtWorksProvider>
      <AppNavigator />
    </ArtWorksProvider>
  );
}

export default App;
