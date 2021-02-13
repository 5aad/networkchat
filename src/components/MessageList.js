import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {List, Text} from 'react-native-paper';

const RightContent = ({props, items}) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    {items.receipt === 'true' ? (
      <List.Icon {...props} icon="check-all" color="#F8F8FF" />
    ) : null}
    <Text style={styles.txtDate}>{items.date}</Text>
  </View>
);

const MessageList = ({nav, Data}) => {
  const renderItem = ({item}) => (
    <View style={styles.itemBorder}>
      <List.Item
        titleStyle={styles.txtName}
        descriptionStyle={styles.txtMessage}
        descriptionNumberOfLines={1}
        titleNumberOfLines={1}
        title={item.name}
        description={item.message}
        left={(props) => (
          <Image {...props} source={item.avatar} style={styles.imgLeft} />
        )}
        right={(props) => <RightContent props={props} items={item} />}
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
    borderColor: 'rgba(248, 248, 255, 0.45)',
    paddingVertical: 20,
  },
  imgLeft: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    borderRadius: 12,
    marginRight: 10,
    marginTop: 10,
  },
  txtName: {
    color: '#F8F8FF',
    fontSize: 20,
    fontWeight: '600',
  },
  txtMessage: {
    fontSize: 14,
    fontWeight: '500',
    color: ' rgba(248, 248, 255, 0.8)',
  },
  txtDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F8F8FF',
  },
});
export default MessageList;
