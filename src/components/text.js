import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '@constants/colors';

export default function BaseText ({style, children, ...props}) {
  return (
    <Text style={[styles.text, style]} {...props}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.Black.NORMAL
  }
});
