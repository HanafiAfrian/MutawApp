import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image,TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from './Style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {BannerFood, IconAirport, IconNasibox} from '../../assets';

export default class Pesanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
	  metode_pembayaran :'',
      listData: [],
	  listData1: [],
	   listData2: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/belumselesai.php';
  }
  componentDidMount() {
    this.ambilListData();
	 this.ambilListData1();
	 	 this.ambilListData2();
  }

  async ambilListData() {
    var telepon = this.props.route.params.telepon;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	
    await fetch(this.url + '/?op=ambildata&telepon=' + nama_lengkap)
      .then(response => response.json())
      .then(json => {
 this.setState({jumlah:json.data.result[0].jumlah});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		
      })
      .catch(error => {
        console.log(error);
      });
  }
   async ambilListData1() {
    var telepon = this.props.route.params.telepon;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	
    await fetch(this.url + '/?op=ambildataporses&telepon=' + nama_lengkap)
      .then(response => response.json())
      .then(json => {
 this.setState({jumlahproses:json.data.result[0].jumlahproses});
        console.log('Hasil 2 yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
		
      })
      .catch(error => {
        console.log(error);
      });
  }
  
     async ambilListData2() {
    var telepon = this.props.route.params.telepon;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	
    await fetch(this.url + '/?op=ambildatakirim&telepon=' + nama_lengkap)
      .then(response => response.json())
      .then(json => {
 this.setState({jumlahkirim:json.data.result[0].jumlahkirim});
        console.log('Hasil 3 yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData2: json.data.result});
		
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  klikMenu1(){
	     	  
	  
	  
   var telepon = this.props.route.params.telepon;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	var email_pribadi = this.props.route.params.email_pribadi;
	
	
	
	  
	  	  if (this.state.metode_pembayaran == 'CASH ON DELIVERY')
	  {
		  alert('Minimal Jumlah Order 2 KG ');  
		  
	  }
	  
	  else
	  {
  alert('Minimal Jumlah Order 10 KG ');  
                        }
	  }
  
  
  render() {
	  
	  
	  
      var telepon = this.props.route.params.telepon;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	var email_pribadi = this.props.route.params.email_pribadi;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#eaeaea'}}>
       
        <View
          style={{
			   marginTop:20,
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            height: 80,
            backgroundColor: 'white',
            marginBottom: 20,
            textAlign: 'center',
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 10,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.replace('Pesanan',{telepon:telepon, nama_lengkap:nama_lengkap })}
              style={{
                borderRadius: 50,
                backgroundColor: '#00878c',
                padding: 10,
                marginBottom: 5,
                marginTop: 20,
              }}>
              <Text style={{color: 'white'}}>Belum Bayar</Text>
			  
            </TouchableOpacity>
			 <View>
        
		   
					
					 {this.state.listData.map((val, index) => (
                 
                                  
                    <Text style={{color: 'red', fontSize:15,
			width:25, height:25, textAlign:'right', backgroundColor:'yellow',
					borderRadius:50, color:'red', fontWeight:'bold', 
					textAlign:'center',  position: 'absolute', right:0, top:-55 }} key={index}>
                     {val.jumlah} 
                      </Text>
                  
               
                ))}
					
					
					
					
					
		  </View>
          </View>
          <TouchableOpacity
		  
            onPress={() =>
              this.props.navigation.replace('Diproses',{telepon:telepon, nama_lengkap:nama_lengkap })
            }>
            <View style={{borderRadius: 50,
                backgroundColor: '#eaeaea',
                padding: 10,
                marginBottom: 5,
                marginTop: 20,}}>
               <Text style={{fontSize: 14, color: "",}}>Diproses</Text>
            </View>
			 <View>
        
		   {this.state.listData1.map((val, index) => (
                 
                                  
                    <Text style={{color: 'red', fontSize:15,
			width:25, height:25, textAlign:'right', backgroundColor:'yellow',
					borderRadius:50, color:'red', fontWeight:'bold', 
					textAlign:'center',  position: 'absolute', right:0, top:-55 }} key={index}>
                     {val.jumlahproses} 
                      </Text>
                  
               
                ))}
		  </View>
          </TouchableOpacity>
		  
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Dikirim',{telepon:telepon, nama_lengkap:nama_lengkap })
            }>
              <View style={{borderRadius: 50,
                backgroundColor: '#eaeaea',
                padding: 10,
                marginBottom: 5,
                marginTop: 20,}}>
               <Text style={{fontSize: 14, color: "",}}>Dikirim</Text>
            </View>
			 <View>
        
				   {this.state.listData2.map((val, index) => (
                 
                                  
                    <Text style={{color: 'red', fontSize:15,
			width:25, height:25, textAlign:'right', backgroundColor:'yellow',
					borderRadius:50, color:'red', fontWeight:'bold', 
					textAlign:'center',  position: 'absolute', right:0, top:-55 }} key={index}>
                     {val.jumlahkirim} 
                      </Text>
                  
               
                ))}
		  </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace('Selesai',{telepon:telepon, nama_lengkap:nama_lengkap })
            }>
              <View style={{borderRadius: 50,
                backgroundColor: '#eaeaea',
                padding: 10,
                marginBottom: 5,
                marginTop: 20,}}>
               <Text style={{fontSize: 14, color: "gray"}}>Selesai</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 1 */}
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 5,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,

              marginRight: 20,
            }}>
            <View>
              <View style={style.viewData}>
                {this.state.listData.map((val, index) => (
                  <View
                    key={index}
                    style={{
                      display: 'flex',
					 width:320,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: '#eaeaea',
                      marginBottom: 10,
                      paddingRight: 10,
                      marginRight: 73,
                      borderRadius: 10,
                      paddingLeft: 10,
                      paddingTop: 10,
                      paddingRight: 10,
                      marginLeft: -10,
                    }}>
                    <View>

                 <Image source={{uri:'https://mutawif.co.id/api/muapi/images/keranjang.png'}} style={{width:40, height:40}} />
 <Text
                          style={{
                          
							color: "gray",
                            marginLeft: 0,
							 padding: -10,
							marginTop:30,
                          }}>
                         {val.metode_pembayaran} </Text>  



			 <Text> 
						 {val.waktu_pemesanan} - {val.jam_pemesanan}
						 
    </Text>

						 
				  </View>
                    <View style={{marginBottom: 20}}>
                      <Text
                        style={{
                          textAlign: 'right',
                          fontWeight: 'bold',
                          fontSize: 18,
                          // marginLeft: 120,
                          marginRight: 20,
                          paddingRight: 10,
							color: "gray",
                          width: '100%',
                        }}>
                     {val.nama_produk} 
                      </Text>
                      <Text
                        style={{
                          color: 'red',
                          textAlign: 'right',
                          fontWeight: 'bold',
                          paddingRight: 10,
                          // marginRight: 10,
                        }}>
                      {val.RP}  {val.totalrupiah} 
                      </Text>
					     <Text
                        style={{
                          color: 'gray',
                          textAlign: 'right',
                          fontWeight: 'bold',
                          paddingRight: 10,
                          // marginRight: 10,
                        }}>
 
						   {val.totalreal}  {val.SR}  
                      </Text>
                      <Text
                        style={{
                          textAlign: 'right',
                          fontWeight: 'bold',
                          paddingRight: 10, color:'red'
                          // marginRight: 10,
                        }}>
                     {val.X} {val.jumlah_order}
                      </Text>
                      <View
                        style={{
                          justifyContent: 'space-between',
                          display: 'flex',
                          flexDirection: 'row',
                        }}>
                       
			
  <Text
                          style={{
                          
							color: "gray",
							marginTop: 5,
                            marginLeft: -193,
                          }}>
					
                        </Text>
                        <TouchableOpacity
                                           onPress={() =>
                            this.props.navigation.navigate('Pembayaran',{
							jumlah_order:val.jumlah_order,
								no_va:val.no_va,
								metode_pembayaran:val.metode_pembayaran,
								totalreal:val.totalreal,
								totalrupiah:val.totalrupiah,
								nama_produk:val.nama_produk,
								batas_tanggal : val.waktu_pemesanan,
								batas_jam:val.jam_pemesanan
							},
							)
                          }
                          style={{
                            backgroundColor: 'orange',
                            borderRadius: 5,
                            padding: 10,
                           Width: 80,
						   Height : 10,
                          
                            marginLeft: 0,
                            paddingRight: 2,
                            marginRight: 0,
                          }}>
                          <Text> {val.lihat} </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
					
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#eaeaea',
              marginTop: 10,
            }}></View>
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}></View>
			 
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 20,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
