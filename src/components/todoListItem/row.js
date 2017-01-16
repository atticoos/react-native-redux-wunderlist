import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Colors from '@constants/colors';


export default function TodoListRow ({onPress, ...props}) {
  if (onPress) {
    return (
      <View style={styles.rowContainer}>
        <TouchableHighlight onPress={onPress} underlayColor={Colors.Blue.UNDERLAY}>
          <Row {...props} />
        </TouchableHighlight>
      </View>
    );
  }
  return (
    <View style={styles.rowContainer}>
      <Row {...props} />
    </View>
  );
}

class Row extends React.Component {
  setNativeProps(...props) {
    this.view.setNativeProps(...props)
  }
  render() {
    var {style, backgroundColor, control, children} = this.props;
    var rowStyle = [styles.row, style];
    if (backgroundColor) {
      rowStyle.push({backgroundColor});
    }
    return (
      <View style={rowStyle} ref={component => this.view=component}>
        {control &&
          <View style={styles.left}>{control}</View>
        }
        <View style={styles.content}>
          {children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    paddingHorizontal: 8
  },
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
