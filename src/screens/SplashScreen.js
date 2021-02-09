import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import images from '../api/images';

const SplashScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };


  async function fetchMyAPI() {
    const data = await this.performTimeConsumingTask();
    navigation.navigate('number')
  }
  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
