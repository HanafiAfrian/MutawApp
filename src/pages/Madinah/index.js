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

import {BannerJmagnet, BannerAlula, BannerBadar} from '../../assets';

export default class Madinah extends Component {
 constructor(props) {
    super(props);
    this.state = {};
	
	  this.url = "https://mutawif.co.id/api/muapi/ziarah_madinah.php";
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
                Madinah
              </Text>
            </View>

            <TouchableOpacity style={styles.iconbackstyle}>
              <Icon name="info-circle" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image style={styles.imgads} source={BannerJmagnet} />
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
                  color: 'white',
                }}>
                Jabal Magnet +
                <Text style={{color: 'orange'}}> Percetakan Al-Quran</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                {this.state.textreal}  SR / Org (Rp. {this.state.textrp})
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
                  Jabal magnet adalah sebuah bukit yang berjarak sekira 60
                  kilometer dari Kota Madinah. Merupakan kawasan bukit yang
                  berupa endapan lava alkali basaltik yang kemudian terbentuk
                  dan memberi pengaruh magnetik. Dan mengunjungi Percetakan Al
                  Quran terbesar di dunia yang telah berdiri sejak tahun 1984 M.
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
            <Text style={{color: 'white'}}>Snack roti+jus+air mineral</Text>
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
          <Image style={styles.imgads2} source={BannerAlula} />
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
                  color: 'white',
                }}>
                Al Ula + Khaibar +
                <Text style={{color: 'orange'}}> Madain Shaleh</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                {this.state.textrealjns2} SR / Org (Rp. {this.state.textrpjns2})
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
                  Al-ʿUla, adalah sebuah kota sekitar 110 km sebelah barat daya
                  dari Tayma di Arab Saudi bagian utara- barat. Al-Ula secara
                  historis terletak di Rute Dupa. Ini adalah ibu kota kuno
                  Lihyanites. Terkenal karena sisa-sisa arkeologi, berusia lebih
                  dari 2000 tahun, mengunjungi tempat terjadinya Pertempuran
                  Khaibar yaitu tempat terjadinya pertempuran yang terjadi
                  antara umat Islam yang dipimpin Nabi Muhammad dengan umat
                  Yahudi yang hidup di oasis Khaybar, sekitar 150 km dari
                  Madinah, Arab Saudi. Mada'in Salih merupakan situs warisan
                  dunia yang ditetapkan UNESCO pada tahun 2008 yang pertama di
                  Arab Saudi. Terdapat sekitar 131 monumen makam batu dengan
                  relief yang detail dari zaman Nabatea
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
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>2. </Text>
            <Text style={{color: 'white'}}>Include bus</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>3. </Text>
            <Text style={{color: 'white'}}>
              2x Snack ( roti+jus+air mineral) dan 1x makan siang
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>4. </Text>
            <Text style={{color: 'white'}}>Include guide tour</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>5. </Text>
            <Text style={{color: 'white'}}>Include permit</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>6. </Text>
            <Text style={{color: 'white'}}>
              Min. pemesanan untuk 30 orang/ bus
            </Text>
          </View>
        </View>
        <View>
          <Image style={styles.imgads2} source={BannerBadar} />
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
                  color: 'white',
                }}>
                Badar +<Text style={{color: 'orange'}}> Jabal Malaikah</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                {this.state.textrealjns3} SR / Org (Rp.{this.state.textrpjns3})
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
                  Mengunjugi tempat terjadinya perang badar, dan tempat turunnya
                  para malaikat yang datang untuk membantu Nabi dan para Sahabat
                  selama terjadinya Perang Badar.
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
              2x Snack ( roti+jus+air mineral) dan 1x makan siang
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

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('MadinahLayanan', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi, hargarupiah:this.state.hargarupiah,hargarupiahjns2:this.state.hargarupiahjns2,hargarupiahjns3:this.state.hargarupiahjns3  })}>
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
