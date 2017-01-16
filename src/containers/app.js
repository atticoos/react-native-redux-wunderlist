import React from 'react';
import {Navigator} from 'react-native';
import Routes from '@constants/routes';
import TodoLists from '@containers/todoLists';
import TodoList from '@containers/todoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene(route, navigator) {
    switch(route.name) {
      case Routes.TodoLists:
        return <TodoLists navigator={navigator} />
      case Routes.TodoList:
        return <TodoList navigator={navigator} />
      default:
        return <TodoLists navigator={navigator} />
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{name: Routes.TodoLists}}
        renderScene={this.renderScene}
      />
    );
  }
}

export default App;
