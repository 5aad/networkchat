import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {Title, Appbar, Button, Paragraph} from 'react-native-paper';
import images from '../api/images';
const NetworkData = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161616" />
      <Appbar.Header style={styles.bgHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          titleStyle={{textAlign: 'center', marginRight: 40}}
          title="Network Data"
        />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={{marginTop: 10}}>
            <Text style={styles.lbl}>Number of connections </Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              placeholder="870 People"
              style={styles.inputStyle}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.lbl}>Number of messages sent </Text>
            <TextInput
              placeholderTextColor="#161616"
              selectionColor="#161616"
              placeholder="10000"
              style={styles.inputStyle}
            />
          </View>

          <Text style={styles.lbl}>Who you are most engaged with </Text>

          <View style={styles.flexRows}>
            <View style={styles.flexCol}>
              <Image style={styles.imgAvatar} source={images.avatar1} />
              <Text style={styles.txtName}>Jacky</Text>
            </View>
            <View style={styles.flexCol}>
              <Image style={styles.imgAvatar} source={images.avatar1} />
              <Text style={styles.txtName}>Stive</Text>
            </View>
            <View style={styles.flexCol}>
              <Image style={styles.imgAvatar} source={images.avatar1} />
              <Text style={styles.txtName}>Smith</Text>
            </View>
          </View>

          <Text style={styles.lbl}>Locations with the most connections </Text>

          <View style={styles.flexRow}>
            <View style={styles.flexCol}>
              <Text style={styles.lbl}>New York</Text>
              <Text style={styles.lbl}>34</Text>
            </View>
            <Image style={styles.imgIcon} source={images.newyork} />
          </View>
          <View style={styles.flexRow}>
            <View style={styles.flexCol}>
              <Text style={styles.lbl}>Paris</Text>
              <Text style={styles.lbl}>27</Text>
            </View>
            <Image style={styles.imgIcon} source={images.paris} />
          </View>
        </View>
      </ScrollView>
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
  txtName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#F8F8FF',
    marginTop: 8,
  },
  lbl: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F8F8FF',
    marginTop: 15,
  },
  imgAvatar: {
    height: 82,
    width: 82,
    borderRadius: 12,
    marginTop: 15,
  },
  imgIcon: {
    height: 83,
    width: 40,
  },
  flexCol: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
    width:100
  },
  flexRows: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  inputStyle: {
    height: 55,
    borderRadius: 12,
    fontSize: 20,
    fontWeight: '500',
    color: '#161616',
    backgroundColor: '#F8F8FF',
    flexGrow: 1,
    marginTop: 10,
  },
});
export default NetworkData;
