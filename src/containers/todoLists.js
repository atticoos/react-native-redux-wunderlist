import React from 'react';
import {AlertIOS, Dimensions, ScrollView, StyleSheet} from 'react-native';
import TodoListRow, {NewTodoListRow} from '@components/todoListRow';
import Screen from '@components/screen';
import Fab from '@components/fab';
import CreateTodoModal from '@containers/create';
import Routes from '@constants/routes';
import Colors from '@constants/colors';

class TodoLists extends React.Component {
  state = {
    creating: false
  };
  constructor(props) {
    super(props);
    this.viewTodoList = this.viewTodoList.bind(this);
    this.promptNewTodoList = this.promptNewTodoList.bind(this);
  }
  viewTodoList(listId) {
    // this.props.todoListActions.view(listId);
    console.log('view list ID', listId);
    this.props.navigator.push({name: Routes.TodoList});
  }
  promptNewTodoList() {
    AlertIOS.prompt(
      'Enter the name of your list',
      null,
      name => console.log('add a new list', name)
    );
  }
  render() {
    return (
      <Screen title="Your Todos" style={styles.screen}>
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
          <NewTodoListRow
            onPress={this.promptNewTodoList}
          />
        </ScrollView>
        <Fab
          style={styles.fab}
          onPress={() => this.setState({creating: true})}
        />

        {this.state.creating &&
          <CreateTodoModal onDismiss={() => this.setState({creating: false})} />
        }

      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.White.BACKGROUND
  },
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    left: (Dimensions.get('window').width - 50) / 2
  }
});

export default TodoLists;
