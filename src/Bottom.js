import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from './components/Icons';
import AddContact from './screens/AddContact';
import MessagesScreen from './screens/MessagesScreen';
import AccountScreen from './screens/AccountScreen';

const Tabs = AnimatedTabBarNavigator();
const styles = StyleSheet.create({
  b: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  a: {},
});
const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 32}
      color={props.tintColor}
    />
  );
};

const TabBarCustomIcon = (props) => {
  return <Icons name={props.name} color={props.tintColor} />;
};

export default ({route}) => {
  const rt = route.params.routeName;
  return (
    <SafeAreaView style={{backgroundColor: '#161616', flex: 1}}>
      <Tabs.Navigator
        initialRouteName={rt}
        backBehavior="history"
        appearence={{
          whenInactiveShow: 'icon-only',
          whenActiveShow: 'icon-only',
          shadow: true,
          dotSize: 'small',
        }}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#161616',
          activeBackgroundColor: '#161616',
          tabStyle: styles.b,
        }}>
        <Tabs.Screen
          name="Home"
          component={AddContact}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <TabBarCustomIcon
                size={24}
                focused={focused}
                tintColor={color}
                name="home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Chat"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <TabBarCustomIcon
                focused={focused}
                tintColor={color}
                name="chat"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={AccountScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <TabBarCustomIcon
                focused={focused}
                tintColor={color}
                name="profile"
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </SafeAreaView>
  );
};
