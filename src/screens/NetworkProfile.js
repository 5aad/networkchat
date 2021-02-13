import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
import images from '../api/images';
const NetworkProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          titleStyle={{textAlign: 'center', width: '180%'}}
          title="Network Profile"
        />
        <Appbar.Content
          titleStyle={{alignItems: 'flex-end', marginLeft: '70%'}}
          title="Edit"
        />
      </Appbar.Header>

      <View style={styles.innerContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{position: 'relative'}}>
            <Image style={styles.imgAvatar} source={images.avatar2} />
            <Image style={styles.imgCamera} source={images.camerabg} />
          </View>
          <Title style={styles.txtName}>Jubayer Ahmed</Title>
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
  imgCamera: {
    position: 'absolute',
    bottom: 10,
    right: -20,
  },
});
export default NetworkProfile;
