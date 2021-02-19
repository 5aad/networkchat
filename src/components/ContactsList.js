import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {List, Avatar, Divider} from 'react-native-paper';
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
      Contacts.getAll()
        .then((contactd) => {
          setContacts(contactd);
        })
        .catch((e) => {
          console.log('saad masla arha hai', e);
        });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(() => {
        Contacts.getAll()
          .then((contactd) => {
            setContacts(contactd);
          })
          .catch((e) => {
            console.log('Error', e);
          });
      });
    }
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemBorder}>
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
});
export default ContactList;
