import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Feather';
import images from '../api/images';
import {useSelector} from 'react-redux';
const ShowContact = ({nav}) => {
  const prevCons = useSelector((state) => state.contact.contacts);
  const [contacts, setContacts] = useState(prevCons);

  const searchContacts = (searchText) => {
    if (searchText) {
      let temp = contacts.filter(
        (item) =>
          item.phone.includes(searchText) ||
          item.firstName.includes(searchText),
      );
      setContacts(temp);
    } else setContacts(prevCons);
  };
  return (
    <View>
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

      <View style={styles.flexRows}>
        <FlatGrid
          itemDimension={100}
          data={contacts}
          // keyExtractor={({id}, index) => id}
          style={styles.gridView}
          spacing={2}
          renderItem={({id, item}) => (
            <View style={styles.itemContainer} key={id}>
              <TouchableWithoutFeedback
                onPress={() =>
                  nav.navigate('sprofile', {
                    recordID: item.recordID,
                    name: item.displayName,
                    number: item.phoneNumbers[0].number,
                    email:
                      item.emailAddresses === null
                        ? 'undefined'
                        : item.emailAddresses,
                    thumnailBool: item.hasThumbnail,
                    thumbnailPath: item.thumbnailPath,
                  })
                }>
                <View style={styles.flexCol}>
                  {item.hasThumbnail === true ? (
                    <Image
                      style={styles.imgAvatar}
                      source={{uri: item.thumbnailPath}}
                    />
                  ) : (
                    <Image style={styles.imgAvatar} source={images.avatar1} />
                  )}
                  <Text style={styles.txtName}>{item.firstName}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F8F8FF',
    marginTop: 8,
    textAlign: 'center',
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
  gridView: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  imgAvatar: {
    height: 75,
    width: 75,
    borderRadius: 12,
    marginTop: 15,
  },
});
export default ShowContact;
