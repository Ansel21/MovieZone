import React from 'react';
import AppNavigator from './navigation/Appnavigator';
import { SafeAreaView } from 'react-native';

const App = () => {

  return(
    <SafeAreaView style={{ flex: 1 }}>
    <AppNavigator/>
    </SafeAreaView>
  )
}
export default App;