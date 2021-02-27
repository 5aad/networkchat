import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Appbar, IconButton, Menu, Divider} from 'react-native-paper';
import images from '../api/images';
import MessageList from '../components/MessageList';
const Data = [
  {
    id: '1',
    avatar: images.avatar1,
    name: 'Stive Smith',
    message: 'Whats app..?',
    date: 'Jan 21',
    receipt: 'true',
  },
  {
    id: '2',
    avatar: images.avatar2,
    name: 'Stive Smith',
    message: 'Whats app..?',
    date: 'Jan 21',
    receipt: 'true',
  },
  {
    id: '3',
    avatar: images.avatar3,
    name: 'Stive Smith',
    message: 'Whats app..?',
    date: 'Jan 21',
    receipt: 'false',
  },
  {
    id: '4',
    avatar: images.avatar4,
    name: 'Stive Smith',
    message: 'Whats app..?',
    date: 'Jan 21',
    receipt: 'false',
  },
  {
    id: '5',
    avatar: images.avatar5,
    name: 'Stive Smith',
    message: 'Whats app..?',
    date: 'Jan 21',
    receipt: 'true',
  },
  {
    id: '6',
    avatar: images.avatar2,
    name: 'Stive Smith',
    message: 'Whats app..?',
    date: 'Jan 21',
    receipt: 'false',
  },
  {
    id: '7',
    avatar: images.avatar3,
    name: 'Stive Smith',
    message: 'Whats app..?',
    date: 'Jan 21',
    receipt: 'true',
  },
];
const MessagesScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content titleStyle={{textAlign: 'center'}} title="Messages" />
        <Appbar.Action icon="magnify" onPress={() => console.log()} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="dots-vertical"
              color="#fff"
              size={24}
              onPress={openMenu}
            />
          }>
          <Menu.Item onPress={() => {}} title="Create Group" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Join Group" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Invite Group" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Manage Group" />
        </Menu>
      </Appbar.Header>
      <View style={styles.innerContainer}>
        <MessageList nav={navigation} Data={Data} />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('chat')}>
          <View style={styles.fab}>
            <Image style={styles.imgMsgIcon} source={images.messageIcon} />
          </View>
        </TouchableWithoutFeedback>
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
  bgHeader: {
    backgroundColor: '#161616',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F8F8FF',
    position: 'absolute',
    bottom: 20,
    right: 10,
    paddingVertical: 13,
    paddingHorizontal: 13,
  },
  imgMsgIcon: {
    height: 34,
    width: 34,
  },
});
export default MessagesScreen;
