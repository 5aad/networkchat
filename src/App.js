import React from 'react';
import SplashScreen from './screens/NetworkData';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NumberScreen from './screens/NumberScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import VerifiyScreen from './screens/VerifiyScreen';
import ContactCardScreen from './screens/ContactCardScreen';
import AddContact from './screens/AddContact';
import ContactProfile from './screens/ContactProfile';
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
        <Stack.Screen
          options={{headerShown: false}}
          name="contact"
          component={ContactUsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="welcome"
          component={WelcomeScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="verify"
          component={VerifiyScreen}
        />
                 <Stack.Screen
          options={{headerShown: false}}
          name="ccard"
          component={ContactCardScreen}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="acard"
          component={AddContact}
        />
                 <Stack.Screen
          options={{headerShown: false}}
          name="contactProfile"
          component={ContactProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
