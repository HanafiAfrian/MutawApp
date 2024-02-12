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

import {BannerJastip} from '../../assets';

export default class JasaTitip extends Component {
  constructor(props) {
    super(props);
    this.state = {
	    nama:'',
        alamat:'',
        listData:[],
        idEdit:null,
	
			};
  
   this.url = "https://mutawif.co.id/api/muapi/jasatitip.php";
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
         
          </View>
        </View>

        <View>
          <Image style={styles.imgads} source={BannerJastip} />
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
                Jasa<Text style={{color: 'orange'}}> Titip</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                 {this.state.textreal} SR / Item (Rp. {this.state.textrp})
              </Text>
             
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
                <Text style={{color: 'white'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan jasa titip pembelian barang asli dari arab saudi, seperti: pakaian, produk fashion, coklat, al-qur’an, parfum, dll.
                </Text>
              </View>
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
            <Text style={{color: 'white'}}>Harga jasa 50 SR / produk, harga sudah termasuk ongkir ke tempat yang di inginkan customer</Text>
          </View> 
		  <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>2. </Text>
            <Text style={{color: 'white'}}>Pembeli diharapkan memberikan nomor WhatsApp yang bisa dihubungi</Text>
          </View> 
		  <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>3. </Text>
            <Text style={{color: 'white'}}>Harga produk yang dibeli tidak lebih dari 300 USD </Text>
          </View>
		  <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>4. </Text>
            <Text style={{color: 'white'}}>Berat produk yang dibeli tidak lebih dari 2 KG </Text>
          </View>
		  <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>5. </Text>
            <Text style={{color: 'white'}}>Barang akan tiba paling lambat 20 hari dari waktu pemesanan</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('JasatitipOrder', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi ,hargarupiah:this.state.hargarupiah })}>
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
	paddingTop: 60,
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
