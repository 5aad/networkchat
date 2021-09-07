import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Paragraph, Appbar} from 'react-native-paper';
import images from '../api/images';

const SplashScreen = ({navigation}) => {
  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async function fetchMyAPI() {
    const data = await performTimeConsumingTask();
    navigation.navigate('verify');
  }
  useEffect(() => {
    fetchMyAPI();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.innerContainer}>
        <Image style={styles.imgRobot} source={images.robot} />
        <Paragraph style={styles.txtParas}>
          To use Network, you must be added to the Network by someone you know.
        </Paragraph>
        <Text style={styles.txtPara}>Don’t have any friends?</Text>
        <Text style={styles.txtContact}>Contact us.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#161616',
  },
  innerContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  imgRobot: {
    width: 117,
    height: 154,
    marginVertical: 20,
  },
  txtParas: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F9F9F9',
    marginTop: 15,
    textAlign: 'center',
    marginVertical: 20,
  },
  txtPara: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F9F9F9',
    marginTop: 15,
    textAlign: 'center',
  },
  txtContact: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F9F9F9',
  },
  bgHeader: {
    backgroundColor: '#161616',
  },
});
export default SplashScreen;
