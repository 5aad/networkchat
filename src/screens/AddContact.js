import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Text,
} from 'react-native';
import {Title, Appbar, Button} from 'react-native-paper';
import ShowContact from '../components/ShowContact';
const AddContact = ({navigation}) => {
  const [key, setKey] = useState('add');
  const [bgColor, setBgColor] = useState('');
  const [clor, setClor] = useState('');
  const [bgColors, setBgColors] = useState('');
  const [clors, setClors] = useState('');
  useEffect(() => {
    if (key === 'add') {
      setBgColor('#161616');
      setClor('#F8F8FF');
    } else {
      setBgColor('#F8F8FF');
      setClor('#161616');
    }

    if (key === 'show') {
      setBgColors('#161616');
      setClors('#F8F8FF');
    } else {
      setBgColors('#F8F8FF');
      setClors('#161616');
    }
  }, [key]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          titleStyle={{textAlign: 'center', marginRight: 40}}
          title="Network"
        />
      </Appbar.Header>

      <View style={styles.innerContainer}>
        <View style={styles.tabBtn}>
          <Title
            onPress={() => setKey('add')}
            style={[
              styles.tabBtnBlank,
              {backgroundColor: `${bgColor}`, color: `${clor}`},
            ]}>
            Add Contact
          </Title>
          <Title
            onPress={() => setKey('show')}
            style={[
              styles.tabBtnBlank,
              {backgroundColor: `${bgColors}`, color: `${clors}`},
            ]}>
            Show Contact
          </Title>
        </View>

        {key === 'add' ? (
          <View>
            <View style={{marginTop: 10}}>
              <Text style={styles.lbl}>First Name</Text>
              <TextInput
                placeholderTextColor="#161616"
                selectionColor="#161616"
                style={styles.inputStyle}
              />
            </View>

            <View style={{marginTop: 15}}>
              <Text style={styles.lbl}>Last Name</Text>
              <TextInput
                placeholderTextColor="#161616"
                selectionColor="#161616"
                style={styles.inputStyle}
              />
            </View>

            <View style={styles.btnOnly}>
              <Button
                onPress={() => navigation.navigate('contactProfile')}
                style={styles.btn}
                mode="contained"
                labelStyle={styles.btnTxt}
                contentStyle={styles.innerBtn}>
                Submit
              </Button>
            </View>
          </View>
        ) : (
          <ShowContact nav={navigation} />
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
    flex: 1,
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
    height: '55%',
  },
  lbl: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F8F8FF',
    marginBottom: 10,
    marginLeft: 5,
  },
  tabBtn: {
    backgroundColor: '#F8F8FF',
    borderRadius: 12,
    height: 59,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  tabBtnLbl: {
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#161616',
    color: '#F8F8FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
  tabBtnBlank: {
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#F8F8FF',
    color: '#161616',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
});
export default AddContact;
