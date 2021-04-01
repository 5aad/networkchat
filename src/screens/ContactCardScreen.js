import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {Appbar, Button} from 'react-native-paper';
import {registerUser, setUser} from '../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {getContacts} from '../redux/actions/contacts';

const ContactCardScreen = (props) => {
  const {navigation} = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState(0);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleAddContact = async () => {
    // const phone = '+923462440717';
    setLoading(true);
    const {phone} = props.route.params;

    var data = {
      phone,
      email,
      firstName,
      lastName,
      dayOfBirth: day,
      monthOfBirth: month,
      location,
      yearOfBirth: year,
    };

    const response = await registerUser(data);
    if (response.status == 400) Alert.alert(response.data.data);
    else {
      dispatch(setUser(response.data));
      dispatch(getContacts());

      navigation.navigate('bottom', {routeName: 'Home'});
    }
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          titleStyle={{textAlign: 'center', marginRight:40}}
          title="Contact Card"
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.infoLbl}>
            This information will be displayed on your personal Contact Card.
            Anyone who has connected with you on Network can view this
            information. (that’s why we don’t ask for much)
          </Text>
          <View style={{marginTop: 10}}>
            <Text style={styles.lbl}>First Name</Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              style={styles.inputStyle}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>

          <View style={{marginTop: 15}}>
            <Text style={styles.lbl}>Last Name</Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              style={styles.inputStyle}
              onChangeText={(text) => setLastName(text)}
            />
          </View>

          <View style={{marginTop: 15}}>
            <Text style={styles.lbl}>Date of Birth</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholderTextColor="#161616"
                selectionColor="#161616"
                style={styles.inputStyles}
                placeholder="D-"
                onChangeText={(text) => setDay(text)}
              />
              <TextInput
                placeholderTextColor="#161616"
                selectionColor="#161616"
                style={[styles.inputStyle, {marginRight: 15}]}
                placeholder="M-"
                onChangeText={(text) => setMonth(text)}
              />
             
            </View>
          </View>

          <View style={{marginTop: 15}}>
            <Text style={styles.lbl}>Email (optional)</Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              style={styles.inputStyle}
              onChangeText={(e) => setEmail(e.toString())}
            />
          </View>



          <View style={{marginTop: 15}}>
            <Text style={styles.lbl}>Location (optional)</Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              style={styles.inputStyle}
              onChangeText={(text) => setLocation(text)}
            />
          </View>
          <Text style={styles.infoLbl}>
            We’ll only ever reveal what city you’re in, and never your specific
            location!
          </Text>
        </View>
      </ScrollView>
      <View style={styles.btnOnly}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Button
            onPress={handleAddContact}
            style={styles.btn}
            mode="contained"
            labelStyle={styles.btnTxt}
            contentStyle={styles.innerBtn}>
            Continue
          </Button>
        )}
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
  inputStyles: {
    height: 55,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#161616',
    backgroundColor: '#F8F8FF',
    flexGrow: 1,
    marginRight: 15,
    paddingHorizontal:10
  },
  inputStyle: {
    height: 55,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#161616',
    backgroundColor: '#F8F8FF',
    flexGrow: 1,
  },
  numbContainer: {
    flexDirection: 'row',
    marginTop: 45,
  },
  btnOnly: {
    justifyContent: 'flex-start',
    height: '10%',
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  lbl: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F8F8FF',
    marginBottom: 10,
    marginLeft: 5,
  },
  infoLbl: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginVertical:10
  },
});
export default ContactCardScreen;
