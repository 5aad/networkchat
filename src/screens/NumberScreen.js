import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
import images from '../api/images';
const NumberScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.innerContainer}>
        <Title style={styles.txtTitle}>Welcome</Title>
        <Paragraph style={styles.txtPara}>
          Enter your phone number to continue to Network, and enjoy messaging
          and calling with your Network.
        </Paragraph>

        <View style={styles.numbContainer}>
          <View style={styles.flagContainer}></View>
          <View style={styles.inputContainer}>
            <Image style={styles.imgCall} source={images.call} />
            <TextInput
              placeholder="+13457690456"
              placeholderTextColor="#F8F8FF"
              selectionColor="#F8F8FF"
              style={styles.inputNum}
            />
          </View>
        </View>

        <View style={styles.btnOnly}>
          <Button
            onPress={() => navigation.navigate('contact')}
            style={styles.btn}
            mode="contained"
            labelStyle={styles.btnTxt}
            contentStyle={styles.innerBtn}>
            Continue
          </Button>
        </View>
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
  bgHeader: {
    backgroundColor: '#161616',
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#F8F8FF',
    marginTop: 30,
  },
  txtPara: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F8F8FF',
    marginTop: 15,
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
  },
  btnTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  innerBtn: {
    height: 50,
  },
  inputNum: {
    height: 58,

    fontSize: 14,
    fontWeight: '500',
    color: '#F8F8FF',
  },
  imgCall: {
    height: 18.2,
    width: 18.2,
    marginHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#F8F8FF',
    flexGrow: 2,
  },
  flagContainer: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#F8F8FF',
    height: 58,
    width: 80,
    marginRight: 10,
  },
  numbContainer: {
    flexDirection: 'row',
    marginTop: 45,
  },
  btnOnly: {
    justifyContent: 'flex-end',
    height: '55%',
  },
});
export default NumberScreen;
