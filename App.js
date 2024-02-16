import * as React from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import appStore from './src/appStore';
import { NavigationContainer } from '@react-navigation/native';

import RouteScreen from './src/routes/routes';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(appStore);

const App = () =>{
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return(
   <Provider store={appStore}>
      <PersistGate persistor={persistor}>
        <RouteScreen />
      </PersistGate>
    </Provider>
  )
}

export default App;