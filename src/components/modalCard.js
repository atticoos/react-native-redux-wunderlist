import React from 'react';
import {Animated, Dimensions, Modal, StyleSheet, TextInput, View} from 'react-native';
import Backdrop from '@components/backdrop';
import Colors from '@constants/colors';

const OFFSET = 100;
const DURATION = 300;

class ModalCard extends React.Component {
  state = {
    offset: new Animated.Value(Dimensions.get('window').height)
  };
  componentDidMount() {
    Animated.timing(
      this.state.offset,
      {toValue: OFFSET, duration: DURATION}
    ).start();
  }
  render() {
    var contentOffset = {top: this.state.offset};
    return (
      <Modal visible={true} transparent={true}>
        <Backdrop onPress={this.props.onDismiss}>
          <View style={styles.container}>
            <Animated.View style={[styles.contentContainer, contentOffset]}>
              {this.props.children}
            </Animated.View>
          </View>
        </Backdrop>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    height: Dimensions.get('window').height - 100,
    padding: 10,
    paddingTop: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: Colors.White.NORMAL
  }
})

export default ModalCard;
