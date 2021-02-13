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
const ShowProfile = ({navigation}) => {
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
export default ShowProfile;
