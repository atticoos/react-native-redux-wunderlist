import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Backdrop from '@components/backdrop';
import Colors from '@constants/colors';
import ModalCard from '@components/modalCard';
import Text from '@components/text';
import SelectedTodoList from '@components/createModal/selectedTodoList';
import TodoSelectionList from '@components/createModal/todoSelectionList';
import KeyboardToolbar from '@components/keyboardToolbar';

class CreateTodo extends React.Component {
  state = {
    selectionMode: false,
    todoTitle: ''
  };
  componentDidMount() {
    this.input.focus();
  }
  addTodo() {
    console.log('creating new todo', this.state.todoTitle);
    this.props.onDismiss();
  }
  render() {
    return (
      <ModalCard onDismiss={this.props.onDismiss}>
        <TextInput
          ref={component => this.input = component}
          multiline={true}
          autoCorrect={false}
          style={styles.input}
          value={this.state.todoTitle}
          placeholder="What would you like to do?"
          onChangeText={todoTitle => this.setState({todoTitle})}
        />

        <SelectedTodoList
          style={styles.selectedRow}
          name="Test"
          icon="chevron-small-up"
          onPress={() => {
            this.setState({selectionMode: true})
            this.input.blur();
          }}
        />
        <KeyboardToolbar
          style={styles.toolbar}
          rightItem={
            <TouchableOpacity onPress={() => this.addTodo()}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          }
        />
        <TodoSelectionList
          active={this.state.selectionMode}
          todos={[]}
          onSelect={todo => {
            this.setState({selectionMode: false})
            this.input.focus();
          }}
        />
      </ModalCard>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    height: 265,
    color: Colors.Gray.TEXT_DARK
  },
  selectedRow: {
    borderTopWidth: 1,
    borderTopColor: Colors.Gray.BORDER_LIGHT,
    marginHorizontal: -10,
    paddingVertical: 10
  },
  toolbar: {
    marginHorizontal: -10
  },
  add: {
    color: Colors.Blue.LINK
  }
})

export default CreateTodo;
