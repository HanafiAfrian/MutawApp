import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Modal} from 'react-native';

export class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  show = () => {
    this.setState({show: true});
  };

  close = () => {
    this.setState({show: false});
  };

  render() {
    let {show} = this.state;

    return (
      <View>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={true}
          onRequestClose={this.close}></Modal>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ModalPopup;
