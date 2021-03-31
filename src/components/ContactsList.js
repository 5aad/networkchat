import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {List, Avatar, TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Contacts from 'react-native-contacts';
import {addContact} from '../redux/actions/contacts';
import {useDispatch} from 'react-redux';

var getInitials = function (string) {
  var names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

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
          label={getInitials(nn.displayName)}
        />
      )}
    </>
  );
};
const ContactList = ({nav, Data}) => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

  const handleAddContact = async () => {
    if (selected.length > 0) {
      setLoading(true);

      for (let i = 0; i < selected.length; i++) {
        await dispatch(
          addContact({
            firstName: selected[i].givenName,
            phone: selected[i].phoneNumbers[0].number,
          }),
        );
      }
      setLoading(false);
      Alert.alert('Contacts Invited Successfully');
    } else Alert.alert('Please select contacts to invite.');
  };
  const renderItem = ({item, index}) => (
    <View style={[styles.itemBorder]} key={index}>
      <List.Item
        onPress={() => {
          if (selected.find((ite) => ite.recordID == item.recordID))
            setSelected(
              selected.filter((ite) => ite.recordID !== item.recordID),
            );
          else setSelected([...selected, item]);
        }}
        titleStyle={styles.txtName}
        titleNumberOfLines={1}
        title={item.displayName}
        left={(props) => <Thumb nn={item} props={props} />}
        right={(props) =>
          selected.find((ite) => ite.recordID == item.recordID) ? (
            <List.Icon props={props} icon="check" color="#F8F8FF" />
          ) : (
            <List.Icon props={props} icon="chevron-right" color="#F8F8FF" />
          )
        }
      />
    </View>
  );
  console.log(contacts);
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
            Submit
          </Button>
        )}
      </View>
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
  btnOnly: {
    justifyContent: 'flex-end',
    height: '15%',
    marginBottom: 25,
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
