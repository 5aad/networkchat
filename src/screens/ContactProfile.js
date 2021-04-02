import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {Title, Appbar, Button, Paragraph, Divider} from 'react-native-paper';
import images from '../api/images';
const ContactProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <ScrollView>
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
              <Image
                style={{width: 44, height: 44}}
                source={images.messagebg}
              />
              <Image
                style={{width: 44, height: 44, marginLeft: 10}}
                source={images.download}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Image style={styles.imgIcon} source={images.cake} />
              <Paragraph style={styles.txtPara}>1 February</Paragraph>
              <Image style={styles.imgIcon} source={images.horoscope} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Image style={styles.imgIcon} source={images.loc} />
              <Paragraph style={styles.txtPara}>London, UK</Paragraph>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={styles.imgIcon} source={images.email} />
              <Paragraph style={styles.txtPara}>
                jubayerkawsar97@gmail.com
              </Paragraph>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Image style={styles.imgIcon} source={images.call} />
              <Paragraph style={styles.txtPara}>897-654-3434</Paragraph>
            </View>
            <Divider style={{borderWidth: 0.5, borderColor: '#fff'}} />
            <View style={{marginVertical: 20}}>
              <Paragraph style={styles.txtPara}>
                Mutual connections: 13
              </Paragraph>
            </View>
            <View>
              <Paragraph style={styles.txtPara}>Shared Networks: 2</Paragraph>
            </View>
            <View style={{marginVertical: 20, flexDirection: 'row'}}>
              <Paragraph style={styles.txtPara}>Shared Media:</Paragraph>
              <Image source={images.photto} />
            </View>
            <View>
              <Paragraph style={styles.txtPara}>
                Connected on 02.07.2020
              </Paragraph>
            </View>
            <View style={{marginVertical: 20}}>
              <Paragraph style={styles.txtPara}>
                Connected in Miami, FL
              </Paragraph>
            </View>
          </View>
        </View>

        <View style={styles.btnOnly}>
          <Button
            onPress={() => navigation.navigate('networkData')}
            style={styles.btn}
            icon="delete-forever-outline"
            mode="contained"
            labelStyle={styles.btnTxt}
            contentStyle={styles.innerBtn}>
            Remove From my Network
          </Button>
          {/* <Button
          onPress={() => navigation.navigate('networkData')}
          style={styles.btn}
          mode="contained"
          labelStyle={styles.btnTxta}
          contentStyle={styles.innerBtn}>
          Add to my network
        </Button> */}
        </View>
      </ScrollView>
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
    marginRight: 20,
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
    marginTop: 15,
    marginBottom: 20,
  },
  btnTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FF2222',
  },
  btnTxta: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
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
