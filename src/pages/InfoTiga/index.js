import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Baju} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

export default class InfoSatu extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor:'#333'}}>
        <View style={styles.imgStyles}>
            <Image source={{uri:'https://mutawif.co.id/api/muapi/images/kurma.png'}}  style={{ width: '85%',marginTop:-70, height:700,}}  />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	imgStyles: {
	width:'120%',
	backgroundColor:'#333',
	
	
	},
});
