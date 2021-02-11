import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import {Paragraph, Appbar} from 'react-native-paper';
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
    navigation.navigate('welcome');
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
        <Paragraph style={styles.txtPara}>
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
  },
  imgRobot: {
    width: 362,
    height: 269,
  },
  txtPara: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F9F9F9',
    marginTop: 15,
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
