import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Boutique from './src/screens/Boutique';
import Home from './src/screens/Home';
import Produit from './src/screens/Produit';

const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Boutique" component={Boutique} />
            <Stack.Screen name="Produit" component={Produit} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
