import React from 'react';
import SplashScreen from './screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NumberScreen from './screens/NumberScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import VerifiyScreen from './screens/VerifiyScreen';
import ContactCardScreen from './screens/ContactCardScreen';
import AddContact from './screens/AddContact';
import ContactProfile from './screens/ContactProfile';
import NetworkData from './screens/NetworkData';
import MessagesScreen from './screens/MessagesScreen';
import ChatScreen from './screens/ChatScreen';
import AccountScreen from './screens/AccountScreen';
import NetworkProfile from './screens/NetworkProfile';
import ShowProfile from './screens/ShowProfile';
import Bottom from './Bottom';
import PhoneBook from './screens/PhoneBook';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="chat">
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
        <Stack.Screen
          options={{headerShown: false}}
          name="networkData"
          component={NetworkData}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="message"
          component={MessagesScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="chat"
          component={ChatScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Account"
          component={AccountScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="profile"
          component={NetworkProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="sprofile"
          component={ShowProfile}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="pbook"
          component={PhoneBook}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="bottom"
          component={Bottom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
