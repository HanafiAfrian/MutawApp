import React, {Component} from 'react';
import {Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Khsatu, Khdua, Khtiga, Khempat} from '../../assets';

export default class BeritaDua extends Component {
  render() {
    return (
      <ScrollView>
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={Khsatu} />
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={Khdua} />
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={Khtiga} />
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={Khempat} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
