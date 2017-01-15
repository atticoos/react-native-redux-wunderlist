import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class DrawerPanel extends React.Component {
  render() {
    return (
      <View style={styles.drawer}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'red',
    flex: 1
  }
});

export default DrawerPanel;
