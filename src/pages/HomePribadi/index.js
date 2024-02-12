import {bold} from 'chalk';
import React, {Component , useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';
import Adzan from './../../assets/icons/icnadzan.png';




import {
  View,
  Button,
  StyleSheet,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  ImageBackground,
} from 'react-native';
import 'react-native-gesture-handler';
import moment from 'moment'
import 'moment/locale/id'
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import {Directions} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku,LogoTag} from '../../assets';
import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  IconHamburger,
    IconPanic,
  IconWallet,
  IconScan,
  IconTf,
  BannerOne,
  BannerTwo,
  BannerThree,
} from '../../assets';
import {
  IconNasibox,
  IconAirport,
  IconMutawif,
  IconMutawifah,
  IconSim,
  IconMoney,
  IconCheckin,
  IconZiarah,
  IconKursiroda,
  IconHospital,
  IconMarried,
  IconIbadah,
  IconDam,
  IconHajaswad,
  IconMufood,
  IconMassage,
  IconTaxi,
  IconLaundry,
  BgMesjid,
  IconJastip,
} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
class Tanggalhijriyah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tanggal: '',
   
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/tanggal_hijriyah.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
 
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
  
    return (
         <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text  style={{
                      color: 'white',
                      marginLeft: 0,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>{val.tanggal} H</Text>

                  
                ))
            }
        </View>
    );
  }
}

 function Jam() {
	 const date= new Date()

  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <View className="App">
      <Text style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </Text>
    </View>
  );
}

 class Ambilwaktu extends Component {
  render() {
    const date= new Date()

 
    return (
      <View>
        <Text style={{
                      color: 'white',
                      marginLeft: -3,
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}> {moment(date).format('LL')} M</Text>
      
 
      </View>
    )
  }
}class Ambiljam extends Component {
  render() {
    const date= new Date()
    
 var jam =  moment(date).format('LLLL')
     var res = jam.substring(27, 40);
    return (
      <View>
        <Text style={{
                      color: 'white',
                      marginLeft: 0,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>  {res}  </Text>
      
 
      </View>
    )
  }
}




 class Lokasi extends Component {
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
 
   }
 componentDidMount()  {
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
  render() {
 
 return (
       
 <View style={styles.containermap}>
   <MapView style={styles.map}//window pake Dimensions
   region={{
      latitude: this.state.userLocation.coords.latitude,
      longitude: this.state.userLocation.coords.longitude,
      latitudeDelta: 0.099,
      longitudeDelta: 0.099 
   }} >
   
   <Marker
	coordinate={{
      latitude: this.state.userLocation.coords.latitude,
      longitude: this.state.userLocation.coords.longitude,
   }}
   key ={'user'}
   title={"Lokasi Saya"}
   description={""}   
   pinColor={"#FF0000"}
   />
     
   <Marker
   coordinate={{
      latitude: 3.5752558,
      longitude: 98.6816577,
   }}
   key ={'userpelanggan'}
   title="Lokasi Custamer"
   pinColor={"#0000ff"}/>
   </MapView>
    </View>
           
 )
 
 }
 }

 function Audio() {

 
  let control_Local, control_Online;
  let onlineSound = 'https://mutawif.co.id/api/sound.mp3';

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (control_Local) control_Local.release();
      if (control_Online) control_Online.release();
    };
  }, []);


  const playSound_onLine = () => {

    control_Online = new Sound(onlineSound, '', (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      control_Online.play(() => {
        control_Online.release();
      });
    });

  }

  


  return (

    <View>

      <View  />

      <View>

        <TouchableOpacity activeOpacity={0.7}  onPress={playSound_onLine}>

          <Text > Play </Text>

        </TouchableOpacity>

       
      </View>

    </View>

  );
}




export default class Home extends Component {
	
	
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
	  listData4: [],
	   listData5: [],
		 listData6: [],
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
	   this.url4 = 'https://mutawif.co.id/api/muapi/hitungbunyipanic.php';
	      this.url5 = 'https://mutawif.co.id/api/muapi/berita.php';
		this.url6 = 'https://mutawif.co.id/api/muapi/iklan.php';
   }timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
 componentDidMount()  {
	 		 
	   this.ambilListData();
 this.ambilListData1(); 
 this.ambilListData4();
   this.ambilListData5();
   this.ambilListData6();
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
  var nama =	this.props.route.params.name; 
		
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
  var nama =	this.props.route.params.name; 
	
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
  
  
  
    async ambilListData4() {
  var email =	this.props.route.params.email; 
	
var pesan = this.state.pesan;
	 let control_Local, control_Online;

  let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
	var username = 'Mutawif';
    await fetch(this.url4 + '/?op=ambildata&nama='+ email)
      .then(response => response.json())
      .then(json => {
this.setState({jumlahnotive:json.data.result[0].jumlahnotive});

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData4: json.data.result});
		this.intervalID = setTimeout(this.ambilListData4.bind(this), 1000);
		 clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
	  
	   	
		  
  }

  async ambilListData5() {
 
    await fetch(this.url5)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData5: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

   async ambilListData6() {
 
    await fetch(this.url6)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData6: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  
   klikUpdatebunyi(){
		
	  var nama =	this.props.route.params.name; 
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
  var nama =	this.props.route.params.name; 
	
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
	  
	
	     if (this.state.jumlah > this.state.jumlahbunyi )
		
		{
	
	 control_Online = new Sound(onlineSound, '', (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      control_Online.play(() => {
        control_Online.release();
      });
    });
	this.klikUpdatebunyi();
		}
	  
	   else
		
		{
	
	 control_Online = new Sound(onlineSound, '', (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      control_Online.stop(() => {
        control_Online.release();
      });
    });
	
		}
		  
  } 
  	klikSimpanhaji(){
		 

   var name =	this.props.route.params.name; 
  var kategori =	this.props.route.params.kategori; 
    var age =	this.props.route.params.age; 
	  var email =	this.props.route.params.email; 
   

			     if (kategori == 'hajipribadi')
   {

		this.props.navigation.navigate('Panichajipribadi',{telepon:age, nama_lengkap:name, email_pribadi: email })
    }	
	
	
	
			     else if (kategori == 'ketuakarom')
   {

		this.props.navigation.navigate('Panichajipribadi',{telepon:age, nama_lengkap:name, email_pribadi: email })
    }	
	  else  
		  
		  {
	this.props.navigation.navigate('Panic',{telepon:age, nama_lengkap:name, email_pribadi: email })
  
		  }
  }
	
   render() {
   var name =	this.props.route.params.name; 
  var kategori =	this.props.route.params.kategori; 
    var age =	this.props.route.params.age; 
	  var email =	this.props.route.params.email; 
    return (
      <SafeAreaView style={{backgroundColor: '#eaeaea', flex: 1}}>
        <ScrollView>
		
		
          <View style={{backgroundColor: '#222a32', height: 210, opacity: 0.9}}>
            <ImageBackground
              source={BgMesjid}
              resizeMode="cover"
              style={styles.imagebg}>
              <View style={styles.containeruser}>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                     <Ambilwaktu /> 
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    <Tanggalhijriyah /> 
                  </Text>
                </View>

                
                <TouchableOpacity 
				 onPress={() =>  this.klikSimpanhaji()}>
                  <Image style={styles.icondrawer} source={IconPanic} /> 
                </TouchableOpacity>
              </View>

              <View style={styles.container}>
                <View>
			
 <Text style={styles.saldo1}>Assalamualaikum {name}</Text>
                  <Text style={styles.saldo2}>
                  <Jam />
                    <Text style={{fontSize: 14, fontWeight: 'normal'}}></Text>
                  </Text>
                 
                </View>
              </View>
            </ImageBackground>
          </View>
          <View>
            <View style={styles.logotagicon}>
              <View style={styles.logosub}>
               <Image
                  source={LogoTag}
                  style={styles.logo}
                />
              </View>
            </View>
            {/* Button Top */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',

                height: 70,
                elevation: 1,
                borderRadius: 27,
                zIndex: 0,
                marginTop: -30,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                 <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Profil',{telepon:age, nama_lengkap:name, email_pribadi: email })}>
                   <Image
                    source={IconProfilku}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color: "gray"}}>Profil</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
				<TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Chat',{nama:name})}>
                <Image
                  source={Chat}
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 30,
					marginRight: -12,
                    alignSelf: 'center',
                  }}
                />
			  <View>
       <Text style={{color: 'red', fontSize:15,
			width:25, height:25, textAlign:'right', backgroundColor:'green',
					borderRadius:50, color:'white', fontWeight:'bold', 
					textAlign:'center',  position: 'absolute',   right:-38, top:-30 }} >{this.state.jumlah}</Text>
					
					
					
      </View>
                <Text style={{marginBottom: 20, marginRight: -50, color: "gray"}}>Chat</Text>
  </TouchableOpacity>           
		   </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
				  
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Pesanan',{telepon:age, nama_lengkap:name })}>
                  <Image
                    source={Pesanan}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color: "gray"}}>Pesanan</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* End Button Top */}
            {/* End Button Top */}
            <View style={styles.maincontain}>
             <View style={styles.rowicon}>
             <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Ricebox', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconNasibox} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray", }}>
                 Rice Box AirPort
               </Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Airport', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconAirport} />
               <Text style={{textAlign: 'center', fontSize: 10 ,color: "gray"}}>
                 Airport Handling
               </Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Mutawif', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconMutawif} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                 Mutawif
               </Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Kursiroda', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconKursiroda} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                 Wheel Chair
               </Text>
             </View>
           </TouchableOpacity>
             </View>
              <View style={styles.rowicon}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Mutawifah', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMutawifah} />
                  <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                    Mutawifah
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Simcard', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconSim} />
                  <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                    Sim Card
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Moneychanger', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMoney} />
                  <Text style={{textAlign: 'center', fontSize: 11,color: "gray"}}>
                    Money Changer
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Checkin', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconCheckin} />
                  <Text style={{textAlign: 'center', fontSize: 10 ,color: "gray"}}>
                    Check In/Out
                  </Text>
                </View>
              </TouchableOpacity>
              </View>
              
              <View style={styles.rowicon}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Ziarah', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconZiarah} />
                  <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                    Ziarah
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Hospital', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconHospital} />
                  <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                    Hospital
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Married', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMarried} />
                  <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                    Married
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Ibadah', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconIbadah} />
                  <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                    Ibadah
                  </Text>
                </View>
              </TouchableOpacity>
              </View>

             <View style={styles.rowicon}>
             <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Hajaraswad', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconHajaswad} />
               <Text style={{textAlign: 'center', fontSize: 10 ,color: "gray"}}>
                 Hajar Aswad
               </Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Damqurban', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconDam} />
               <Text style={{textAlign: 'center', fontSize: 10 ,color: "gray"}}>
                 Dam & Qurban
               </Text>
             </View>
           </TouchableOpacity>

           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Massage', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconMassage} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                 Massage
               </Text>
             </View>
           </TouchableOpacity>

           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Mufood', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconMufood} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                 MU - Food
               </Text>
             </View>
           </TouchableOpacity>
             </View>

             <View style={styles.rowiconcenter}>
             <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Taxi', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconTaxi} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                 MU-Car
               </Text>
             </View>
           </TouchableOpacity>

           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Laundry', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconLaundry} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                 Laundry
               </Text>
             </View>
           </TouchableOpacity>
		   <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Jasatitip', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
             <View style={styles.iconmain}>
               <Image style={styles.iconservice} source={IconJastip} />
               <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>
                 Jasa Titip
               </Text>
             </View>
           </TouchableOpacity>
		   </View>
            </View>
          </View>
          <View style={styles.maincontainsec}>
            <Text style={{fontSize: 16, fontWeight: 'bold' ,color: "gray"}}>
              Info dan Promo Menarik
            </Text>

            <View>
			
			 
              <TouchableOpacity>
			  
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: 'orange'}}>
                  Lihat Semua
                </Text>
              </TouchableOpacity>
			  
          
       
			  
			  
			  
			  
            </View>
          </View>
		  
		  
		  
		  
		    <ScrollView horizontal={true} style={styles.imgads}>
		    {
                this.state.listData6.map((val,index)=>(
                   <TouchableOpacity
              onPress={() => this.props.navigation.navigate('InfoSatu',{id :val.id} )}>
			  <Image style={styles.bannerstyle} source={{uri:'https://mutawif.co.id/api/muapi/images/'+val.tubnail}} />
				   
</TouchableOpacity>
                  
                ))
            }
		  
		     </ScrollView>
      
            
              
            
        
 
       
		  
          <View style={styles.mainarticle}>
            <View style={styles.textads}>
              <Text style={{fontSize: 16, fontWeight: 'bold' , color: "gray"}}>
                Did you knows?
              </Text>
            </View>



          	  
            {
                this.state.listData5.map((val,index)=>(
                     <View style={styles.article}>
					 <TouchableOpacity
                onPress={() => this.props.navigation.navigate('BeritaSatu',{id :val.id})}>
                   <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: 10,
                  marginRight: 20,
                  paddingRight: 40,
                }}> 
				
                <View>
                  <Image source={{uri:'https://mutawif.co.id/api/muapi/images/'+val.tubnail}} style={{width: 80, height: 70, borderRadius: 10}}  />
                </View>
				 <View style={{marginLeft: 10}}>
				  <Text style={styles.bordercat1}>Makkah</Text>
				  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      flexWrap: 'wrap',
					  padingRight : 10,
					   color: "gray"
                    }}>
                      {val.judul}
					  </Text>
				 
				  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      flexWrap: 'wrap',
					  padingRight : 10,
					   color: "gray"
                    }}>
                     {val.judul2}
					  </Text>
				 
				 
					  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      flexWrap: 'wrap',
					   padingRight : -10,
					    
					    color: "gray"
                    }}>
					  
					 {val.judul3}
                  </Text>
               
				 
					
					
		 </View>			
	 </View>				
</TouchableOpacity>
 </View>
                           ))
            }
    
          </View>
		  
		  
		  
		  
		  
		  
		  
		  
		
	 <View style={{height:30, backgroundColor:'white'}}></View>
	
        </ScrollView>
		  <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 53,
                elevation: 1,
                borderRadius: 0,
                zIndex: 0,
                //marginTop: -65,
                position :'absolute',
				bottom:0,
				width:'100%',
				backgroundColor: 'white',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Beranda')}>
                  <Image
                  source={Beranda}
                    style={{
                      width: 30,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color:'orange'}}>Beranda</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Adzan')}>
                  <Image
                    source={Adzan}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
					 onPress={() => this.props.navigation.navigate('Adzan')}
                  />
                  <Text style={{marginBottom: 20,color:'gray'}}>Adzan</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  	   <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('Notifikasi')}>
                  <Image
                    source={Notifikasi}
                    style={{
                      width: 23,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20,color:'gray'}}>Notifikasi</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  
			  
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
		
		
		
                <TouchableOpacity
                  onPress={() =>this.props.navigation.replace('Doa')}>
                  <Image
                    source={Doa}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
		
                    }}
                  />
				
                  <Text style={{marginBottom: 20,color:'gray'}}>Doa</Text>
                </TouchableOpacity>
              </View>
			  
			  
		
            </View>
	
      </SafeAreaView>
    );
} 
}

const styles = StyleSheet.create({
  imagebg: {
    // width: 200,
    marginBottom: -60,
  },

  bannerstyle: {
    width: 300,
    height: 120,
    borderRadius: 15,
    // marginLeft: 8,
    marginRight: 8,
  },
  maincontainsec: {
    display: 'flex',
    paddingTop: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: 'white',
  },
  imgads: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
  },

  bordercataktif: {
    fontSize: 14,

    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 50,
    padding: 5,
    margin: 5,
    width: 70,
    alignItems: 'center',
    backgroundColor: 'orange',
  },

  bordercat: {
    fontSize: 14,

    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: 70,
    textAlign: 'center',
  },

  bordercat: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 50,
    padding: 5,
    margin: 5,
    width: 70,

    alignItems: 'center',
  },

  bordercat1: {
    fontSize: 10,

    borderColor: '#20232a',
    backgroundColor: 'orange',
    borderRadius: 50,
    color: 'white',
    padding: 2,
    margin: 2,
    width: 50,
    textAlign: 'center',
  },

  roundedcat: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  iconservice: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },

  iconmain: {
    width: 70,
    height: 50,
    marginLeft: 15,
    marginTop: 50,
    // backgroundColor: 'red',
  },
  textads: {
    marginLeft: 15,
    marginTop: 20,
    // backgroundColor: 'red',
  },

  maintext: {
    marginLeft: 40,
  },
  saldo1: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  saldo2: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconssaldo: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  welcome1: {
    marginLeft: 10,

    textAlign: 'center',
    color: 'white',
    fontSize: 18,

    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
  },

  iconstyles: {
    marginRight: 30,
    justifyContent: 'center',

    width: 22,
    height: 22,
  },

  iconsaldotext: {
    textAlign: 'left',
    marginLeft: -2,
    fontSize: 10,
  },

  icondrawer: {
    marginRight: 10,
    width: 50,
    height: 50,
  },

  logo: {
    width: 150,
    height: 30,
    marginLeft: 30,
    marginTop: -10,
  },

  logosub: {
    backgroundColor: 'orange',
    width: 260,
    borderRadius: 40,
    height: 50,
    padding: 20,
    zIndex: 2,
    marginBottom: 20,
  },

  logotagicon: {
    marginTop: -60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  maincontain: {
    backgroundColor: 'white',
    flex: 1,
    // flexDirection: 'row',
    // borderTopStartRadius: 40,
    // borderTopEndRadius: 40,
    marginTop: -30,
    zIndex: 0,
    // flexWrap: 'wrap',
    paddingBottom: 20,
  },

rowicon: {
    flexDirection: 'row',
    paddingRight: '4%',
    paddingLeft: '1%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rowiconcenter: {
    flexDirection: 'row',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mainarticle: {
    backgroundColor: 'white',
    flex: 1,

    marginTop: 10,

    paddingBottom: 20,
  },

  roundButton1: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'orange',
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext2: {
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
 containermap: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	width: '100%',
	height:600,
  },
  map: {

...StyleSheet.absoluteFillObject
  },
  
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "yellow",
    borderColor: "red",
    borderRadius: 50,
    elevation: 10,
  },
  text: {
  color: "#red",   
  },
});
