// Import react
import React, {useState, useEffect} from 'react';
import Slider from 'react-native-slider';
// Import react-native components
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  PermissionsAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// Import react-native-svg
// from 'https://github.com/react-native-community/react-native-svg'
import Svg, {Path} from 'react-native-svg';

// Import react-native-size-matters
// from 'https://github.com/nirsky/react-native-size-matters'
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';

// Props info list
// 1. mine (bool) => renders blue bubble on right
// 2. text (string) => renders text message
// 3. image (image file) => renders image inside bubble

// Declare component
const audioRecorderPlayer = new AudioRecorderPlayer();
const MessageBubble = (props) => {


  async function perm() {
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
  }

  useEffect(() => {
    perm();
  }, []);
  const [audioBtn, setAudioBtn] = useState(false);
  const [duration, setDuration] = useState(0);
  const [positions, setPosition] = useState(0);
  async function onStartPlay() {
    console.log('onStartPlay');
    // const path = Platform.select({
    //   ios: 'hello.m4a',
    //   android: '/sdcard/music/hello.mp3',
    // });
    const msg = await audioRecorderPlayer.startPlayer(
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    );
    audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    setAudioBtn(true);
    audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.current_position === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
        setAudioBtn(false);
      }
      // console.log('position' + e.current_position);
      // console.log('duration ', e.duration);
      setPosition(e.current_position);
      setDuration(e.duration);
      // console.log(
      //   'Pos' + audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      // );
      // console.log('Dur' + audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    });
  }

  async function onPausePlay() {
    await audioRecorderPlayer.pausePlayer();
    setAudioBtn(false);
  }

  async function updatePosition(params) {
    console.log(params)
    await audioRecorderPlayer.seekToPlayer(params);
  }
  return (
    <View style={[styles.message, props.mine ? styles.mine : styles.not_mine]}>
      <View
        style={[
          styles.cloud,
          {
            backgroundColor: props.mine ? '#f8f8ff' : '#949494',
          },
        ]}>
        {props.image ? (
          <Image
            style={{alignSelf: props.mine ? 'flex-start' : 'flex-end'}}
            borderRadius={10}
            source={props.image}
          />
        ) : null}
        {props.audio ? (
          <>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              {audioBtn === false ? (
                <TouchableWithoutFeedback onPress={onStartPlay}>
                  <View
                    style={{
                      backgroundColor: '#2e2e2e',
                      borderRadius: 22,
                      width: 30,
                      height: 30,
                      position: 'relative',
                      marginRight: 10,
                    }}>
                    <Icon
                      animateTransitions={true}
                      size={12}
                      name="play"
                      color="#fff"
                      style={{position: 'absolute', left: 12, top: 9}}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback onPress={onPausePlay}>
                  <View
                    style={{
                      backgroundColor: '#2e2e2e',
                      borderRadius: 22,
                      width: 30,
                      height: 30,
                      position: 'relative',
                      marginRight: 10,
                    }}>
                    <Icon
                      animateTransitions={true}
                      size={12}
                      name="pause"
                      color="#fff"
                      style={{position: 'absolute', left: 10, top: 9}}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
              <Slider
                minimumTrackTintColor="#73F909"
                style={{width: 220}}
                value={positions}
                maximumValue={duration}
                useNativeDriver={true}
                onValueChange={(value) => updatePosition(value)}
              />
            </View>
          </>
        ) : null}
        {props.text ? (
          <Text
            style={[
              styles.text,
              {
                color: props.mine ? '#656565' : 'white',
              },
            ]}>
            {props.text}
          </Text>
        ) : null}
        <View
          style={[
            styles.arrow_container,
            props.mine
              ? styles.arrow_left_container
              : styles.arrow_right_container,
          ]}>
          <Svg
            style={props.mine ? styles.arrow_left : styles.arrow_right}
            width={moderateScale(15.5, 0.6)}
            height={moderateScale(17.5, 0.6)}
            viewBox="32.484 17.5 15.515 17.5"
            enable-background="new 32.485 17.5 15.515 17.5">
            <Path
              d={
                props.mine
                  ? 'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z'
                  : 'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'
              }
              fill={props.mine ? '#f8f8ff' : '#949494'}
              x="0"
              y="0"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    marginVertical: moderateScale(7, 2),
  },
  mine: {
    marginLeft: 20,
  },
  not_mine: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  cloud: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
  text: {
    paddingTop: 3,
    fontSize: 14,
    lineHeight: 22,
  },
  arrow_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrow_left_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  arrow_right_container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  arrow_left: {
    left: moderateScale(-6, 0.5),
  },
  arrow_right: {
    right: moderateScale(-6, 0.5),
  },
});
