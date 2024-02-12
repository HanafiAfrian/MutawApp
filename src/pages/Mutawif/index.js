import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  StyleSheet,
    PermissionsAndroid,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {BannerMutawif} from '../../assets';
import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
export default class Ricebox extends Component {
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
  this.url = "https://mutawif.co.id/api/muapi/mutawif.php";
    }
componentDidMount()  {
	 this.requestLocationPermission();
	 Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
	  Geolocation.getCurrentPosition(info => console.log(info));
	    this.ambilListData()
 }

  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
		this.setState({textreal:json.data.result[0].textreal});
		this.setState({hargarupiah:json.data.result[0].hargarupiah});
		this.setState({textrp:json.data.result[0].textrp});
        console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
        this.setState({listData:json.data.result});
			
    })
    .catch((error)=>{
        console.log(error);
    })
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
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#222a32'}}>
       

        <View>
          <Image style={styles.imgads} source={BannerMutawif} />
        </View>

        <View
          style={{
            margin: 20,
            display: 'flex',
            justifyContent: 'flex-start',
          }}>
          <View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 34,
                  textAlign: 'center',
                }}>
                Harga<Text style={{color: 'orange'}}> Mutawif</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                {this.state.textreal} SR / Hari (Rp. {this.state.textrp})
			
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 20,
              color: 'white',
              fontSize: 28,
              marginBottom: 10,
            }}>
            Deskripsi
          </Text>

          <View>
		  
		    <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                   Mutawif merupakan Warga Negara Indonesia.
                </Text>
              </View>
            </View>
		  
		  
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Hanya menyediakan mutawif yang professional dan berpengalaman.
                </Text>
              </View>
            </View>
			
			
			
			
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>3. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan mutawif untuk membantu, menuntun, dan mempermudah
                  perjalanan anda
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>4. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Semua mutawif lulusan Al-Jami’ah Al-Islamiyah Madinah,
                  Al-Azhar Kairo, Umm All Qura Makkah
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>5. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>Memiliki Izin Yang Lengkap</Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>6. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan mutawif untuk membantu, menuntun, dan mempermudah
                  perjalanan anda mulai dari kedatangan hingga tiba di bandara
                  untuk kepulangan (termasuk memastikan bus ada dan datang tepat
                  waktu di airport, memastikan makanan Jemaah ada dan sudah
                  tersedia sebelum kedatangan Jemaah, maintenance bus, membawa
                  ziarah, tawaf, sa’i, dan mentahallulkan ,membantu mencari
                  Jemaah jika ada yang hilang).
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              marginBottom: 10,
              marginTop: 20,
            }}>
            Syarat & Ketentuan
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>1. </Text>
            <Text style={{color: 'white'}}>
              Harga hanya untuk 1 orang selama 1 hari
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('MutawifOrder', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi, latitude:this.state.userLocation.coords.latitude,longitude:this.state.userLocation.coords.longitude,hargarupiah:this.state.hargarupiah })}>
          <Text style={styles.btntext}>SETUJU</Text>
        </TouchableOpacity>
        {/* </View> */}
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
	paddingTop: 10,
  },

  iconbackstyle: {
    marginTop: 30,

    zIndex: 1,
  },
  imgads: {
    
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
