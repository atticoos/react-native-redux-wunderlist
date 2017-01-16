import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Text from '@components/text';
import Colors from '@constants/colors';


export default function SelectedTodoList({name, style, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.row, style]}>
        <Icon name="list" size={16} color={Colors.Gray.BYLINE} />
        <Text style={styles.name}>{name}</Text>
        {icon &&
          <Icon name={icon} size={16} color={Colors.Gray.BYLINE} />
        }

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    marginLeft: 10
  }
})
