import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  StatusBar,
  PermissionsAndroid,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {SvgCssUri} from 'react-native-svg';
import {
  Title,
  Appbar,
  Button,
  Paragraph,
  IconButton,
  Menu,
  Divider,
} from 'react-native-paper';
import images from '../api/images';
import Contacts from 'react-native-contacts';
import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
const data = [
  {
    value: '1',
    label: '+1',
    avatarSource: {
      uri: 'https://www.countryflags.io/be/flat/64.png',
    },
  },
  {
    value: '2',
    label: '+2',
    avatarSource: {
      uri: 'https://www.countryflags.io/us/flat/64.png',
    },
  },
  {
    value: '3',
    label: '+3',
    avatarSource: {
      uri: 'https://restcountries.eu/data/afg.svg',
    },
  },
];

const NumberScreen = ({navigation}) => {
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((json) => {
        // console.log(json[4].flag);
        setTest(json);
      });
  }, []);
  const [test, setTest] = useState([]);
  const [valueSS, setValueSS] = useState('');
  const [imgFlag, setImgFlag] = useState(
    'https://www.countryflags.io/us/flat/64.png',
  );

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const num = (alpha, code) => {
    setImgFlag(`https://www.countryflags.io/${alpha}/flat/64.png`);
    setValueSS(`+${code}`);
    setVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}></Appbar.Header>
      <View style={styles.innerContainer}>
        <Title style={styles.txtTitle}>Welcome</Title>
        <Paragraph style={styles.txtPara}>
          Enter your phone number to continue to Network, and enjoy messaging
          and calling with your Network.
        </Paragraph>

        <View style={styles.numbContainer}>
          <View style={styles.flagContainer}>
            <Image style={styles.imgCall} source={{uri: `${imgFlag}`}} />
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <IconButton
                  icon="arrow-down-drop-circle-outline"
                  color="#fff"
                  size={18}
                  onPress={openMenu}
                />
              }>
              {test.map((item) => (
                <>
                  <TouchableWithoutFeedback
                    onPress={() => num(item.alpha2Code, item.callingCodes)}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                      }}>
                      <Image
                        style={styles.imgCall}
                        source={{
                          uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
                        }}
                      />
                      <Text style={{fontSize: 16}}>{item.callingCodes}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Divider />
                </>
              ))}
            </Menu>
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.imgCall} source={images.call} />
            <TextInput
              placeholder="+13457690456"
              placeholderTextColor="#F8F8FF"
              selectionColor="#F8F8FF"
              style={styles.inputNum}
              value={valueSS}
            />
          </View>
        </View>
        {/* <Title style={styles.txtOr}>OR</Title>
        <Button
        onPress={() => navigation.navigate('pbook',{routeName:"Home"})}
          style={styles.btn}
          mode="contained"
          labelStyle={styles.btnTxt}
          contentStyle={styles.innerBtn}>
          Add from Contacts
        </Button> */}
        <View style={styles.btnOnly}>
          <Button
            onPress={() => navigation.navigate('contact')}
            style={styles.btn}
            mode="contained"
            labelStyle={styles.btnTxt}
            contentStyle={styles.innerBtn}>
            Continue
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  txtOr: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#F8F8FF',
    marginVertical: 10,
  },
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
  txtTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#F8F8FF',
    marginTop: 30,
  },
  txtPara: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F8F8FF',
    marginTop: 15,
  },
  btn: {
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
  },
  btnTxt: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  innerBtn: {
    height: 50,
  },
  inputNum: {
    height: 58,

    fontSize: 14,
    fontWeight: '500',
    color: '#F8F8FF',
  },
  imgCall: {
    height: 18.2,
    width: 18.2,
    marginLeft: 15,
    marginRight:5
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#F8F8FF',
    flexGrow: 2,
  },
  flagContainer: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#F8F8FF',
    height: 58,
    width: 80,
    marginRight: 10,
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  numbContainer: {
    flexDirection: 'row',
    marginTop: 45,
  },
  btnOnly: {
    justifyContent: 'flex-end',
    height: '56%',
  },
});
export default NumberScreen;
