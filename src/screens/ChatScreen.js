import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  PermissionsAndroid,
  Platform,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
import MessageBubble from '../components/MessageBubble';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const audioRecorderPlayer = new AudioRecorderPlayer();
const ChatScreen = ({navigation}) => {
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const launchCameras = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
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
    }
  };

  const launchImageLibrarys = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
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
    }
  };

  const [micBtn, setMicBtn] = useState(false);
  const onStartRecord = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permissions for write access',
            message: 'Give permission to your storage to write a file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the storage');
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Permissions for write access',
            message: 'Give permission to your storage to write a file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    const path = Platform.select({
      ios: 'hello.m4a',
      android: 'sdcard/hello.mp4',
    });

    const uri = await audioRecorderPlayer.startRecorder(path);
    audioRecorderPlayer.addRecordBackListener((e) => {
      console.log(e.current_position);
      console.log(audioRecorderPlayer.mmssss(Math.floor(e.current_position)));
      setMicBtn(true)
    });
    console.log(`uri: ${uri}`);

  };
  const onStopRecord = async () => {
    const audio = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    console.log(audio)
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F8FF" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Image style={styles.imgAvatar} source={images.avatar1} />
        <Appbar.Content
          onPress={() => navigation.navigate('contactProfile')}
          title="Jesica Loren"
          subtitle={'Last seen yesterday'}
        />
        <Appbar.Action icon="video" onPress={() => console.log()} />
        <Appbar.Action
          style={{width: 20}}
          icon="phone"
          onPress={() => console.log()}
        />
        <Appbar.Action
          style={{width: 15}}
          icon="dots-vertical"
          onPress={() => console.log()}
        />
      </Appbar.Header>

      <ScrollView>
        <View style={styles.chatContainer}>
          <MessageBubble text="Hello Syed! What’s up ? Are you in to  available to connects with the world one of largest adbanching amazing connector ? Hello Syed! What’s up ? Are you in to  available to connects with the world one of largest" />
          <MessageBubble
            mine
            text="Hello Juin ! What’s up ? Are you in to  available to connects with the world one of largest"
          />
          <MessageBubble mine image={images.wel1} />
          <MessageBubble image={images.wel2} />
          <MessageBubble mine audio />
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here"
          placeholderTextColor="#656565"
          selectionColor="#161616"
          style={styles.inputStyle}
          keyboardAppearance="dark"
          multiline
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={launchCameras}>
            <Image style={styles.iconCamera} source={images.camera} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={launchImageLibrarys}>
            <Image style={styles.iconClip} source={images.clip} />
          </TouchableWithoutFeedback>
          {micBtn === false ? (
            <TouchableWithoutFeedback onPress={onStartRecord}>
              <Image style={styles.iconMic} source={images.mic} />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={onStopRecord}>
              <Image style={styles.iconMic} source={images.clip} />
            </TouchableWithoutFeedback>
          )}
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
    flex: 1,
    paddingHorizontal: 20,
  },
  chatContainer: {
    flex: 1,
  },
  bgHeader: {
    backgroundColor: '#F8F8FF',
  },
  imgAvatar: {
    height: 45,
    width: 45,
    borderRadius: 12,
  },
  inputStyle: {
    height: 63,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#161616',
    flexGrow: 1,
    width: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#F8F8FF',
    paddingHorizontal: 10,
  },
  iconCamera: {
    width: 32,
    height: 26,
    marginHorizontal: 8,
  },
  iconClip: {
    width: 29,
    height: 31.6,
    marginHorizontal: 8,
  },
  iconMic: {
    width: 52,
    height: 52,
    marginLeft: 8,
  },
});
export default ChatScreen;
