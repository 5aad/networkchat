import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {List, Avatar, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Contacts from 'react-native-contacts';

const Thumb = ({nn, props}) => {
  return (
    <>
      {nn.hasThumbnail === true ? (
        <Avatar.Image
          props={props}
          size={34}
          source={{uri: nn.thumbnailPath}}
          style={{marginTop: 12, marginRight: 10}}
        />
      ) : (
        <Avatar.Text
          style={{marginTop: 12, marginRight: 10}}
          props={props}
          size={34}
          label={nn.displayName}
        />
      )}
    </>
  );
};
const ContactList = ({nav, Data}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      loadContacts();
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(() => {
        loadContacts();
      });
    }
  }, []);
  const loadContacts = () => {
    Contacts.getAll()
      .then((contactd) => {
        setContacts(contactd);
      })
      .catch((e) => {
        console.log('Error', e);
      });

    Contacts.checkPermission();
  };

  const searchContacts = (searchText) => {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (searchText === '' || searchText === null) {
      loadContacts();
    } else if (phoneNumberRegex.test(searchText)) {
      Contacts.getContactsByPhoneNumber(searchText).then((contacts) => {
        setContacts(contacts);
      });
    } else if (emailAddressRegex.test(searchText)) {
      Contacts.getContactsByEmailAddress(searchText).then((contacts) => {
        setContacts(contacts);
      });
    } else {
      Contacts.getContactsMatchingString(searchText).then((contacts) => {
        setContacts(contacts);
      });
    }
  };
  const renderItem = ({item, index}) => (
    <View style={styles.itemBorder} key={index}>
      <List.Item
        onPress={() => console.log('ppp')}
        titleStyle={styles.txtName}
        titleNumberOfLines={1}
        title={item.displayName}
        left={(props) => <Thumb nn={item} props={props} />}
        right={(props) => (
          <List.Icon props={props} icon="chevron-right" color="#F8F8FF" />
        )}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search"
          onChangeText={(searchText) => searchContacts(searchText)}
          placeholderTextColor="#656565"
          selectionColor="#161616"
          style={styles.inputStyle}
        />
        <Icon name="search" size={24} color="#656565" />
      </View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderColor: 'rgba(248, 248, 255, 0.55)',
  },

  txtName: {
    color: '#F8F8FF',
    fontSize: 18,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
    paddingHorizontal: 10,
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
});
export default ContactList;
