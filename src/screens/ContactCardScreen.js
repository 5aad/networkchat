import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {Appbar, Button} from 'react-native-paper';
const ContactCardScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [location, setLocation] = useState('');
  const handleAddContact = () => {
    console.log('sss', day);
    var newPerson = {
      emailAddresses: [
        {
          label: 'work',
          email: email,
        },
      ],
      displayName: `${firstName} ${lastName}`,
      birthday: {month: month, day: day},
    };

    Contacts.openContactForm(newPerson)
      .then((contact) => {
        // contact has been saved
        console.log(contact);
      })
      .then(() => {
        navigation.navigate('bottom',{routeName:'Home'});
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          titleStyle={{textAlign: 'center', marginRight: 40}}
          title="Contact Card"
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.innerContainer}>
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
            <Text style={styles.lbl}>Email</Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              style={styles.inputStyle}
              onChangeText={(e) => setEmail(e.toString())}
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
                style={styles.inputStyle}
                placeholder="M-"
                onChangeText={(text) => setMonth(text)}
              />
            </View>
          </View>

          <View style={{marginTop: 15}}>
            <Text style={styles.lbl}>Location</Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              style={styles.inputStyle}
              onChangeText={(text) => setLocation(text)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnOnly}>
        <Button
          onPress={handleAddContact}
          style={styles.btn}
          mode="contained"
          labelStyle={styles.btnTxt}
          contentStyle={styles.innerBtn}>
          Continue
        </Button>
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
});
export default ContactCardScreen;
