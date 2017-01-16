import React from 'react';
import {TouchableHighlight, View, StyleSheet} from 'react-native';
import Text from '@components/text';
import Colors from '@constants/colors';

export default function VisibleTodoToggle ({onPress, active}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={Colors.Black.OPAQUE}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {active ? 'HIDE' : 'SHOW'} COMPLETED TO-DOS
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: Colors.Green.OPAQUE,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3
  },
  text: {
    color: Colors.White.NORMAL,
    fontSize: 12
  }
});
