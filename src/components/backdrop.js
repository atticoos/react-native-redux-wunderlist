import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

export default function Backdrop({children, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.backdrop}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.75)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
