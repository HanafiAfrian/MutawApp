import React, {Component , useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  ProfilePhoto,
  IconUsermenu,
  IconNext,
  IconVoc,
  IconPromo,
  IconPembayaran,
  IconBahasa,
  IconKeluar,
  IconFavorit,
  IconBantuan,
} from '../../assets';
import {IconAkun, Logouser, Logokey} from '../../assets';
import {IconBack} from '../../assets';




 export default function Keluar({ navigation, route }) {

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
 
  <SafeAreaView style={{flex: 1, backgroundColor: '#eaeaea'}}>
        <ScrollView>
          <View style={{backgroundColor: '#222a32', height: 180}}></View>
          <View
            style={{
              marginTop: -120,
              backgroundColor: 'white',
              margin: 20,
              borderRadius: 20,
              padding: 10,
            }}>
            {/* <TouchableOpacity
              style={styles.iconbackstyle}
              onPress={() => this.props.navigation.navigate('FooterTab')}>
              <Icon
                name="chevron-left"
                size={20}
                color="#fff"
                style={{marginTop: -50, marginLeft: -10}}
              />
            </TouchableOpacity> */}

            <View style={styles.article}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    style={{width: 70, height: 70, borderRadius: 60}}
                    source={ProfilePhoto}
                  />
                </View>
                <View>
                  <Text style={styles.username}>{name} 
</Text>

  
                </View>
              </View>
            </View>
            <View style={styles.containeruser1}></View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Akun',{telepon:age, nama_lengkap:name, email_pribadi: email })}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <IconUsermenu style={{width: 20, height: 20}} />
                  <Text style={styles.menutext}>Data Akun</Text>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image style={{width: 14, height: 14}} source={IconNext} />
                </View>
              </View>
            </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Voucher')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <IconVoc style={{width: 20, height: 20}} />
                  <Text style={styles.menutext}>Voucher</Text>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image style={{width: 14, height: 14}} source={IconNext} />
                </View>
              </View>
            </TouchableOpacity> */}

            {/* <View style={styles.menustyle}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <IconPromo style={{width: 20, height: 20}} />
                <Text style={styles.menutext}>Kode Promo</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  <Image style={{width: 14, height: 14}} source={IconNext} />
                </TouchableOpacity>
              </View>
            </View> */}

            {/* <View style={styles.menustyle}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <IconPembayaran style={{width: 20, height: 20}} />
                <Text style={styles.menutext}>Metode Pembayaran</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  <Image style={{width: 14, height: 14}} source={IconNext} />
                </TouchableOpacity>
              </View>
            </View> */}

            {/* <View style={styles.menustyle}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <IconBahasa style={{width: 20, height: 20}} />
                <Text style={styles.menutext}>Pilih Bahasa</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  <Image style={{width: 14, height: 14}} source={IconNext} />
                </TouchableOpacity>
              </View>
            </View> */}

            <TouchableOpacity
              onPress={() =>navigation.navigate('BantuanFaq')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <IconBantuan style={{width: 20, height: 20}} />
                  <Text style={styles.menutext}>Bantuan & Laporan</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity>
                    <Image style={{width: 14, height: 14}} source={IconNext} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <IconFavorit style={{width: 20, height: 20}} />
                  <Text style={styles.menutext}>Favorit</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity>
                    <Image style={{width: 14, height: 14}} source={IconNext} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

           
			
			  <CustomButton
			  style={{  
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40,
	  textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 100,}}
              title='Keluar'
              color='black'

              onPressFunction={removeData}
			  
          />
          </View>
 
		    </ScrollView>
      </SafeAreaView>
 );
 
 }






const styles = StyleSheet.create({
  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 100,
  },

  menustyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 25,

    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
  },

  logoiconmail: {
    width: 20,
    height: 20,
  },

  menutext: {
    marginLeft: 10,
	color: "gray",
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    // marginBottom: -20,
  },
  welcome1: {
    margin: 10,
    textAlign: 'center',
    fontSize: 24,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  welcome2: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
	color: "gray",
    padding: 2,
  },
});
