import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import images from '../api/images';

const Networks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Image source={images.add} />
      </View>
      <View style={styles.nContainer}>
        <Image source={images.n1} />
      </View>
      <View style={styles.nContainer}>
        <Image source={images.n2} />
      </View>
      <View style={styles.nContainer}>
        <Image source={images.n3} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
  addContainer: {
    width: 160,
    height: 159,
    borderColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  nContainer:{
    width: 160,
    height: 159,
    borderColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    marginBottom:20,
  }
});
export default Networks;
