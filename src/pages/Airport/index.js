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

import {BannerFood, IconBack, IconNasibox, BannerAirport} from '../../assets';

export default class Airport extends Component {
  constructor(props) {
  super(props);
    this.state = {};
	 this.url = "https://mutawif.co.id/api/muapi/airporthandling.php";
  }
  componentDidMount(){
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



  render() {
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi; 
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#222a32'}}>
        
        <View>
          <Image style={styles.imgads} source={BannerAirport} />
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
                Harga<Text style={{color: 'orange'}}> Pelayanan</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                {this.state.textreal} SR / Orang (Rp. {this.state.textrp})
			
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
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              marginBottom: 10,
              marginTop: 20,
            }}>
            Kedatangan
          </Text>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Mengurus segala urusan airport dari mulai Jemaah keluar
                  pesawat hingga mengantar masuk ke dalam bus ( termasuk
                  mengatur dan mengumpulkan passport dari muasasah, membuat
                  laporan ke Muasasah, membantu mengatur dan memastikan semua
                  koper/bagasi masuk ke dalam bus) .
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Semua staff adalah WNI menerima all airport, terminal haji & new terminal.
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
            Keberangkatan
          </Text>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Mengurus segala urusan airport dari mulai Jemaah datang ke
                  bandara hingga membagikan boarding pass keseluruh jemaah
                  (termasuk mengurus koper/bagasi, jasa porter, zam-zam ketempat
                  check-in, membantu check-in semua jemaah, hingga mendapatkan
                  boarding pass seluruh Jemaah dan membagikannya ke Jemaah
                  masing masing).
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                 Semua staff adalah WNI Menerima all airport, terminal haji & new terminal.
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
            <Text style={{color: 'white'}}>Tidak include biaya bagasi</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>2. </Text>
            <Text style={{color: 'white'}}>Tidak include biaya zam-zam</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>3. </Text>
            <Text style={{color: 'white'}}>Tidak include biaya muasasah</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('AirportOrder', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi,hargarupiah :this.state.hargarupiah })}>
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
  },

  iconbackstyle: {
    marginTop: 30,

    zIndex: 1,
  },
  imgads: {
    marginTop: -10,
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
