import React from 'react';
import {TextInput} from 'react-native';

export default class MultiLineTextInput extends React.Component {
  static propTypes = TextInput.propTypes;
  static defaultProps = TextInput.defaultProps;

  state = {
    value: ''
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({value: nextProps.value});
    }
  }

  onChangeText (value) {
    if (value.indexOf('\n') > -1) {
      this.props.onSubmitEditing();
      this.setState({value: value.substr(0, value.length - 1)});
    } else {
      this.props.onChangeText(value);
    }
  }

  render() {
    return (
      <TextInput
        {...this.props}
        onChangeText={value => this.onChangeText(value)}
      />
    );
  }
}
