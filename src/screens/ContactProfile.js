import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Text,
  Image,
} from 'react-native';
import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
import images from '../api/images';
const ContactProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

      <View style={styles.innerContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.imgAvatar} source={images.avatar1} />
          <Title style={styles.txtName}>Jasica Loren</Title>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image style={{width: 44, height: 44}} source={images.video} />
            <Image
              style={{width: 44, height: 44, marginHorizontal: 10}}
              source={images.callbg}
            />
            <Image style={{width: 44, height: 44}} source={images.messagebg} />
          </View>
        </View>
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Image style={styles.imgIcon} source={images.cake} />
            <Paragraph style={styles.txtPara}>1 February</Paragraph>
            <Image style={styles.imgIcon} source={images.horoscope} />
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Image style={styles.imgIcon} source={images.loc} />
            <Paragraph style={styles.txtPara}>London, UK</Paragraph>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Image style={styles.imgIcon} source={images.email} />
            <Paragraph style={styles.txtPara}>
              jubayerkawsar97@gmail.com
            </Paragraph>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <Image style={styles.imgIcon} source={images.call} />
            <Paragraph style={styles.txtPara}>897-654-3434</Paragraph>
          </View>
          <View style={{marginTop: 30}}>
            <Paragraph style={styles.txtPara}>
              Connected on 02.07.2020
            </Paragraph>
          </View>
        </View>
      </View>

      <View style={styles.btnOnly}>
        <Button
          onPress={() => navigation.navigate('message')}
          style={styles.btn}
          icon="block-helper"
          mode="contained"
          labelStyle={styles.btnTxt}
          contentStyle={styles.innerBtn}>
          Block This User
        </Button>
        <Button
          onPress={() => navigation.navigate('networkData')}
          style={styles.btn}
          icon="delete-forever-outline"
          mode="contained"
          labelStyle={styles.btnTxt}
          contentStyle={styles.innerBtn}>
          Delete Chat History
        </Button>
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
  txtName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F8F8FF',
    marginTop: 8,
  },
  txtPara: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F8F8FF',
    flexGrow: 2,
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
    marginTop: 15,
  },
  btnTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FF2222',
  },
  innerBtn: {
    height: 50,
  },
  btnOnly: {
    justifyContent: 'flex-end',
    flex: 0.9,
    paddingHorizontal: 30,
  },
  imgAvatar: {
    height: 102,
    width: 102,
    borderRadius: 12,
  },
  imgIcon: {
    height: 21,
    width: 22,
    marginRight: 8,
  },
});
export default ContactProfile;
