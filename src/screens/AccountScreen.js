import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {Title, Appbar} from 'react-native-paper';
import images from '../api/images';
import AccountList from '../components/AccountList';
const Data = [
  {
    id: '1',
    name: 'About',
  },
  {
    id: '2',
    name: 'Privacy',
  },
  {
    id: '3',
    name: 'Settings',
  },
  {
    id: '4',
    name: 'Notifications',
  },
  {
    id: '5',
    name: 'Network Data',
  },
  {
    id: '6',
    name: 'Help and Support',
  },
  {
    id: '7',
    name: 'Terms and Conditions',
  },
];
const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

      <View style={styles.innerContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.imgAvatar} source={images.avatar1} />
          <Title style={styles.txtName}>Jasica Loren</Title>
        </View>
      </View>
      <View style={styles.lisContainer}>
        <AccountList nav={navigation} Data={Data}/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  innerContainer: {
    paddingHorizontal: 30,
  },
  lisContainer:{
    flex: 1,
    paddingHorizontal: 20,
  },
  bgHeader: {
    backgroundColor: '#161616',
  },
  txtName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F8F8FF',
    marginTop: 8,
  },

  imgAvatar: {
    height: 102,
    width: 102,
    borderRadius: 12,
  },
});
export default AccountScreen;
