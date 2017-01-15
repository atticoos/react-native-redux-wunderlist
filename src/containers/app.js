import React from 'react';
import Drawer from 'react-native-drawer';
import DrawerPanel from './drawer';
import TodoList from './todoList';
import * as DrawerActions from '../actions/drawerActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Drawer
        type="static"
        open={this.props.drawerOpen}
        onClose={() => this.props.drawerActions.drawerClosed()}
        onOpen={() => this.props.drawerActions.drawerOpened()}
        content={<DrawerPanel />}
        openDrawerOffset={100}
        tweenHandler={Drawer.tweenPresets.parallax}
      >
        <TodoList />
      </Drawer>
    );
  }
}

const selector = state => ({
  drawerOpen: state.drawer
});

const actions = dispatch => ({
  drawerActions: bindActionCreators(DrawerActions, dispatch)
});

export default connect(selector, actions)(App);
