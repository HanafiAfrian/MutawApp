import { Text, StyleSheet, View, Image, TouchableOpacity,PermissionsAndroid,  ScrollView, } from 'react-native';
import React, { Component ,useEffect} from 'react';
import {ProfilePhoto, ProfileWanita} from '../../assets';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Sound from 'react-native-sound';







export default class Chat extends Component {
	constructor(props) {
    super(props);
    this.state = {
		currentCount: 5,
		   nama: '',
      telepon: '',
      alamat: '',
	  metode_pembayaran :'',
      listData: [],
	 listData1: [],
	  listData2: [],
      idEdit: null,
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
  this.url = 'https://mutawif.co.id/api/muapi/chatgroup.php';
    this.url1 = 'https://mutawif.co.id/api/muapi/chat.php';
	
   }
   
       timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
 componentDidMount()  {
	 		     this.intervalId = setInterval(this.timer.bind(this), 1000);
	   this.ambilListData();
 this.ambilListData1();
  this.ambilListData2();
	 this.requestLocationPermission();
	 Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
	  Geolocation.getCurrentPosition(info => console.log(info));
 }
 componentWillUnmount() {
    clearInterval(this.intervalId);
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

  async ambilListData() {
  var nama =	this.props.route.params.nama; 
		
var pesan = this.state.pesan;

    await fetch(this.url + '/?op=ambildata&&nama='+nama)
      .then(response => response.json())
      .then(json => {
this.setState({jumlahpesan:json.data.result[0].jumlahpesan});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		this.intervalID = setTimeout(this.ambilListData.bind(this), 1000);
	 clearInterval(this.intervalId);
	
	
      })
      .catch(error => {
        console.log(error);
      });
  }
 

  async ambilListData1() {
  var nama =	this.props.route.params.nama; 
	
var pesan = this.state.pesan;
	 let control_Local, control_Online;

  let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
	var username = 'Mutawif';
    await fetch(this.url1 + '/?op=hitungpesan&nama='+nama)
      .then(response => response.json())
      .then(json => {
this.setState({jumlah:json.data.result[0].jumlah});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
		this.intervalID = setTimeout(this.ambilListData1.bind(this), 1000);
		 clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
	  
	   	
		  
  } 
   klikUpdatebunyi(){
		
	  var nama =	this.props.route.params.nama; 
      if(this.state.nama != ''){
        alert('Silakan masukkan nama dan alamat');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url1+"/?op=updatebunyi";
          }else{
            var urlAksi = this.url1+"/?op=updatebunyi";
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"nama="+nama
          })
          .then((response)=>response.json())
          .then((json)=>{
              
              
          })
      }
  }
 
  
  
  async ambilListData2() {
  var nama =	this.props.route.params.nama; 
	
var pesan = this.state.pesan;
	let control_Local, control_Online;
	let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
	var username = 'Mutawif';
    await fetch(this.url1 + '/?op=hitungbunyi&nama='+nama)
      .then(response => response.json())
      .then(json => {
this.setState({jumlahbunyi:json.data.result[0].jumlahbunyi});

        console.log('Hasil yang didapatbunyi: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
		this.intervalID = setTimeout(this.ambilListData2.bind(this), 1000);
		 clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
	  
	
	 
		  
  } 
  
  
   

	
  
  
  render() {
   var nama =	this.props.route.params.nama; 
	  

	  
	  
	  
	  
	  
		
		 
	
	
	
	 

		 
    return (
	  <ScrollView>

      <SafeAreaView style={styles.container}>
      
        


           {this.state.listData.map((val, index) => (
		    
		    <View style={styles.chatContain} key={index} >
        
	
                    
            <View style={{marginLeft:10, marginTop:-28 ,width:300}}>
				     <TouchableOpacity
         onPress={() => this.props.navigation.replace('ChatDetail',{username:val.kepada, nama: val.dari, nmgrp:val.nm_grp, nmgrp1:val.nm_grp1,tetap:nama })}
         >
                  <Text>
                                  
                       <Text style={styles.dari}>
					  
		   {val.dari} 
					 
                      </Text>
                 
                  </Text>
				   </TouchableOpacity> 
				     <TouchableOpacity
         onPress={() => this.props.navigation.replace('ChatDetail',{username:val.kepada, nama: val.dari, nmgrp:val.nm_grp, nmgrp1:val.nm_grp1,tetap:nama })}
         >
				      <Text style={styles.lastText}>
					 {val.pesan}
					 
					  </Text>
					   </TouchableOpacity>   
            </View>
			  <Text style={{ fontSize:18,
			width:25, height:25, textAlign:'right', 
					borderRadius:50, color:'green', fontWeight:'bold', 
					textAlign:'center',  position: 'absolute',   left:-18, top:-60 }} >
                     {val.jumlahpesan}  
                      </Text>
					  
            <View>
			
                <Text style={styles.waktu}>{val.tanggal}</Text>
				
            </View>
			
        </View>
		
		
	
                ))}
       
  

            
      

      </SafeAreaView>
	    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

    container : {
        padding:30,
 marginTop:50,
        margin:10
    },

    chatContain :{
        flexDirection:'row', justifyContent:'space-between'
    },

    imgProfil : {
        width:50,
        height:50,
        borderRadius:50,
    },

    user : {
        fontWeight:'bold', fontSize:16,color:'grey'
    },

    waktu : {
        color:'orange', 
        position:'absolute',
        marginLeft:-100,
        fontSize:12,
		marginTop:-28
    },

   dari : {
        fontSize:16,
        color:'black', 
        fontSize:20, 
     fontWeight:'bold', 
   
    },
	
    lastText : {
        fontSize:16,
        color:'grey', 
        fontSize:17, 
        marginTop:10,
        
    },
	

});
