import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Image,
    Text,
  } from 'react-native';
  import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
const AddContact = ({navigation}) => {
    return (
        <SafeAreaView>
            <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          titleStyle={{textAlign: 'center', marginRight: 40}}
          title="Network"
        />
      </Appbar.Header>
        </SafeAreaView>
    )
}
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
      justifyContent: 'flex-end',
      height: '18%',
      paddingHorizontal: 30,
    },
    lbl: {
      fontSize: 16,
      fontWeight: '500',
      color: '#F8F8FF',
      marginBottom: 10,
      marginLeft: 5,
    },
  });
export default AddContact
