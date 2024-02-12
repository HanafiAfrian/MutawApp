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

import {BannerKursiroda} from '../../assets';

export default class Kursiroda extends Component {
  constructor(props) {
    super(props);
    this.state = {};
	
	  this.url = "https://mutawif.co.id/api/muapi/kursiroda.php";
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
          <Image style={styles.imgads} source={BannerKursiroda} />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
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
                IBADAH (Thawaf & Sa'i) :   {this.state.textreal} SR /  Hari (Rp. {this.state.textrp})
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                SEHARI-HARI: {this.state.textrealjns2} SR / Hari (Rp. {this.state.textrpjns2})
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                SEWA: {this.state.textrealjns3}  SR / Hari (Rp.{this.state.textrpjns3})
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
            Ibadah
          </Text>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Menyediakan kursi roda dengan kualitas yang baik dan nyaman
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan orang membantu mendorong kursi roda
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>3. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Mendatangkan kursi roda ketempat dan waktu yang diinginkan
                  customers
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>4. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Harga dan sewa hanya untuk saat tawaf dan sa’i
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
            Sehari - hari
          </Text>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan kursi roda dengan kualitas yang baik dan nyaman
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan orang membantu mendorong kursi roda
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>3. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Mendatangkan kursi roda ketempat dan waktu yang diinginkan
                  customers
                </Text>
              </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>4. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Harga dan sewa hanya perjalanan untuk ibadah sholat 5 kali sehari
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
            Sewa Kursi Roda
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>1. </Text>
            <Text style={{color: 'white'}}>
              Menyediakan kursi roda dengan kualitas yang baik dan nyaman
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>2. </Text>
            <Text style={{color: 'white'}}>
              Mendatangkan kursi roda ketempat dan waktu yang diinginkan
              customers
            </Text>
          </View>
       
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'white'}}>3. </Text>
            <Text style={{color: 'white'}}>
              Tidak menyediakan orang untuk membantu mendorong kursi roda{' '}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('KursirodaOrder', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi, hargarupiah:this.state.hargarupiah,hargarupiahjns2:this.state.hargarupiahjns2,hargarupiahjns3:this.state.hargarupiahjns3    })}>
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
