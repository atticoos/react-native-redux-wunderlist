import React from 'react';
import {ScrollView, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '@constants/colors';
import Text from '@components/text';
import Screen from '@components/screen';
import TodoItem from '@components/todoListItem/itemRow';
import NewRow from '@components/todoListItem/newRow';
import VisibleTodoToggle from '@components/todoListItem/visibleTodoToggle';

class TodoList extends React.Component {
  render() {
    return (
      <Screen
        leftItem={
          <TouchableOpacity onPress={() => this.props.navigator.pop()}>
            <Icon
              color={Colors.White.NORMAL}
              size={24}
              name="chevron-left"
            />
          </TouchableOpacity>
        }
        title="Groceries"
      >
        <ScrollView style={styles.scrollView}>
          <NewRow
            style={styles.newRow}
            onSubmitEditing={() => console.log('submit')}
          />

          <View>
            <TodoItem name="Agenda item one" />
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
  container: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 40
  },
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

export default TodoList;
