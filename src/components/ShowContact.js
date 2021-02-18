import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Feather';
import images from '../api/images';
const ShowContact = ({nav}) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
      });
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = () => {
    Contacts.getAll((err, contacts) => {
      contacts.sort(
        (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
      );
      console.log('contacts -> ', contacts);
      if (err === 'denied') {
        alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      } else {
        setContacts(contacts);
        console.log('contacts', contacts);
      }
    });
  };

  const search = (text) => {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    if (text === '' || text === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text, (err, contacts) => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    } else {
      Contacts.getContactsMatchingString(text, (err, contacts) => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
        console.log('contacts', contacts);
      });
    }
  };

  const openContact = (contact) => {
    console.log(JSON.stringify(contact));
    Contacts.openExistingContact(contact, () => {});
  };
  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search"
          onChangeText={search}
          placeholderTextColor="#656565"
          selectionColor="#161616"
          style={styles.inputStyle}
        />
        <Icon name="search" size={24} color="#656565" />
      </View>

      

      <View style={styles.flexRows}>
        <TouchableWithoutFeedback onPress={() => nav.navigate('sprofile')}>
          <View style={styles.flexCol}>
            <Image style={styles.imgAvatar} source={images.avatar1} />
            <Text style={styles.txtName}>Jacky</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar2} />
          <Text style={styles.txtName}>Stive</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar3} />
          <Text style={styles.txtName}>Smith</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar1} />
          <Text style={styles.txtName}>Jacky</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar2} />
          <Text style={styles.txtName}>Stive</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar3} />
          <Text style={styles.txtName}>Smith</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar1} />
          <Text style={styles.txtName}>Jacky</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar2} />
          <Text style={styles.txtName}>Stive</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar3} />
          <Text style={styles.txtName}>Smith</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar1} />
          <Text style={styles.txtName}>Jacky</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar2} />
          <Text style={styles.txtName}>Stive</Text>
        </View>
        <View style={styles.flexCol}>
          <Image style={styles.imgAvatar} source={images.avatar3} />
          <Text style={styles.txtName}>Smith</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  txtName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F8F8FF',
    marginTop: 8,
  },
  inputStyle: {
    height: 55,
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
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
    paddingHorizontal: 10,
  },
  numbContainer: {
    flexDirection: 'row',
    marginTop: 45,
  },
  flexCol: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
    width: 100,
  },
  flexRows: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  imgAvatar: {
    height: 75,
    width: 75,
    borderRadius: 12,
    marginTop: 15,
  },
});
export default ShowContact;
