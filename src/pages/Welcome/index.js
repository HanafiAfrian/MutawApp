import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import {block} from 'react-native-reanimated';

import {Googlelogo, Fblogo} from '../../assets';
import {IconBack} from '../../assets';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.roundButton2}
            onPress={() => this.props.navigation.navigate('FrmLoginFirsthaji')}>
            <Text style={styles.bnttext}>Haji Kloter</Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.line}></View>
            <Text style={{marginHorizontal: 5, color: 'white'}}>Atau</Text>
            <View style={styles.line}></View>
          </View>
          <View style={{height: 15}}>
            <Text style={styles.bottext2}></Text>
          </View>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => this.props.navigation.navigate('FrmLoginFirst')}>
            <Text style={styles.bnttext}>Umrah - Haji Khusus</Text>
          </TouchableOpacity>
        </View>

        {/* tengah */}
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bnttext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  midtext: {
    color: '#828487',
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 5,
  },

  line: {
    height: 1,
    width: 130,
    backgroundColor: '#828487',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#19232b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
  },

  btnsos: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: 'grey',
  },

  logoicon: {
    width: 20,
    height: 20,
    marginLeft: 0,
    marginRight: 20,
  },
  roundButton2: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#8bc34a',
  },
  roundButton1: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext3: {
    // fontSize: 12,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  bottext2: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
});
