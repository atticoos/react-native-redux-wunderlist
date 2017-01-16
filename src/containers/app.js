import React from 'react';
import {Dimensions, Image, Navigator, StatusBar, StyleSheet, View} from 'react-native';
import Routes from '@constants/routes';
import TodoLists from '@containers/todoLists';
import TodoList from '@containers/todoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.configureScene = this.configureScene.bind(this);
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
  configureScene() {
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('../assets/background.png')}
          resizeMode={Image.resizeMode.cover}
        />
        <StatusBar barStyle="light-content" />
        <Navigator
          initialRoute={{name: Routes.TodoLists}}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

export default App;
