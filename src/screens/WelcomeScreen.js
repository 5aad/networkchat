import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import Sliders from '../components/Sliders';
const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#161616" />
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
