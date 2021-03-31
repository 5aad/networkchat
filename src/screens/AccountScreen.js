import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import {Title, Appbar} from 'react-native-paper';
import images from '../api/images';
import AccountList from '../components/AccountList';
import {useSelector} from 'react-redux';
import {getInitials} from '../redux/actions/auth';
const Data = [
  {
    id: '1',
    name: 'Profile',
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
  {
    id: '8',
    name: 'Logout',
  },
];
const AccountScreen = ({navigation}) => {
  const user = useSelector((state) => state.auth.user);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

      <View style={styles.innerContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {user.image ? (
            <Image style={styles.imgAvatar} source={images.avatar1} />
          ) : (
            <View
              style={{
                height: 102,
                width: 102,
                borderRadius: 12,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 50,
                }}>
                {getInitials(user.fullName)}
              </Text>
            </View>
          )}

          <Title style={styles.txtName}>{user.fullName}</Title>
        </View>
      </View>
      <View style={styles.lisContainer}>
        <AccountList nav={navigation} Data={Data} />
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
  lisContainer: {
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
