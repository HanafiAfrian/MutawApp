import {bold} from 'chalk';
import React, {Component , useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
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





 export default function Home({ navigation, route }) {
  const [users, setUsers] = useState([])
 const [name, setName] = useState('');
 const [kategori, setKategori] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
	 let control_Local, control_Online;
	 let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
	  const url4 = 'https://mutawif.co.id/api/muapi/chat.php';
	
	
 useEffect(() => {
        getData();
    }, []);
 const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {

                  if (value == null) {
                    {
                       AsyncStorage.clear();
                      navigation.navigate('Splash');
                  } 
                } 

                   else  {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                        setEmail(user.Email);
						 setKategori(user.Kategori);
   navigation.replace('HomePribadi',{name:user.Name, age:user.Age, email:user.Email, kategori:user.Kategori});                      
                    }


                  

                })
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    }



  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (control_Local) control_Local.release();
      if (control_Online) control_Online.release();
    };
  }, []);
  
   useEffect(() => {
    fetchData()
	
  }, [])

const fetchData = async () => {
	const response = await fetch(url4 + '?op=hitungpesan&&nama=' + 'hanafi')
    
	  .then(response => response.json())
       .then(json => setUsers(json.data.result))
	
	 	   	const intervalID = setTimeout(fetchData.bind(), 1000);
			 clearInterval(this.intervalId);
			 setUsers(data)
			if (users > 0)
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
		
	}	
    setUsers(data)
	
  
  }


    return (
      <SafeAreaView style={{backgroundColor: '#eaeaea', flex: 1}}>
        <ScrollView>
		
		
        </ScrollView>
      </SafeAreaView>
    );
  
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
