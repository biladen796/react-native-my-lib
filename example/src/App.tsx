import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import { MyLibView } from 'react-native-my-lib';

export default function App() {
  return (
    <NavigationContainer>
      <MyLibView />
    </NavigationContainer>
  );
}
