import React from 'react';
import {SafeAreaView, StyleSheet, View, TextInput, Image} from 'react-native';
import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
const VerifiyScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.innerContainer}>
        <Title style={styles.txtTitle}>Verification</Title>
        <Paragraph style={styles.txtPara}>
        Enter the 4-digit code sent to your phone.
        </Paragraph>

        <View style={styles.numbContainer}>

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
