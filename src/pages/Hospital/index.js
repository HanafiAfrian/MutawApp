import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
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

import {BannerHospital} from '../../assets';

export default class Hospital extends Component {
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
 	
	  this.url = "https://mutawif.co.id/api/muapi/hospitallist.php";
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
		
		
			this.setState({textrealjns2:json.data.result[0].textrealjns2});
		this.setState({hargarupiahjns2:json.data.result[0].hargarupiahjns2});
		this.setState({textrpjns2:json.data.result[0].textrpjns2});
		
		
			this.setState({textrealjns3:json.data.result[0].textrealjns3});
		this.setState({hargarupiahjns3:json.data.result[0].hargarupiahjns3});
		this.setState({textrpjns3:json.data.result[0].textrpjns3});
		
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
          <View style={styles.topbtn}>
         
          </View>
        </View>

        <View>
          <Image style={styles.imgads} source={BannerHospital} />
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
                Medicine 
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
          {/* <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              marginBottom: 10,
              marginTop: 20,
            }}>
            kedatangan
          </Text> */}

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Menyediakan obat yang di inginkan dan mengantarnya ke
                  customers
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Obat dibeli langsung di apotik terpercaya dan asli
                </Text>
              </View>
            </View>
          </View>
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
                Antar <Text style={{color: 'orange'}}> Pasien</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
              {this.state.textreal} SR / Hari (Rp.{this.state.textrp})
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
          {/* <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              marginBottom: 10,
              marginTop: 20,
            }}>
            kedatangan
          </Text> */}

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Mengurus segala urusan dan surat- surat untuk pendaftaran
                  rumah sakit
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan jasa dan akomodasi pengantaran pasien kerumah
                  sakit
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>3. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Mencari rumah sakit terdekat dari lokasi Jemaah
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
              Tidak include biaya rs/ rawat inap dan obat obatan
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>2. </Text>
            <Text style={{color: 'white'}}>Hanyak mengantar saja</Text>
          </View>
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
                Pendamping<Text style={{color: 'orange'}}> Pasien</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                 {this.state.textrealjns2} SR / Hari (Rp.{this.state.textrpjns2})
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
                  Menyediakan jasa untuk mendampingi, membantu, dan mengurus
                  segala kebutuhan pasien selama dirumah sakit
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
              Harga hanya untuk 1 orang pasien selama 24 jam
            </Text>
          </View>
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
                Fardhu<Text style={{color: 'orange'}}> Kifayah</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                 {this.state.textrealjns3}  SR (Rp.{this.state.textrpjns3})
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
                  Mengurus segala urusan dan surat surat yang di perlukan,
                  termasuk surat untuk KJRI, muassasah, polisi, surat untuk
                  keluarga, surat untuk masjid, dll)
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Mengurus dan memastikan masjid untuk memandikan, mengkafani,
                  menyolatkan dan menguburkan jenazah
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
              Harga sudah include biaya perlengkapan jenazah
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('HospitalLayanan', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi, latitude:this.state.userLocation.coords.latitude,longitude:this.state.userLocation.coords.longitude ,  hargarupiah:this.state.hargarupiah,hargarupiahjns2:this.state.hargarupiahjns2,hargarupiahjns3:this.state.hargarupiahjns3   })}>
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
