import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Text from '@components/text';
import Colors from '@constants/colors';

export default function TodoListRow({name, count, onPress}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={Colors.Blue.UNDERLAY}>
      <View style={styles.row}>
        <Icon name="list" size={16} color={Colors.Gray.BYLINE} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {

  },
  name: {
    flex: 1,
    marginLeft: 10
  },
  count: {
    color: Colors.Gray.BYLINE
  }

});
