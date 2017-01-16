import React from 'react';
import {Animated, Dimensions, StyleSheet, ScrollView, View} from 'react-native';
import SelectedTodoList from '@components/createModal/selectedTodoList';

class TodoSelectionList extends React.Component {
  state = {
    offset: new Animated.Value(Dimensions.get('window').height)
  };
  componentWillReceiveProps(nextProps) {
    if (!this.props.active && nextProps.active) {
      Animated.timing(
        this.state.offset,
        {toValue: 0, duration: 300}
      ).start()
    } else if (this.props.active && !nextProps.active) {
      Animated.timing(
        this.state.offset,
        {toValue: Dimensions.get('window').height, duration: 300}
      ).start();
    }
  }
  render() {
    var offset = {top: this.state.offset};
    return (
      <Animated.View style={[styles.container, offset]}>
        <ScrollView style={styles.flex}>
          <SelectedTodoList
            name="Hello"
            style={styles.row}
            onPress={() => this.props.onSelect('hello')}
          />
          <SelectedTodoList
            name="Hello"
            style={styles.row}
            onPress={() => this.props.onSelect('hello')}
            icon="check"
          />
          <SelectedTodoList
            name="Hello"
            style={styles.row}
            onPress={() => this.props.onSelect('hello')}
          />
        </ScrollView>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    height: Dimensions.get('window').height,
    left: 0,
    right: 0
  },
  flex: {
    flex: 1
  },
  row: {
    paddingVertical: 15
  }
});

export default TodoSelectionList;
