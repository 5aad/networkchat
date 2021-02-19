import React, {useEffect, useState} from 'react';
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
import Contacts from 'react-native-contacts';
const ShowProfile = ({navigation, route}) => {
  const record_id = route.params.recordID;
  const displayName = route.params.name;
  const emailAddress = route.params.email;
  const phoneNumber = route.params.number;
  const hasThumbnail = route.params.thumnailBool;
  const thumbnailPath = route.params.thumbnailPath;
  const [contactEmail, setContactEmail] = useState('');

  useEffect(() => {
    if (emailAddress.toString() === '') {
      setContactEmail('undefined');
    } else {
      setContactEmail(emailAddress[0].email);
    }
  }, []);

  // useEffect(() => {
  //   console.log(record_id);
  //   Contacts.getContactById(`${record_id}`)
  //     .then((contactd) => {
  //       setContactProfile(contactd);
  //     })
  //     .catch((e) => {
  //       console.log('saad masla arha hai', e);
  //     });
  // }, []);
  // console.log('yoyo', contactProfile);
  // console.log(record_id);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

      <View style={styles.innerContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {hasThumbnail === true ? (
            <Image style={styles.imgAvatar} source={{uri: thumbnailPath}} />
          ) : (
            <Image style={styles.imgAvatar} source={images.avatar1} />
          )}
          <Title style={styles.txtName}>{displayName}</Title>
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
              marginTop: 30,
            }}>
            <Image style={styles.imgIcon} source={images.loc} />
            <Paragraph style={styles.txtPara}>London, UK</Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image style={styles.imgIcon} source={images.email} />
            <Paragraph style={styles.txtPara}>{contactEmail}</Paragraph>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image style={styles.imgIcon} source={images.call} />
            <Paragraph style={styles.txtPara}>{phoneNumber}</Paragraph>
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
