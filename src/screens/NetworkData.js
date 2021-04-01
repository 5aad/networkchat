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
          titleStyle={{textAlign: 'center', marginRight: 20}}
          title="Network Data"
        />
        <Appbar.Action
          style={{width: 15, marginRight: 20}}
          icon="bell-outline"
          onPress={() => console.log()}
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
            <ScrollView horizontal>
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
              <View style={styles.flexCol}>
                <Image style={styles.imgAvatar} source={images.avatar1} />
                <Text style={styles.txtName}>Smith</Text>
              </View>
            </ScrollView>
          </View>

          <Text style={styles.lbl}>Who you are least engaged with </Text>

          <View style={styles.flexRows}>
            <ScrollView horizontal>
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
              <View style={styles.flexCol}>
                <Image style={styles.imgAvatar} source={images.avatar1} />
                <Text style={styles.txtName}>Smith</Text>
              </View>
            </ScrollView>
          </View>

          <Text style={styles.lbl}>Where your connections are located</Text>

          <View style={styles.flexRow}>
            <Text style={styles.lbl}>New York</Text>
            <Text style={styles.lbl}>34</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.lbl}>Paris</Text>
            <Text style={styles.lbl}>34</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.lbl}>London</Text>
            <Text style={styles.lbl}>34</Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.lbl}>Tokyo</Text>
            <Text style={styles.lbl}>34</Text>
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
    marginBottom:20
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
    width: 100,
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
    justifyContent: 'space-between',
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
