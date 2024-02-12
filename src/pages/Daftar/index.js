import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {block} from 'react-native-reanimated';

import {Googlelogo, Fblogo} from '../../assets';
import {IconBack} from '../../assets';

export default class Daftar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        {/* tengah */}
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('FrmLoginFirst')}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.welcome}  onPress={() => this.props.navigation.navigate('FrmLoginFirst')}>Daftar</Text>
        </View>

        <View style={styles.container}>
          {/* <View style={styles.btnsos}>
            <Image source={Googlelogo} style={styles.logoicon} />
            <Text>Daftar dengan Google</Text>
          </View>
          <View style={styles.btnsos}>
            <Image source={Fblogo} style={styles.logoicon} />
            <Text>Daftar dengan Google</Text>
          </View> */}
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => this.props.navigation.navigate('Formdaftar')}>
            <Text style={styles.bnttext}>Pribadi </Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.line}></View>
            <Text style={{marginHorizontal: 5, color: "gray"}}>Atau</Text>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => this.props.navigation.navigate('Formdaftartravel')}>
            <Text style={styles.bnttext}>Travel</Text>
          </TouchableOpacity>
<View style={{height: 80}}>
<Text style={styles.bottext2} onPress={() => this.props.navigation.navigate('Formlogin')}>
Sudah Punya Akun?<Text style={{color: '#c19737'}}  onPress={() => this.props.navigation.navigate('Formlogin')}> </Text> <Text style={{color: 'orange'}}  onPress={() => this.props.navigation.navigate('Formlogin')}>Masuk sekarang</Text>
            </Text>
          </View>
        </View>

        {/* tengah */}
        <View style={{height: 40}}>
      
        </View>
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
  iconbackstyle: {
    margin: 20,

    maxWidth: 50,

    padding: 10,
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
    // backgroundColor: '#19232b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -58,
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

  roundButton1: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext3: {
    fontSize: 12,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  bottext2: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 28,
    textAlign: 'center',
	color: "gray",
  },
});
