import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../Screens/Homepage'; // Adjust path as necessary

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" options={{headerShown:false}} component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
