import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Screen from '@components/screen';
import TodoItem from '@components/todoListItem/todoItem';
import TodoInput from '@components/todoListItem/todoInput';
import VisibleTodoToggle from '@components/todoListItem/visibleTodoToggle';
import * as TodoActions from '@actions/todos';
import * as ScreenActions from '@actions/todoListScreen';

class TodoList extends React.Component {
  render() {
    var pendingCount = 4;
    var totalCount = 6;
    return (
      <Screen title={`Todos (${pendingCount}/${totalCount})`}>
        <ScrollView style={styles.scrollView}>
          {/* Create new todo */}
          <TodoInput
            style={styles.inputRow}
            onChangeText={text => console.log('new todo text changed', text)}
            onSubmitEditing={() => console.log('new todo submitted')}
          />

          {/* Pending todo items */}
          <View>
            <TodoItem name="Agenda item one"
              onPress={() => console.log('pressed')}
              onRemove={() => console.log('removing')}
            />
            <TodoItem name="Item two" />
            <TodoItem name="A third item" />
            <TodoItem name="Possibly a fourth" />
          </View>

          {/* Toggle completed todo visibility */}
          <View style={styles.visibleToggle}>
            <VisibleTodoToggle
              active={true}
              onPress={() => console.log('visible toggle pressed')}
            />
          </View>

          {/* Completed todo items */}
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
    paddingVertical: 8,
    overflow: 'visible'
  },
  inputRow: {
    marginBottom: 8
  },
  visibleToggle: {
    marginVertical: 20,
    alignItems: 'center'
  }
});

const selector = state => ({

});

export default connect(selector)(TodoList);
