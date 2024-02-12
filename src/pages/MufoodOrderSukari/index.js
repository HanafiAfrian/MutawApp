import React, { Component, useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import text from './konfirm';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  StyleSheet,
  PermissionsAndroid,
  Image,
  TouchableOpacity,
  // TextInput,
  SafeAreaView,
  Modal,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { ModalPopup } from '../../components/ModalPopup';

import {
  IconMutawifah, IconBack, IconNasibox, IconMufood, Albaik,
  Barnies,
  Dates,
  Hardees,
  Kudu,
  Patchi,
  Subway,
  RestoKakak,
  SevenDays,
  TwisBurger,
} from '../../assets';

export default class MufoodOrderSukari extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      nama: '',
      alamat: '',
      listData: [],
      idEdit: null,
      showDate: false,
      pilih_tanggal_pesan: '',
      pilih_jam_pesan: '',
      realharga: '',
      rupiahharga: '',
      tempat_pilih: '',
      jumlah_order: '',
      totalreal: '',
      nama_mutawif: '',
      totalrupiah: '',
      nohp_mutawif: '',
      userLocation: {
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
  componentDidMount() {
    this.requestLocationPermission();
    Geolocation.getCurrentPosition(info => this.setState({ userLocation: info }));
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
        Geolocation.getCurrentPosition(info => this.setState({ userLocation: info }));
      } else {
        console.log("Tidak Di Izinkan");
      }
    } catch (err) {
      console.warn(err);
    }
  };



  Klikpesan() {
    var tempat_tujuan = this.props.route.params.resto;
    var harga = this.props.route.params.harga;
    var telepon = this.props.route.params.telepon;
    var nama_lengkap = this.props.route.params.nama_lengkap;
    var email_pribadi = this.props.route.params.email_pribadi;
    var email_pribadi = this.props.route.params.email_pribadi;

  
  
    var hargarupiah = this.props.route.params.hargarupiah;
    var real = this.props.route.params.real;
    var totalreal = this.state.jumlah_order * real;
    var totalrupiah = this.state.jumlah_order * hargarupiah;

    const numb = this.state.jumlah_order * hargarupiah;
    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
    console.log(rupiah)

    if (nama_lengkap == '') {

      alert('Silahkan Login Terlebih dahulu')
      this.props.navigation.navigate('Splashlogout');

    }
    else if (this.state.jumlah_order % 3 != 0) {
      alert('Orderan harus kelipatan 3KG');

    }

    else {
      this.props.navigation.navigate('TotalTagihanmufood', {
        latitude: this.state.userLocation.coords.latitude,
        longitude: this.state.userLocation.coords.longitude,
        telepon: telepon,
        nama_lengkap: nama_lengkap,
        email_pribadi: email_pribadi,

        tempat_pilih: this.state.tempat_pilih,
        tempat_tujuan: tempat_tujuan,
        jumlah_order: this.state.jumlah_order,



        totalreal: totalreal,
        totalrupiah: totalrupiah
      })


    }
  }

  render() {
    var tempat_tujuan = this.props.route.params.resto;
    var harga = this.props.route.params.harga;
    var telepon = this.props.route.params.telepon;
    var nama_lengkap = this.props.route.params.nama_lengkap;
    var email_pribadi = this.props.route.params.email_pribadi;
    var email_pribadi = this.props.route.params.email_pribadi;

  
  
    var hargarupiah = this.props.route.params.hargarupiah;
    var real = this.props.route.params.real;
    var totalreal = this.state.jumlah_order * real;
    var totalrupiah = this.state.jumlah_order * 4000 * harga;

    const numb = this.state.jumlah_order * hargarupiah;
    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
    console.log(rupiah)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#222a32' }}>

        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{ backgroundColor: 'white' }}>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Mufood', { telepon: telepon, nama_lengkap: nama_lengkap, email_pribadi: email_pribadi, hargarupiah: hargarupiah })}>
                    {/* <Image source={IconBack} style={{marginTop: 20}} /> */}
                    <Icon
                      name="chevron-left"
                      size={20}
                      color="#fff"
                      style={{ marginTop: 20, marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                    source={IconMufood}
                    style={{ alignSelf: 'center', width: 50, height: 50, marginLeft: -20, }}
                  />

                </View>

                <View>

                </View>

              </View>

            </View>
            <Text style={{ alignSelf: 'center', color: 'black', fontSize: 22, fontWeight: 'bold' }}>{tempat_tujuan}</Text>
            <Text style={{ alignSelf: 'center', color: 'black', fontSize: 22, fontWeight: 'bold', marginBottom: 30 }}>
              
              
              Harga : {harga} SR / 3kg</Text>
            <View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.subform}>

                <TextInput

                  placeholderTextColor="gray"

                  keyboardType='numeric'
                  value={this.state.jumlah_order}
                  onChangeText={(text) => this.setState({ jumlah_order: text })}
                  underlineColorAndroid="transparent"
                  label="Quantity(KG)"
                  mode="outlined"
                  activeOutlineColor="orange"
                  // right={<TextInput.Icon name="plus-minus"
                  // />}
                  style={{ width: '100%', ...styles.input }}
                />

              </View>





              <View style={styles.subform}>

                <TextInput


                  placeholderTextColor="gray"
                  value={this.state.tempat_pilih}
                  onChangeText={(text) => this.setState({ tempat_pilih: text })}
                  underlineColorAndroid="transparent"
                  mode="outlined"
                  activeOutlineColor="orange"
                  // right={<TextInput.Icon name="map-marker-outline" />}
                  style={{ width: '100%', ...styles.input }}
                  label="Lokasi"
                />


              </View>

            </View>



            <View style={styles.subformfull}>


              <TextInput


                placeholderTextColor="gray"
                value={this.state.deskripsi}
                onChangeText={(text) => this.setState({ deskripsi: text })}
                underlineColorAndroid="transparent"
                label="Catatan"
                mode="outlined"
                activeOutlineColor="orange"
                // right={<TextInput.Icon name="pencil"
                // />}
                style={{ width: '100%', ...styles.input }}
              />
            </View>





            <TouchableOpacity
              onPress={() => this.setState({ show: true })}
              style={styles.roundButton1}>
              <Text style={styles.btntext}>Pesan</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.show}>
              <SafeAreaView style={styles.modalContainer}>
                <ScrollView>

                  <View style={styles.modalView}>
                    <View>

                      <View style={{ marginRight: 20 }}>
                        <View style={{ alignContent: 'center' }}>
                          <Text
                            style={{
                              fontSize: 24,
                              color: 'black',
                              fontWeight: 'bold',
                              marginTop: 40,
                              textAlign: 'center',
                            }}>
                            Detail Pemesanan
                          </Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 40,
                          }}>
                          <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'gray' }}>Nama Restoran
                             {real}
                            
                            </Text>
                            <Text style={{ color: 'red' }}>{tempat_tujuan}</Text>
                          </View>
                          <View style={{ marginLeft: 20, marginRight: 20 }}></View>

                        </View>
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            marginLeft: 20,
                          }}></View>
                        <View>
                          <Text
                            style={{
                              marginLeft: 20,
                              marginTop: 20,
                              fontWeight: 'bold',
                              fontSize: 14, color: 'gray'
                            }}>
                            Jumlah
                          </Text>
                          <Text style={{ marginLeft: 20, color: 'red' }}>{this.state.jumlah_order}</Text>
                        </View>

                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            marginLeft: 20,
                          }}></View>
                        <View>
                          <Text
                            style={{
                              marginLeft: 20,
                              marginTop: 20,
                              fontWeight: 'bold',
                              fontSize: 14, color: 'gray'
                            }}>
                            Lokasi
                          </Text>
                          <Text style={{ marginLeft: 20, color: 'red' }}>
                            {this.state.tempat_pilih}
                          </Text>
                        </View>
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            marginLeft: 20,
                          }}></View>
                        <View>
                          <Text
                            style={{
                              marginLeft: 20,
                              marginTop: 20,
                              fontWeight: 'bold',
                              fontSize: 14, color: 'gray'
                            }}>
                            Catatan
                          </Text>
                          <Text style={{ marginLeft: 20, color: 'red' }}>
                            {this.state.deskripsi}
                          </Text>
                        </View>
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            marginLeft: 20,
                          }}></View>
                        <View>
                          <Text
                            style={{
                              marginLeft: 20,
                              marginTop: 20,
                              fontWeight: 'bold',
                              fontSize: 14, color: 'gray'
                            }}>
                            Total Bayar
                          </Text>
                          <Text style={{ marginLeft: 20, color: 'red' }}>{(totalreal)}  SR   ( {(rupiah)} )</Text>
                        </View>
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'grey',
                            marginLeft: 20,
                          }}></View>
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
                        onPress={() => this.setState({ show: false })}
                        style={{
                          width: '40%',
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
                          Batal
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          width: '40%',
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                          margin: 20,
                          borderRadius: 5,
                          backgroundColor: '#0d7883',
                        }}
                        onPress={() => this.Klikpesan() & this.setState({ show: false })}


                      >
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          Konfirmasi
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </ScrollView>
              </SafeAreaView>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imgpr2: {
    marginTop: 60,
    marginLeft: 100,
    height: 200,
    width: 200,
    justifyContent: 'center',
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.8)',
  },

  modalView: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  searchSection1: {
    backgroundColor: '#fff',

    marginLeft: 10,
    marginRight: 10,
    width: '100%',
  },

  form: {
    display: 'flex',
    flexDirection: 'row',
  },
  subformtext: {
    marginLeft: 10,
    color: 'black',
  },

  subform: {
    flexDirection: 'row',
    marginTop: 10
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10,
    color: 'grey',
  },

  input: {
    borderBottomWidth: 1,
    color: 'black',
    width: 140,
    borderColor: '#eaeaea',
    marginBottom: 10,

  },

  input2: {

    borderBottomWidth: 1,
    color: 'black',
    width: '80%',
    borderColor: '#eaeaea',
    marginBottom: 10,
    marginLeft: 10
  },

  inputform: {
    marginTop: 10,
    backgroundColor: 'white',
  },


  subtext: {
    fontSize: 10,
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  iconbackstyle: {
    // marginLeft: 10,
    // marginTop: 30,
    width: 20,
  },
  imgads: {
    marginTop: 20,
    backgroundColor: '#eaeaea',
    marginBottom: 20,
    borderRadius: 10,
    height: 200,
    width: 300,
    justifyContent: 'center',
  },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  container: {
    paddingBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },

  welcome: {
    fontSize: 20,

    // color: '#26c8f5',
    color: 'black',
    marginBottom: 20,
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 10,
    fontWeight: 'bold',
  },

  roundButton1: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
    marginBottom: 10
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },

  modalContainerdate: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },


  modalViewdate: {
    height: '40%',
    marginTop: 'auto',
    backgroundColor: '#eaeaea',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  subform: {
    width: '45%',
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  subformfull: {
    width: '95%',
    backgroundColor: 'white',
    marginHorizontal: 10,
  },


  input: {
    color: "black",
    backgroundColor: 'white',
    marginBottom: 10,

  },
});
