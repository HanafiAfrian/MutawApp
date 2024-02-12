import {bold} from 'chalk';
import React, {Component , useState, useEffect } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,TextInput,
  DrawerLayoutAndroid,
  ImageBackground,
} from 'react-native';
import 'react-native-gesture-handler';
import {Directions} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Doa, Pesanan, Saldo, Chat, Jadwal, IconProfilku, LogoTag} from '../../assets';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

 

 export default function Home({ navigation, route }) {

 const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
  const [kategori, setKategori] = useState('');  
  const [kloter, setKloter] = useState('');  
  const [lokasi, setLokasi] = useState('');
 const [kat, setKat] = useState(''); 



	 
	
	
	
	
	
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
						   setKloter(user.Kloter);   
						   setLokasi(user.Lokasi);
						    setKat(user.Kat);
							
 navigation.replace('HomeTravel',{name:user.Name, age:user.Age, email:user.Email,kategori:user.Kategori,
 kloter:user.Kloter,lokasi:user.Lokasi,kat:user.Kat});
	  
                    }


  
                })
        } catch (error) {
            console.log(error);
        }
		
    }





      

    return (
      <SafeAreaView>
        
      </SafeAreaView>
    );
  
}
