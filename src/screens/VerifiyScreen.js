import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Image} from 'react-native';
import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
import CodePin from 'react-native-pin-code';
const VerifiyScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.innerContainer}>
        <Title style={styles.txtTitle}>Verification</Title>
        <Paragraph style={styles.txtPara}>
          Enter the 4-digit code sent to your phone.
        </Paragraph>

        <View style={styles.numbContainer}>
          <CodePin
            text=""
            ref={(ref) => (this.ref = ref)}
            keyboardType="numeric"
            obfuscation={false}
            autoFocusFirst
            checkPinCode={(code, callback) => callback(code === '12345')}
            number={5}
            containerStyle={{height: 80, backgroundColor:'#161616'}}
            textStyle={{marginTop: 0, backgroundColor:'#161616'}}
            containerPinStyle={{
              height: 60,
              marginTop: 0,
              backgroundColor:'#161616'
            }}
            pinStyle={{
              marginLeft: 0,
              fontSize: 30,
              backgroundColor: '#161616',
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderColor:'#F8F8FF',
              color: '#F8F8FF',
            }}
            success={() => console.log('hurray!')}
          />
        </View>

        <View style={styles.btnOnly}>
          <Button
            onPress={() => navigation.navigate('ccard')}
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
  numbContainer: {
    flexDirection: 'row',
    marginTop: 45,
  },
  btnOnly: {
    justifyContent: 'flex-end',
    height: '55%',
  },
});
export default VerifiyScreen;
