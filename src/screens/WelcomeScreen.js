import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import Sliders from '../components/Sliders';
const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <Sliders nav={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
  },
  bgHeader: {
    backgroundColor: '#161616',
  },
});
export default WelcomeScreen;
