import React from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '@constants/colors';

export default function Checkbox({checked = false, onChange}) {
  return (
    <TouchableWithoutFeedback onPress={onChange}>
      <View style={styles.container}>
        <View style={[styles.outline, checked && styles.outlineActive]} />
        {checked &&
          <Icon
            name="ios-checkmark-outline"
            size={42}
            color={Colors.Gray.TEXT}
            style={styles.check}
          />
        }
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    padding: 2,
    overflow: 'visible',
    position: 'relative'
  },
  outline: {
    position: 'absolute',
    top: 3,
    left: 2,
    width: 15,
    height: 15,
    borderColor: Colors.Gray.BORDER,
    borderWidth: 1,
    borderRadius: 2,
  },
  outlineActive: {
    borderColor: Colors.Gray.TEXT
  },
  check: {
    top: -15,
    left: 3
  }
});
