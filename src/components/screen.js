import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '@constants/colors';
import Text from '@components/text';

export default function Screen ({children, style, ...props}) {
  return (
    <View style={[styles.container, style]}>
      <Header {...props}/>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

function Header({leftItem, rightItem, title}) {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        {leftItem}
      </View>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.right}>
        {rightItem}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White.BACKGROUND
  },
  content: {
    flex: 1
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: Colors.Green.NORMAL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center'
  },
  headerText: {
    color: Colors.White.NORMAL,
    textAlign: 'center',
    fontSize: 18
  }
});
