## Chicagogallery is a react-native app by Juan Ignacio Echaide with features:
      * Context API state-management
      * Infinite scrolling
      * React-router navigatior

## DISCLAIMER
This project is not ment to be a good example of UX/UI but only an exmaple of state managemente in some case scenario

### clone rep
      git clone https://github.com/juanIgnacioEchaide/chicagogallery.git
### install dependencies
      yarn
### run metro terminal
      yarn start 
### run android
      yarn android

### How does it work
## ArtWorksProvider 🎨

ArtWorksContext
- Pagination (total, limit, offset, etc.)
- Artwork Data (data)
- Status (loading, error)

shell


## ArtworksListScreen 🖼️

FlatList (Artworks)
- onEndReached -> loadArtWorks (Context)

javascript


This represents the hierarchy of the `ArtWorksProvider` managing the context data within `ArtWorksContext` and `ArtworksListScreen` utilizing this context to handle the `FlatList` of artworks with an `onEndReached` event triggering `loadArtWorks` from the context.


   
## Captures

Fading Splash
![chicagogallery000](https://github.com/juanIgnacioEchaide/chicagogallery/assets/43832189/17b7d345-23f8-47ef-9507-8ba7a5ca9fa9)

Infinite scrolling
![chicagogallery001](https://github.com/juanIgnacioEchaide/chicagogallery/assets/43832189/77cec681-733e-407e-9c20-3e5fbd7495c0)

Single item view
![chicagogallery002](https://github.com/juanIgnacioEchaide/chicagogallery/assets/43832189/50f39f2b-64e4-4edc-9f1e-955869fa5d29)

Generic error screen
![chicagogallery004](https://github.com/juanIgnacioEchaide/chicagogallery/assets/43832189/9b7ead58-e306-4c95-919b-3f6dff31bda0)

### dependencies 
          "dependencies": {
             "@react-native-community/masked-view": "^0.1.11",
             "@react-navigation/native": "^6.1.9",
             "@react-navigation/native-stack": "^6.9.17",
             "@react-navigation/stack": "^6.3.20",
             "axios": "^1.6.2",
             "react": "18.2.0",
             "react-native": "0.72.7",
             "react-native-gesture-handler": "^2.13.4",
             "react-native-reanimated": "^3.5.4",
             "react-native-safe-area-context": "^4.7.4",
             "react-native-screens": "^3.27.0",
             "react-native-svg": "^14.0.0",
             "uuid": "^9.0.1"
           },
           "devDependencies": {
             "@babel/core": "^7.20.0",
             "@babel/preset-env": "^7.20.0",
             "@babel/runtime": "^7.20.0",
             "@react-native/eslint-config": "^0.72.2",
             "@react-native/metro-config": "^0.72.11",
             "@tsconfig/react-native": "^3.0.0",
             "@types/react": "^18.0.24",
             "@types/react-test-renderer": "^18.0.0",
             "babel-jest": "^29.2.1",
             "eslint": "^8.19.0",
             "jest": "^29.2.1",
             "metro-react-native-babel-preset": "0.76.8",
             "prettier": "^2.4.1",
             "react-native-svg-transformer": "^1.1.0",
             "react-test-renderer": "18.2.0",
             "typescript": "4.8.4"
           },
