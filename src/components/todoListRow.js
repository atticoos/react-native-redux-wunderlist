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
export function NewTodoListRow({onPress}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={Colors.Blue.UNDERLAY}>
      <View style={styles.row}>
        <Icon name="add-to-list" size={16} color={Colors.Blue.LINK} style={{marginLeft: 3, marginRight: -3}} />
        <Text style={[styles.name, styles.textLink]}>Create list</Text>
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
  textLink: {
    color: Colors.Blue.LINK
  },
  count: {
    color: Colors.Gray.BYLINE
  }

});
