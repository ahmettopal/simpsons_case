import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation';
import { StoreProvider } from './src/store';

const App = () => {
  return (
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  );
};

export default App;
