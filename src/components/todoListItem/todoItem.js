import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '@constants/colors';
import Text from '@components/text';
import Checkbox from '@components/checkbox';
import Row from '@components/todoListItem/row';

export default function TodoListItemRow ({name, completed, onPress, onChange}) {
  return (
    <Row
      style={completed && styles.completedRow}
      onPress={onPress}
      control={
        <Checkbox checked={completed} onPress={onChange} />
      }
    >
      <Text style={[styles.name, completed && styles.completedText]}>{name}</Text>
    </Row>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16
  },
  completedText: {
    color: Colors.Gray.TEXT,
    textDecorationLine: 'line-through'
  },
  completedRow: {
    backgroundColor: Colors.White.OPAQUE
  }
});
