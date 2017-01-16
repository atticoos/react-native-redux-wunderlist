import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '@constants/colors';

export default function KeyboardToolbar({rightItem, style}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
      </View>
      <View style={styles.right}>
        {rightItem}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.Gray.LIGHT,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flex: 1
  }
});
