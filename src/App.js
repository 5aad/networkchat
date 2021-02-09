import React from 'react';
import SplashScreen from './screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NumberScreen from './screens/NumberScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
                <Stack.Screen
          options={{headerShown: false}}
          name="number"
          component={NumberScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
