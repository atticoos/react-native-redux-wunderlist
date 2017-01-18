import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '@constants/colors';
import Text from '@components/text';
import Checkbox from '@components/checkbox';
import Row from '@components/todoListItem/row';



export default function TodoListItemRow ({name, completed, onPress, onChange, onRemove}) {
  var buttons = [{
    component: <RemoveButton onPress={onRemove} />,
    backgroundColor: 'transparent'
  }]
  return (
    <Swipeout backgroundColor="transparent" right={buttons}>
      <Row
        style={[styles.row, completed && styles.completedRow]}
        onPress={onPress}
        control={
          <Checkbox checked={completed} onPress={onPress} />
        }
      >
        <Text style={[styles.name, completed && styles.completedText]}>{name}</Text>
      </Row>
    </Swipeout>
  );
}

function RemoveButton ({onPress}) {
  return (
    <View style={styles.swipeContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.removeButton}>
          <Icon name="trash-o" color={Colors.White.NORMAL} size={18} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16
  },
  swipeContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
    marginLeft: -10
  },
  completedText: {
    color: Colors.Gray.TEXT,
    textDecorationLine: 'line-through'
  },
  completedRow: {
    backgroundColor: Colors.White.OPAQUE
  },
  removeButton: {
    padding: 10,
    backgroundColor: Colors.Red.DANGER,
    borderRadius: 3
  }
});
