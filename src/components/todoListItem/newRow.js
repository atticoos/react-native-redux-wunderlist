import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Row from '@components/todoListItem/row';
import Colors from '@constants/colors';

export default function NewRow ({style, onSubmitEditing}) {
  return (
    <Row
      style={[styles.row, style]}
      backgroundColor={Colors.Green.OPAQUE}
      control={
        <Icon
          name="plus"
          size={28}
          color={Colors.White.NORMAL}
          style={styles.icon}
        />
      }
    >
      <TextInput
        placeholder="Add a to-do"
        placeholderTextColor={Colors.White.NORMAL}
        selectionColor={Colors.White.NORMAL}
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
      />
    </Row>
  )
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 5
  },
  input: {
    flex: 1,
    color: Colors.White.NORMAL
  },
  icon: {
    marginLeft: -8,
    marginRight: -4
  }
});
