import React from 'react';
import {ScrollView, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '@constants/colors';
import Text from '@components/text';
import Screen from '@components/screen';
import TodoItem from '@components/todoListItem/todoItem';
import TodoInput from '@components/todoListItem/todoInput';
import VisibleTodoToggle from '@components/todoListItem/visibleTodoToggle';

class TodoList extends React.Component {
  render() {
    return (
      <Screen title="Your Todos">
        <ScrollView style={styles.scrollView}>
          <TodoInput style={styles.newRow} />

          <View>
            <TodoItem name="Agenda item one" onPress={() => console.log('pressed')} onChange={() => console.log('changed')} />
            <TodoItem name="Item two" />
            <TodoItem name="A third item" />
            <TodoItem name="Possibly a fourth" />
          </View>

          <View style={styles.visibleToggle}>
            <VisibleTodoToggle onPress={() => {}} />
          </View>

          <View>
            <TodoItem name="A third item" completed={true} />
            <TodoItem name="Possibly a fourth" completed={true} />
          </View>

        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 8
  },
  newRow: {
    marginBottom: 8
  },
  visibleToggle: {
    marginVertical: 20,
    alignItems: 'center'
  }
});

export default connect()(TodoList);
