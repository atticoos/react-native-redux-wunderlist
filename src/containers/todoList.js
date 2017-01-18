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
import * as TodoActions from '@actions/todos';
import * as ScreenActions from '@actions/todoListScreen';

class TodoList extends React.Component {
  render() {
    return (
      <Screen title="Your Todos">
        <ScrollView style={styles.scrollView}>
          <TodoInput
            style={styles.inputRow}
            onChangeText={text => console.log('new todo text changed', text)}
            onSubmitEditing={() => console.log('new todo submitted')}
          />

          <View>
            <TodoItem name="Agenda item one"
              onPress={() => console.log('pressed')}
              onRemove={() => console.log('removing')}
            />
            <TodoItem name="Item two" />
            <TodoItem name="A third item" />
            <TodoItem name="Possibly a fourth" />
          </View>

          <View style={styles.visibleToggle}>
            <VisibleTodoToggle
              active={true}
              onPress={() => console.log('visible toggle pressed')}
            />
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

//value={''}

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
