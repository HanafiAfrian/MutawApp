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

import {
  Albaik,
  Barnies,
  Dates,
  Hardees,
  Kudu,
  Patchi,
  Subway,
  RestoKakak,
  SevenDays,
  TwisBurger,
} from '../../assets';

export default class Mufood extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
	  
	   var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi; 
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#222a32'}}>
        <View>
          <View style={styles.topbtn}>
            

            
           
          </View>
        </View>

        <View
          style={{
            margin: 20,
            display: 'flex',
            justifyContent: 'flex-start',
          }}>
          <View></View>
          <Text
            style={{
              // fontWeight: 'bold',
              marginTop: 20,
              color: 'white',
              // fontSize: 28,
              marginBottom: 10,
            }}>
            MU - Food, Mutawif food, menyediakan layanan pengantaran berbagai
            macam makanan dan minuman dari restoran hits di arab dan makanan
            asli indonesia.
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              marginBottom: 20,
              marginTop: 20,
              textAlign: 'center',
            }}>
            Pilih Restaurant
          </Text>
          <View style={styles.imgrow}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MufoodLayanantwisburger',{resto:'Restoran TwisBurger', harga:'40',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={TwisBurger} style={styles.imgprd}></Image>
            </TouchableOpacity>
            <TouchableOpacity
           onPress={() => this.props.navigation.navigate('MufoodDatesOrder',{resto:'Restoran Dates', harga:'55',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={Dates} style={styles.imgprd}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.imgrow}>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('MufoodLayananpatchi',{resto:'Restoran Patchi', harga:'30',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={Patchi} style={styles.imgprd}></Image>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MufoodLayananhardees',{resto:'Restoran Hardees', harga:'40',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={Hardees} style={styles.imgprd}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.imgrow}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MufoodLayananrestokakak',{resto:'Restoran Kakak', harga:'25',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={RestoKakak} style={styles.imgprd}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MufoodLayananalbaik',{resto:'Restoran Albaik', harga:'25',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={Albaik} style={styles.imgprd}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.imgrow}>
            <TouchableOpacity
         onPress={() => this.props.navigation.navigate('MufoodLayanankudu',{resto:'Restoran Kudu', harga:'40',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={Kudu} style={styles.imgprd}></Image>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MufoodLayanansubway',{resto:'Restoran Subway', harga:'45',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={Subway} style={styles.imgprd}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.imgrow}>
            <TouchableOpacity 
			onPress={() => this.props.navigation.navigate('MufoodLayananbarnies',{resto:'Restoran Barnies', harga:'32',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={Barnies} style={styles.imgprd}></Image>
            </TouchableOpacity>
            <TouchableOpacity 
			onPress={() => this.props.navigation.navigate('MufoodLayanansevendays',{resto:'Restoran SevenDays', harga:'7',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Image source={SevenDays} style={styles.imgprd}></Image>
            </TouchableOpacity>
          </View>
        </View>

        {/* <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('AirportOrder')}>
          <Text style={styles.btntext}>SETUJU</Text>
        </TouchableOpacity> */}
        {/* </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imgprd: {
    height: 170,
    width: 150,
  },

  imgrow: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
	paddingTop: 20,
  },

  iconbackstyle: {
    marginTop: 30,

    zIndex: 1,
  },
  imgads: {
    marginTop: -60,
    backgroundColor: '#eaeaea',
    marginBottom: 20,
    height: 300,
    width: '100%',
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
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },
});
