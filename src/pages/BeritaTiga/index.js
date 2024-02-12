import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, Image} from 'react-native';

import {Gacasatus, Gacadua} from '../../assets';

export default class BeritaTiga extends Component {
  render() {
    return (
      <ScrollView>
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={Gacasatus} />
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={Gacadua} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
