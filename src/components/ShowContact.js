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
  FlatList,
} from 'react-native';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Feather';
import images from '../api/images';
const ShowContact = ({nav}) => {
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
  // console.log(contacts[0].emailAddresses);
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search"
          // onChangeText={search}
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
            <View style={styles.itemContainer}>
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
                  <Text style={styles.txtName}>{item.displayName}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        />
        {/*<View style={styles.flexCol}>
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
        </View> */}
        {/* <FlatList
          data={contacts}
          renderItem={({item}) => (
            <View>
              <Text>{`${item.givenName}`}</Text>
            </View>
          )}
        /> */}
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
