import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Appbar, IconButton, Menu, Divider, Title} from 'react-native-paper';
import images from '../api/images';
import MessageList from '../components/MessageList';
import Networks from '../components/Networks';
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
  const [key, setKey] = useState('add');
  const [bgColor, setBgColor] = useState('#161616');
  const [clor, setClor] = useState('#F8F8FF');
  const [bgColors, setBgColors] = useState('#F8F8FF');
  const [clors, setClors] = useState('#161616');
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  useEffect(() => {
    if (key === 'add') {
      setBgColor('#161616');
      setClor('#F8F8FF');
    } else {
      setBgColor('#F8F8FF');
      setClor('#161616');
    }

    if (key === 'show') {
      setBgColors('#161616');
      setClors('#F8F8FF');
    } else {
      setBgColors('#F8F8FF');
      setClors('#161616');
    }
  }, [key]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content titleStyle={{textAlign: 'center'}} title="Messages" />
        <Appbar.Action icon="bell-outline" onPress={() => console.log()} />
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
        <View style={styles.tabBtn}>
          <Title
            onPress={() => setKey('add')}
            style={[
              styles.tabBtnBlank,
              {backgroundColor: `${bgColor}`, color: `${clor}`},
            ]}>
            All Chat
          </Title>
          <Title
            onPress={() => setKey('show')}
            style={[
              styles.tabBtnBlank,
              {backgroundColor: `${bgColors}`, color: `${clors}`},
            ]}>
            Networks
          </Title>
        </View>
        {key === 'add' ? <MessageList nav={navigation} Data={Data} /> : <Networks/>}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('chat')}>
          <View style={styles.fab}>
            <Image style={styles.imgMsgIcon} source={images.new} />
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
  tabBtn: {
    backgroundColor: '#F8F8FF',
    borderRadius: 12,
    height: 59,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  tabBtnBlank: {
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#F8F8FF',
    color: '#161616',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 18,
  },
});
export default MessagesScreen;
