import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as DrawerActions from '../actions/drawerActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TodoList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.drawerActions.openDrawer()}>
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 40
  }
});

const selector = state => ({});
const actions = dispatch => ({
  drawerActions: bindActionCreators(DrawerActions, dispatch)
});

export default connect(selector, actions)(TodoList);
