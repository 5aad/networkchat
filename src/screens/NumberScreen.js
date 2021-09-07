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
  ActivityIndicator,
  Alert,
} from 'react-native';
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
import _ from 'lodash';
import {registerPhone} from '../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {showNotification} from '../components/notification.android'

const NumberScreen = ({navigation}) => {
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        let temp = data.filter(
          (item) => item.callingCodes.length > 0 && item.callingCodes[0] !== '',
        );
        temp = temp.map((item) => {
          return {
            ...item,
            code: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          };
        });
        temp = _.orderBy(temp, 'code');
        setCode(temp[0]);
        setTest(temp);
      });
  }, []);
  const dispatch = useDispatch();
  const [test, setTest] = useState([]);
  const [selectedCountry, setCode] = useState('');
  const [number, setNumber] = useState();
  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const num = (item) => {
    setCode(item);
    setVisible(false);
  };

  const onSubmit = async () => {
    setLoading(true);
   
    if (!number) {
      Alert.alert('Please enter a number');
      return;
    } else {
      const result = await registerPhone(`+92${number}`);
      if (result.status == 400) {
        Alert.alert(result.data.data);
        navigation.navigate('contact');
      } else {
        Alert.alert('Verification code sent');
        setLoading(false);
        navigation.navigate('verify', {phone: `+92${number}`});
      }
    }
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
            <Image
              style={styles.imgCall}
              source={{uri: selectedCountry.flag}}
            />
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
                <View style={{width: 100}}>
                  <TouchableWithoutFeedback onPress={() => num(item.code)}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                      }}>
                      <Image
                        style={styles.imgCall}
                        source={{
                          uri: item.flag,
                        }}
                      />
                      <Text style={{fontSize: 16}}>{item.code}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Divider />
                </View>
              ))}
            </Menu>
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.imgCall} source={images.call} />
            <TextInput
              placeholder="3457690456"
              placeholderTextColor="#F8F8FF"
              selectionColor="#F8F8FF"
              style={styles.inputNum}
              value={number}
              onChangeText={(val) => setNumber(val)}
            />
          </View>
        </View>

        <View style={styles.btnOnly}>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <Button
              // onPress={() =>  showNotification("hello","welcome")}
              onPress={() => navigation.navigate('contact')}
              // onPress={() => onSubmit()}
              style={styles.btn}
              mode="contained"
              labelStyle={styles.btnTxt}
              contentStyle={styles.innerBtn}>
              Continue
            </Button>
          )}
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
    marginRight: 5,
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
