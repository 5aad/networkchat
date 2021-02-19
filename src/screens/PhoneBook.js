import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Image} from 'react-native';
import {Title, Appbar, TextInput} from 'react-native-paper';
import images from '../api/images';
import Icon from 'react-native-vector-icons/Feather';
import ContactsList from '../components/ContactsList';

const PhoneBook = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>

     
      <View style={styles.lisContainer}>
        <ContactsList nav={navigation} />
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
  lisContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bgHeader: {
    backgroundColor: '#161616',
  },
  txtName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#F8F8FF',
    marginTop: 8,
  },

  imgAvatar: {
    height: 102,
    width: 102,
    borderRadius: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#F8F8FF',
    paddingHorizontal: 10,
    marginHorizontal:20
  },
  inputStyle: {
    height: 55,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#161616',
    backgroundColor:'#F8F8FF',
    flexGrow: 1,
  },
});
export default PhoneBook;
