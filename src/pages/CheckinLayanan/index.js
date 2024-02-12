import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
    PermissionsAndroid,
  Image,
} from 'react-native';
import {BannerCheckin} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
export default class CheckinLayanan extends Component {
	 constructor(props) {
    super(props);
    this.state = {
	userLocation :{
	 coords: {
	 accuracy: 0,
	 altitude: 0,
	 heading: 0,
	 latitude: 0,
	 longitude: 0, 
	 speed: 0 
	 },
	 
	 mocked: false, 
	 timestamp: 0,
  }
 
 };
    }
componentDidMount()  {
	 this.requestLocationPermission();
	 Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
	  Geolocation.getCurrentPosition(info => console.log(info));
 }

requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Izinkan Aplikasi Mengakses Lokasi",
        message:
          "Tes " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Di izinkan");
	   Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
    } else {
      console.log("Tidak Di Izinkan");
    }
  } catch (err) {
    console.warn(err);
  }
};
  render() {
	  	   
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	    var hargarupiah =	this.props.route.params.hargarupiah;
    return (
      <ScrollView style={{backgroundColor: '#222a32'}}>
        <View>
          <View style={styles.topbtn}>
           
          </View>
        </View>

        <View>
          <Image style={styles.imgads} source={BannerCheckin} />
        </View>

        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {' '}
          Pilih Layanan{' '}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            justifyContent: 'center',

            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('CheckinOrder',{jenis:'Checkin',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi, latitude:this.state.userLocation.coords.latitude,longitude:this.state.userLocation.coords.longitude, hargarupiah:hargarupiah  } )}>
            <Text style={styles.textbtn}>Check-In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('CheckoutOrder',{jenis:'Checkout',telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi, latitude:this.state.userLocation.coords.latitude,longitude:this.state.userLocation.coords.longitude, hargarupiah:hargarupiah  } )}>
            <Text style={styles.textbtn}>Check-Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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

  btn: {
    backgroundColor: '#0d7883',
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    width: '90%',
    borderRadius: 5,
  },
  textbtn: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
