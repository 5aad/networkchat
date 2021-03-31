import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {List, Text} from 'react-native-paper';

const AccountList = ({nav, Data}) => {
  const handleClick = (name) => {
    if (name === 'Profile') {
      nav.navigate('profile');
    } else if (name === 'Network Data') {
      nav.navigate('networkData');
    } else if (name === 'Logout') {
      AsyncStorage.removeItem('@auth_token');
      nav.navigate('number');
    }
  };
  const renderItem = ({item}) => (
    <View style={styles.itemBorder}>
      <List.Item
        onPress={() => handleClick(item.name)}
        titleStyle={styles.txtName}
        titleNumberOfLines={1}
        title={item.name}
        right={(props) => (
          <List.Icon props={props} icon="chevron-right" color="#F8F8FF" />
        )}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
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
export default AccountList;
