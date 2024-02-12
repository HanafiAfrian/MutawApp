import React, {Component} from 'react';
import {
  View,
  UIManager,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

UIManager.setLayoutAnimationEnabledExperimental(true);

import {CreditCardInput} from 'react-native-credit-card-input';
import {ScrollView} from 'react-native-gesture-handler';

export default class App extends Component {
  _onFocus = field => console.log('focusing', field);

  _onChange = formData => console.log(JSON.stringify(formData, null, ' '));
  render() {
	    var jumlah_order =	this.props.route.params.jumlah_order; 
	   var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		const numb = this.props.route.params.totalrupiah; 
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
	
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
      
        <View style={styles.container}>
          <CreditCardInput
            autoFocus
            requireName={true}
            requireCVC={true}
            requirePostalCode={true}
            validColor="black"
            invalidColor="red"
            placeholderColor="darkgray"
            labelStyle={{color: 'black', fontSize: 12}}
            inputStyle={{color: 'black', fontSize: 16}}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PembelianSukses', {		
jumlah_order : jumlah_order,		  
			totalreal : totalreal,
			 totalrupiah : totalrupiah})}
          style={styles.roundButton1}>
          <Text style={styles.btntext}>Bayar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#0d7883',
    marginTop: 120,
  },
  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 5,
    backgroundColor: 'white',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 20,
    fontWeight: 'bold',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 24,
    width: 20,
  },
  welcomebg: {
    height: 80,
    marginBottom: 20,
    backgroundColor: '#1b2333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
