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

import {subway, IconBack, IconNasibox} from '../../assets';

export default class MufoodLayanansubway extends Component {
  constructor(props) {
    super(props);
    this.state = {

 
 };
  this.url = "https://mutawif.co.id/api/muapi/muufood_subway.php";
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
			this.setState({harga:json.data.result[0].harga});
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
        {/* <View style={{flex: 1, backgroundColor: 'grey'}}> */}
        {/* tengah */}
        <View>
       
        </View>

        <View>
          <Image style={styles.imgads} source={subway} />
        </View>

        <View
          style={{
            margin: 20,
            display: 'flex',
            justifyContent: 'flex-start',
          }}>
          <View
            style={
              {
                // display: 'flex',
                // flexDirection: 'row',
                // justifyContent: 'space-between',
              }
            }>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 34,
                  textAlign: 'center',
                }}>
                Crispy 
<Text style={{color: 'orange'}}> Chicken</Text>
              </Text>
              <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
                  {this.state.textreal} SR (Rp.  {this.state.textrp})
              </Text>
            </View>
            {/* <View>
              <Image style={{marginTop: 10}} source={IconNasibox} />
            </View> */}
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 20,
              color: 'white',
              fontSize: 18,
              marginBottom: 10,
			  textAlign:'center'
            }}>
            Deskripsi
          </Text>
        
          
          
          <View style={{
             
              marginBottom: 40,
             
            }}>
            <Text style={{color: 'white'}}>Roti italia dengan isian ayam crispy yang dibuat
dengan dada ayam yang dibumbui khas
subway, keju cheddar putih olahan selada,
tomat, bawang merah, acar, dan saus mustard
madu berasap</Text>
            
          </View>
        </View>

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('MufoodOrder',{resto:'Restoran Kudu', harga:this.state.harga,telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi ,hargarupiah:this.state.hargarupiah })}>
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
