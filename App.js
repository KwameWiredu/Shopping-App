import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './screens/homeScreen';
import DetailsSceeen from './screens/DetailsScreen';
import LoginScreen from './screens/LogIn';
import {StatusBar} from 'react-native';
import COLORS from './assets/colour';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}} initialRouteName={LoginScreen}>
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;