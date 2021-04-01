import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
import images from '../api/images';
const NetworkProfile = ({navigation}) => {
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');

  const launchImageLibrarys = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  };

  function renderFileUri() {
    if (fileUri) {
      return (
        <TouchableWithoutFeedback onPress={launchImageLibrarys}>
          <View style={{position: 'relative'}}>
            <Image style={styles.imgAvatar} source={{uri: fileUri}} />
            <Image style={styles.imgCamera} source={images.camerabg} />
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <TouchableWithoutFeedback onPress={launchImageLibrarys}>
          <View style={{position: 'relative'}}>
            <Image style={styles.imgAvatar} source={images.avatar2} />
            <Image style={styles.imgCamera} source={images.camerabg} />
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Action
            style={{width: 15, marginLeft: '63%'}}
            icon="bell-outline"
            onPress={() => console.log()}
          />
          <Appbar.Content title="Edit" />
      </Appbar.Header>

      <View style={styles.innerContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {renderFileUri()}
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
          <Button
          onPress={() => navigation.navigate('Account')}
            style={styles.btn}
            mode="contained"
            labelStyle={styles.btnTxt}
            contentStyle={styles.innerBtn}>
            Settings
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
  btn: {
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
    marginVertical:20
  },
  btnTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  innerBtn: {
    height: 50,
  },
});
export default NetworkProfile;
