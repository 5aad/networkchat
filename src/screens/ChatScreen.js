import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
import MessageBubble from '../components/MessageBubble';
const ChatScreen = ({navigation}) => {
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
          <MessageBubble mine text="Hello Juin ! What’s up ? Are you in to  available to connects with the world one of largest" />
          <MessageBubble mine image={images.wel1} />
          <MessageBubble  image={images.wel2} />
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type here"
          placeholderTextColor="#656565"
          selectionColor="#161616"
          style={styles.inputStyle}
          keyboardAppearance="dark"
        />
        <Image style={styles.iconCamera} source={images.camera} />
        <Image style={styles.iconClip} source={images.clip} />
        <Image style={styles.iconMic} source={images.mic} />
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
