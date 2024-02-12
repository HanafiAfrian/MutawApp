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
  BannerZiarah,
  BannerThaif,
  BannerMuseum,
  BannerKiswah,
} from '../../assets';

export default class Makkah extends Component {
  constructor(props) {
    super(props);
    this.state = {};
	
	  this.url = "https://mutawif.co.id/api/muapi/ziarah_makkah.php";
  }
  componentDidMount()  {

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
  render() {
	  	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi; 
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#222a32'}}>
        <View>
          <View style={styles.topbtn}>
            <TouchableOpacity
              style={styles.iconbackstyle}
                      onPress={() => this.props.navigation.navigate('Ziarah', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi })}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>

            <View>
              <Text
                style={{
                  // marginTop: 10,
                  paddingTop: 10,
                  color: 'orange',
                  zIndex: 1,
                  fontWeight: 'bold',
                  fontSize: 34,
                }}>
                Makkah
              </Text>
            </View>

            <TouchableOpacity style={styles.iconbackstyle}>
              <Icon name="info-circle" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image style={styles.imgads} source={BannerThaif} />
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
                  marginTop: -30,
                  fontSize: 34,
                  textAlign: 'center',
                }}>
                <Text style={{color: 'orange'}}>Thaif</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
               {this.state.textreal} SR / Org (Rp.{this.state.textrp})
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
            <View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Thaif merupakan salah satu kota yang memiliki hawa sejuk,
                  karena berada di lembah pegunungan Asir dan penunungan Al
                  Hada. Kota yang terletak sekitar 67 kilometer atau 1 jam 45
                  menit dari Kota Makkah Al Mukarramah ini terkenal dengan
                  perkebunan Delima, Kurma, sayuran lainnya, termasuk juga
                  banyak tumbuh pohon Zaqqum, pohon berduri. Mengunjungi shubra
                  palace, rashed Husain alqorashei factory, fruit market, al
                  shareef museum, masjid qarnul manazil, miqat .
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
            <Text style={{color: 'white'}}>Include bus</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>2. </Text>
            <Text style={{color: 'white'}}>
              Snack ( roti+jus+air mineral) dan makan siang
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>3. </Text>
            <Text style={{color: 'white'}}>Include guide tour</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>4. </Text>
            <Text style={{color: 'white'}}>Include permit</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>5. </Text>
            <Text style={{color: 'white'}}>
              Min. pemesanan untuk 30 orang/ bus
            </Text>
          </View>
        </View>
        <View>
          <Image style={styles.imgads2} source={BannerMuseum} />
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
                  marginTop: -30,
                  fontSize: 34,
                  textAlign: 'center',
                }}>
                <Text style={{color: 'orange'}}>Museum Ka'bah</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
               {this.state.textrealjns2} SR / Bus (Rp.{this.state.textrpjns2})
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
            <View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Museum ka’bah adalah tempat yg berisi tentang gambaran sejarah
                  dua Tanah Suci, yaitu berdirinya Masjidil Haram, Mekkah dan
                  Masjid Nabawi, Madinah
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
            <Text style={{color: 'white'}}>Hanya menyediakan permit</Text>
          </View>
        </View>
        <View>
          <Image style={styles.imgads2} source={BannerKiswah} />
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
                  marginTop: -30,
                  fontSize: 34,
                  textAlign: 'center',
                }}>
                <Text style={{color: 'orange'}}>Kiswah</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
               {this.state.textrealjns3} SR / Bus (Rp. {this.state.textrpjns3} )
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
            <View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Museum Kiswah merupakan museum yang menyimpan kiswah-kiswah
                  yang pernah digunakan menutupi Ka'bah dan banyak benda-benda
                  dan barang-barang lain yang bernilai sejarah yang dulu berada
                  di Masjidil Haram dan Nabawi. Selain itu, ada juga sejarah
                  perkembangan mushaf Alquran dari masa ke masa, termasuk mushaf
                  yang ditulis oleh sahabat nabi, yakni Usman bin Affan
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
            <Text style={{color: 'white'}}>Hanya menyediakan permit</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('MakkahLayanan', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi, hargarupiah:this.state.hargarupiah,hargarupiahjns2:this.state.hargarupiahjns2,hargarupiahjns3:this.state.hargarupiahjns3  })}>
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
    marginTop: -60,
    backgroundColor: '#eaeaea',
    marginBottom: 20,
    height: 300,
    width: '100%',
  },

  imgads2: {
    marginTop: 60,
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
