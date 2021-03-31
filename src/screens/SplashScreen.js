import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, Text, Image, StyleSheet} from 'react-native';
import images from '../api/images';
import {meUser, setUser} from '../redux/actions/auth';
import {getContacts} from '../redux/actions/contacts';
import {useDispatch} from 'react-redux';
const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();

  async function checkIfLoggedIn() {
    const result = await meUser();
    if (result.status !== 200) navigation.navigate('number');
    else {
      console.log(result);
      dispatch(setUser({user: result.data}));
      dispatch(getContacts());
      navigation.navigate('bottom', {routeName: 'Home'});
    }
  }
  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Image style={styles.tinyLogo} source={images.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616',
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
});
export default SplashScreen;
