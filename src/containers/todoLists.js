import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TodoListRow from '@components/todoListRow';
import Screen from '@components/screen';
import Routes from '@constants/routes';

class TodoLists extends React.Component {
  constructor(props) {
    super(props);
    this.viewTodoList = this.viewTodoList.bind(this);
  }
  viewTodoList(listId) {
    // this.props.todoListActions.view(listId);
    this.props.navigator.push({name: Routes.TodoList});
  }
  render() {
    return (
      <Screen>
        <ScrollView style={styles.container}>
          <TodoListRow
            name="Work"
            count={5}
            onPress={() => this.viewTodoList(1)}
          />
          <TodoListRow
            name="Groceries"
            count={8}
            onPress={() => this.viewTodoList(1)}
          />
          <TodoListRow
            name="Meetup"
            count={2}
            onPress={() => this.viewTodoList(1)}
          />
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TodoLists;
