import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput,   PermissionsAndroid,Button, Image,TouchableOpacity,Modal,SafeAreaView,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {topimg, logowic} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {ModalPopup} from '../../components/ModalPopup';

import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
		    show: false,
	isVisible: true,
	show1: false ,
    selectedcat: "",
	selectedcat1: "",
	  selectedcat2: "",
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
	 timestamp: 0,
  }
  };
   this.url = 'https://mutawif.co.id/api/muapi/panichajipribadi.php';
    this.url1 = 'https://mutawif.co.id/api/muapi/panichajipribadikarom.php';
	    this.url2 = 'https://mutawif.co.id/api/muapi/daftar.php';
	 }
	 
	 
	  componentDidMount() {
	   this.ambilListData();
	      this.ambilListData1();
		    this.ambilListData2();
	 this.requestLocationPermission();
	 Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
	  Geolocation.getCurrentPosition(info => console.log(info));
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
    var telepon = this.props.route.params.name;
	var name = this.props.route.params.name;
	
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
		    this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
                this.setState({ email_pribadi: json.data.result[0].email_pribadi })
                this.setState({ telepon: json.data.result[0].telepon })
				 this.setState({ nama: json.data.result[0].nama })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		
		
		
      })
      .catch(error => {
        console.log(error);
      });
  }
   async ambilListData1() {
    var telepon = this.props.route.params.name;
	var name = this.props.route.params.name;
	
    await fetch(this.url1)
      .then(response => response.json())
      .then(json => {
		    this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
                this.setState({ email_pribadi: json.data.result[0].email_pribadi })
                this.setState({ telepon: json.data.result[0].telepon })
				 this.setState({ nama: json.data.result[0].nama })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
		
		
		
      })
      .catch(error => {
        console.log(error);
      });
  }
  
	 async ambilListData2() {
    var telepon = this.props.route.params.name;
	var name = this.props.route.params.name;
	
    await fetch(this.url2)
      .then(response => response.json())
      .then(json => {
		    this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
                this.setState({ email_pribadi: json.data.result[0].email_pribadi })
                this.setState({ telepon: json.data.result[0].telepon })
				 this.setState({ nama: json.data.result[0].nama })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData2: json.data.result});
		
		
		
      })
      .catch(error => {
        console.log(error);
      });
  } 
	 
  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
	
  }

async onValueChangeCat1(value) {
    this.setState({ selectedcat1: value });
	
  }
  async onValueChangeCat2(value) {
    this.setState({ selectedcat2: value });
	
  }
 klikSimpan(){
      if(this.state.selectedcat == null){
       
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=create";
          }
          var nama = 	this.props.route.params.name;
var jenis = 	'Panic';
	     var telepon = this.props.route.params.telepon;
 var nama =this.props.route.params.nama_lengkap; 
          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
			  
              body:"pilih_travel="+this.state.selectedcat+
			   "&telepon="+telepon+
			    "&nama="+nama+
			  "&jenis="+jenis+
			  "&pilih_grup="+this.state.selectedcat1+
			  	"&lokasi="+this.state.selectedcat2+
			  "&latitude="+  this.state.userLocation.coords.latitude+ 
			  "&longitude="+  this.state.userLocation.coords.longitude
          })
          .then((response)=>response.json())
 
		 .then(responseJson => {
 alert('Panic!! Informasi Akan dikirim Kepada Ketua Kloter dan Karom anda');
			   this.props.navigation.navigate('Splash')






			 if (responseJson == 'ok') {
				 
				 
		 this.props.navigation.replace('Auth');
                try {
                  var user = {
                    Name: nama,
                    Age: this.state.selectedcat,
                    Email: '',
                  };
                  AsyncStorage.setItem('UserData', JSON.stringify(user));
                  navigation.replace('Auth');
                } catch (error) {
                  console.log(error);
                } 
				 
				 
				 
				 
				 
			 }
		
		
      })
      .catch(error => {
        console.log(error);
      });
      }
  }
  
    showLoader() {
    this.setState({ isVisible: true });
  }

  hideLoader() {
    this.setState({ isVisible: false });
  }

  render() {
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi; 
    return (
	      <ScrollView>
	 <View>
           <View style={styles.welcomebg}>
       

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 40,
            paddingRight: 20,
            marginTop: 30,
			
          }}>
          
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Panichajipribadi',{telepon:telepon, nama_lengkap:nama_lengkap})}>
            <Text
              style={{
                marginBottom: 10,
                fontWeight: 'bold',
                fontSize: 16,
                color: '#fff',
                // marginBottom: 40,
              }}>
       Panic
            </Text>
          </TouchableOpacity>
       

          <TouchableOpacity onPress={() => this.props.navigation.navigate('PanicOtherspribadihaji',{telepon:telepon, nama_lengkap:nama_lengkap})}>
            <Text
              style={{
                marginBottom: 10,
                fontWeight: 'bold',
                fontSize: 16,
                color: '#fff',
                // marginBottom: 40,
              }}>
              Bantu Teman
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 4,
            borderBottomColor: 'orange',
            width: '50%',
          }}></View>
      </View>
	 
     
 
      <View>
        <View style={{width: '100%'}}>
  
           <Text style={{ marginTop: 10,marginLeft: 20,  fontWeight: 'bold', fontSize: 16, color:'gray'}}>
         Pilih Nomor Kloter Keberangkatan
        </Text>
 <View style={styles.pickerStyle}>
         <Picker
            mode="dropdown"
            style={styles.pickStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
               {this.state.listData.map((val,index)=>(
                   
                       <Picker.Item
                color="orange"
                label={val.nama_travel}
                value={val.nama_travel}
                index={index}
              />
						))}
						   </Picker>
          </View>
		   <Text style={{marginTop: 10,marginLeft: 20,  fontWeight: 'bold', fontSize: 16, color:'gray'}}>
          Pilih Ketua Karom Keberangkatan
        </Text>
		   <View style={styles.pickerStyle}>
         <Picker
            mode="dropdown"
            style={styles.pickStyle}
            selectedValue={this.state.selectedcat1}
            onValueChange={this.onValueChangeCat1.bind(this)}
          >
               {this.state.listData1.map((val,index)=>(
                   
                       <Picker.Item
                color="orange"
                label={val.nama_g}
                value={val.nama_g}
                index={index}
              />
						))}
						   </Picker>
						   
          </View>
		   <Text style={{marginTop: 10,marginLeft: 20,  fontWeight: 'bold', fontSize: 16, color:'gray'}}>
          Pilih Embarkasi Keberangkatan
        </Text>
		   <View style={styles.pickerStyle}>
         <Picker
            mode="dropdown"
            style={styles.pickStyle}
            selectedValue={this.state.selectedcat2}
            onValueChange={this.onValueChangeCat2.bind(this)}
          >
               {this.state.listData2.map((val,index)=>(
                   
                       <Picker.Item
                color="orange"
                label={val.namakloter}
                value={val.namakloter}
                index={index}
              />
						))}
						   </Picker>
						   
          </View>
      <View
        style={{
          width:'100%',
		  paddingHorizontal:20,
          alignSelf: 'center',
          borderRadius: 50,
          marginTop: 20,
		  
        }}>
        
      
		
		

      </View>
	  
	  
 </View>
        <View>
          <CustomButton
            style={styles.cbt}
            title="Konfirmasi"
            color="orange"
            onPressFunction={() => this.klikSimpan()}
          />
        </View>
		     <View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.show1}>
			   <WebView
   source={{ uri: 'https://mutawif.co.id/api/daftarb2b/uploadpanic.php?jenis=Panic' }}
   style={styles.webViewStyle}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   onLoadStart={() => this.showLoader()}
   onLoad={() => this.hideLoader()}
 />
              <SafeAreaView>
               
                  <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                      <View>
					  
					  
					  
					  
					  
					  
					  
					  
					  
					<View>
   


  
 
    

  
   
    
  
  </View>
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  
					  </View>

                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          marginTop: 20,
                          marginBottom: 40,
                        }}>
                        <TouchableOpacity
                          onPress={() => this.setState({show1: false})}
                          style={{
                            width: '90%',
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            margin: 20,
                            borderRadius: 5,
                            backgroundColor: '#0d7883',
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 14,
                              fontWeight: 'bold',
                            }}>
                            Kembali
                          </Text>
                        </TouchableOpacity>

                        
                      </View>
                    </View>
                  </View>
             
              </SafeAreaView>
            </Modal>
          </View>
      </View>
	     </View>
		  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pilihtrvl: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  },
  cbt: {
    marginBottom: 20,
    borderRadius: 10,
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 70,
  },
  viewStyle: {
    paddingVertical: '30%',
    // padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },

  logoico: {
    width: 350,
    height: 50,
    marginTop: -150,
    marginBottom: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pickerStyle: {
    marginTop: 20,
    width: '97%',
    marginLeft: 4,
    height: 60,

 backgroundColor: 'orange',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 10,
  },
  pickStyle: {
    color: 'white',
    fontSize: 16,
    processColor: 'red',
    ColorValue: 'red',
  },
  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
     height: 65,
    backgroundColor: '#1b2333',
  },

  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
  inputdp: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 10,
	color:'black'
  },
  roundButton1: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },
    searchIcon: {
    marginLeft: 10,
    marginTop: 15,
	color:'black'
  },
});
