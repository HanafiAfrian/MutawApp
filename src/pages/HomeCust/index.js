import {bold} from 'chalk';
import React, {Component , useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  ImageBackground,
} from 'react-native';
import 'react-native-gesture-handler';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import {Directions} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Doa, Pesanan, Saldo, Chat, Jadwal} from '../../assets';

import {
  IconHamburger,
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
} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

 export default function Home({ navigation, route }) {

 const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
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

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Splash');
        } catch (error) {
            console.log(error);
        }
    }
  

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
                    10 Desember 2021 M
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    10 Dzulhijjah 1442 H
                  </Text>
                </View>

                <TouchableOpacity>
                  <Image style={styles.icondrawer} source={IconHamburger} />
                </TouchableOpacity>
              </View>

              <View style={styles.container}>
                <View>
 <Text style={styles.saldo1}>Assalamualaikum {name}</Text>
                  <Text style={styles.saldo2}>
                    12.10
                    <Text style={{fontSize: 14, fontWeight: 'normal'}}>Am</Text>
                  </Text>
                  <Text style={styles.saldo1}>Medan (-2:40:00) Dzuhur</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View>
            <View style={styles.logotagicon}>
              <View style={styles.logosub}>
                <Image
                  source={{uri: 'http://mutawif.co.id/images/logotag.png'}}
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
                <Image
                  source={Doa}
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 30,
                    alignSelf: 'center',
                  }}
                />
                <Text style={{marginBottom: 20}}>Doa</Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Chat}
                  style={{
                    width: 25,
                    height: 25,
                    marginTop: 30,
					marginRight: -32,
                    alignSelf: 'center',
                  }}
                />
                <Text style={{marginBottom: 20, marginRight: -50,}}>Chat</Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
				  
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Pesanan')}>
                  <Image
                    source={Pesanan}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20}}>Pesanan</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* End Button Top */}
            <View style={styles.maincontain}>
              <TouchableOpacity
              onPress={() => navigation.navigate('Ricebox', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconNasibox} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Rice Box
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Airport', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconAirport} />
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    Airport Handling
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
               onPress={() => navigation.navigate('Mutawif', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMutawif} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Mutawif
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Kursiroda', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconKursiroda} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Kursi Roda
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Mutawifah', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMutawifah} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Mutawifah
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Simcard', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconSim} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Sim Card
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Moneychanger', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMoney} />
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    Money Changer
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Checkin', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconCheckin} />
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    Check In/Out
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Ziarah', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconZiarah} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Ziarah
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Hospital', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconHospital} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Hospital
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Married', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMarried} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Married
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Ibadah', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconIbadah} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Ibadah
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Hajaraswad', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconHajaswad} />
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    Hajar Aswad
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Damqurban', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconDam} />
                  <Text style={{textAlign: 'center', fontSize: 10}}>
                    Dam & Qurban
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Massage', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMassage} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Massage
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Mufood', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconMufood} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    MU - Food
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Taxi', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconTaxi} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    MU-Car
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Laundry', {telepon:age, nama_lengkap:name, email_pribadi: email })}>
                <View style={styles.iconmain}>
                  <Image style={styles.iconservice} source={IconLaundry} />
                  <Text style={{textAlign: 'center', fontSize: 12}}>
                    Laundry
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.maincontainsec}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Info dan Promo Menarik
            </Text>

            <View>
			   <CustomButton
              title='Logout'
              color='#f40100'
              onPressFunction={removeData}
          />
              <TouchableOpacity>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: 'orange'}}>
                  Lihat Semua
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal={true} style={styles.imgads}>
            <Image style={styles.bannerstyle} source={BannerOne} />
            <Image style={styles.bannerstyle} source={BannerTwo} />
            <Image style={styles.bannerstyle} source={BannerThree} />
          </ScrollView>
          <View style={styles.mainarticle}>
            <View style={styles.textads}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Did you knows?
              </Text>
            </View>

            <View style={styles.roundedcat}>
              <TouchableOpacity style={styles.bordercat}>
                <Text>Makkah</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bordercat}>
                <Text>Haji</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bordercat}>
                <Text>All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.article}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: 10,
                  marginRight: 20,
                  paddingRight: 40,
                }}>
                <View>
                  <Image
                    style={{width: 80, height: 70, borderRadius: 10}}
                    source={BannerOne}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.bordercat1}>Makkah</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      flexWrap: 'wrap',
                    }}>
                    17 keutamaan Makkah & Nama Lengkap Makkah Berdasarkan
                    Al-Quran
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.article}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: 10,
                  marginRight: 20,
                  paddingRight: 40,
                }}>
                <View>
                  <Image
                    style={{width: 80, height: 70, borderRadius: 10}}
                    source={BannerTwo}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.bordercat1}>Makkah</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      flexWrap: 'wrap',
                    }}>
                    17 keutamaan Makkah & Nama Lengkap Makkah Berdasarkan
                    Al-Quran
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.article}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: 10,
                  marginRight: 20,
                  paddingRight: 40,
                }}>
                <View>
                  <Image
                    style={{width: 80, height: 70, borderRadius: 10}}
                    source={BannerThree}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.bordercat1}>Makkah</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      flexWrap: 'wrap',
                    }}>
                    17 keutamaan Makkah & Nama Lengkap Makkah Berdasarkan
                    Al-Quran
                  </Text>
                </View>
              </View>
            </View>
          </View>
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
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: 70,
    textAlign: 'center',
  },

  bordercat1: {
    fontSize: 10,

    borderColor: '#20232a',
    backgroundColor: 'orange',
    borderRadius: 10,
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
    marginRight: 30,
    width: 20,
    height: 20,
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
    flexDirection: 'row',
    // borderTopStartRadius: 40,
    // borderTopEndRadius: 40,
    marginTop: -30,
    zIndex: 0,
    flexWrap: 'wrap',
    paddingBottom: 20,
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
});
