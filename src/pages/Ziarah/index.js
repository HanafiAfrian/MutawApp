import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {BannerMakkah, BannerMadinah} from '../../assets';

export default class Ziarah extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
	  	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi; 
    return (
      <View style={{flex: 1, backgroundColor: '#222a32'}}>
        <View>
          <View style={styles.topbtn}>
         


            <View></View>
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.imgads}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Makkah', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
            <Image style={styles.bannerstyle} source={BannerMakkah} />
            <Text style={styles.bannertext}>Makkah</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Madinah', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
            <Image style={styles.bannerstyle} source={BannerMadinah} />
            <Text style={styles.bannertext}>Madinah</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bannertext: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 34,
    zIndex: 1,
    marginTop: -60,
    textAlign: 'center',
  },
  topbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },

  iconbackstyle: {
    marginTop: 30,

    zIndex: 1,
  },
  imgads: {
    margin: 20,
    borderRadius: 20,
  },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  container: {
    paddingBottom: 20,

    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,

    color: '#26c8f5',

    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 10,
    fontWeight: 'bold',
  },

  roundButton1: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: '#0d7883',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },

  //   imgads: {
  //     marginTop: -60,
  //     backgroundColor: '#eaeaea',
  //     marginBottom: 20,
  //     height: 300,
  //     width: '100%',
  //   },
  bannerstyle: {
    marginTop: 20,
    width: 320,
    height: 450,
    borderRadius: 15,
    // marginLeft: 8,
    marginRight: 8,
  },
});
