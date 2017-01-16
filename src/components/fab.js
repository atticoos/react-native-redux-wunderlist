import React from 'react';
import {Animated, View, StyleSheet, PanResponder} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@constants/colors';

class Fab extends React.Component {
  static defaultProps = {
    onPress: () => {}
  };
  state = {
    scale: new Animated.Value(1)
  };
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        Animated.timing(
          this.state.scale,
          {toValue: 0, duration: 200}
        ).start();
      },
      onPanResponderRelease: () => {
        Animated.timing(
          this.state.scale,
          {toValue: 1, duration: 200}
        ).start();
        this.props.onPress();
      }
    })
  }
  render() {
    var scale = this.state.scale.interpolate({
      inputRange: [0, 1],
      outputRange: [0.75, 1]
    })
    var transform = {transform: [{scale}]};
    return (
      <Animated.View
        style={[styles.button, this.props.style, transform]}
        {...this.panResponder.panHandlers}
      >
        <Icon
          name="plus"
          size={36}
          color={Colors.White.NORMAL}
          style={styles.icon}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.Blue.BUTTON,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    backgroundColor: 'transparent'
  }
});

export default Fab;
