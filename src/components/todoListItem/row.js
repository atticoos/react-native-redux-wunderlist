import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Colors from '@constants/colors';


export default function TodoListRow ({onPress, ...props}) {
  if (onPress) {
    return (
      <TouchableHighlight onPress={onPress} underlayColor={Colors.Blue.UNDERLAY}>
        <Row {...props} />
      </TouchableHighlight>
    );
  }
  return (
    <Row {...props} />
  );
}

function Row ({style, backgroundColor, control, children}) {
  var rowStyle = [styles.row, style];
  if (backgroundColor) {
    rowStyle.push({backgroundColor});
  }
  return (
    <View style={rowStyle}>
      {control &&
        <View style={styles.left}>{control}</View>
      }
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 15,
    backgroundColor: Colors.White.NORMAL,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    borderRadius: 2
  },
  left: {
    marginRight: 10
  },
  content: {
    flex: 1
  }
});
