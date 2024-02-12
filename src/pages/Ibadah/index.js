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

import {BannerIbadah} from '../../assets';

export default class Ibadah extends Component {
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
  this.url = "https://mutawif.co.id/api/muapi/ibadah.php";
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
		this.setState({textrpjns2:json.data.result[0].textrpjns2});
		this.setState({hargarupiahjns2:json.data.result[0].hargarupiahjns2});
		
		
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
          <Image style={styles.imgads} source={BannerIbadah} />
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
                Badal Haji {this.state.textrp} IDR/Orang
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                 Badal Umrah {this.state.textrpjns2} IDR/Orang
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
            Badal Haji
          </Text>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white', textAlign: 'justify'}}>
                  Menyediakan jasa untuk membantu Menghajikan jemaah yang telah
                  dikategorikan wajib haji ,tapi tidak mampu melakukannya
                  sendiri karena adanya halangan yang dibolehkan oleh syariat
                  Islam.
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
            Badal Umrah
          </Text>

          <View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>1. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Menyediakan jasa untuk membantu Mewakili Jemaah untuk umroh
                  ,Jemaah tidak mampu melakukannya sendiri karena adanya
                  halangan yang dibolehkan oleh syariat Islam.
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{color: 'white'}}>2. </Text>
              </View>
              <View>
                <Text style={{color: 'white'}}>
                  Mendapatkan dokumentasi dan sertifikat atas nama pribadi.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('IbadahLayanan', {telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi ,hargarupiah:this.state.hargarupiah,hargarupiahjns2:this.state.hargarupiahjns2 })}>
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
