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
  SafeAreaView,
  Modal,
  Button,
} from 'react-native';


	const Riceboxkonfirm = ({ route, navigation }) => {
		
		
		 const { pilih_tanggal_pesan } = route.params;
  const { pilih_jam_pesan } = route.params;
  const { tempat_pilih } = route.params;
  const { jumlah_order } = route.params;
  const { total } = route.params;
  
   const { nama_mutawif } = route.params;
  const { nohp_mutawif } = route.params;
  const { no_bus } = route.params;
  
	
	return (
  <View>
    <View>
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
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Nama Mutawif</Text>
        <Text style={{color: 'red'}}>{JSON.stringify(nama_mutawif)} </Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>No. Bus</Text>
        <Text style={{color: 'red'}}>{JSON.stringify(+no_bus)}</Text>
      </View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>No. HP</Text>
        <Text style={{color: 'red'}}>{JSON.stringify(+nohp_mutawif)}</Text>
      </View>
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
          fontSize: 14,
        }}>
        Jumlah Pesanan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{JSON.stringify(+jumlah_order)} Pax</Text>
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
          fontSize: 14,
        }}>
        kedatangan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>
        {JSON.stringify(tempat_pilih)}  - {JSON.stringify(pilih_tanggal_pesan)} 
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
          fontSize: 14,
        }}>
        Jam
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{JSON.stringify(pilih_jam_pesan)} </Text>
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
          fontSize: 14,
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{JSON.stringify(total)}SR (Rp. Kover OTOMATIS)</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
      }}></View>
	   <View style={styles.modalContainer}>
                  <View style={styles.modalView}>
                    <Text></Text>

                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 20,
                        marginBottom: 40,
                      }}>
                      <TouchableOpacity
                        onPress={() => this.setState({show: false})}
                        style={{
                          width: 120,
                          height: 40,
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                          alignSelf: 'center',
                          borderRadius: 40,
                          backgroundColor: '#0d7883',
                          marginTop: 40,
                          marginBottom: 40,
                          marginLeft: 20,
                          marginRight: 20,
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
                          width: 120,
                          height: 40,
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                          alignSelf: 'center',
                          borderRadius: 40,
                          backgroundColor: '#0d7883',
                          marginTop: 40,
                          marginBottom: 40,
                          marginLeft: 20,
                          marginRight: 20,
                        }}
                        onPress={() =>
                          this.props.navigation.navigate('TotalTagihan')
                        }>
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
                </View>
  </View>
  
);


}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },

  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '96%',
    // marginLeft: 10,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },

  form: {
    display: 'flex',
    flexDirection: 'row',
  },
  subformtext: {
    marginLeft: 8,
    color: 'black',
  },
  subform: {
    marginTop: -10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  searchIcon: {
    marginLeft: 10,
    marginTop: 15,
  },

  // formpesanan: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },

  input: {
    borderBottomWidth: 1,

    width: 140,
    borderColor: '#eaeaea',
    marginBottom: 10,
  },

  inputform: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    borderColor: '#eaeaea',
    // marginTop: 10,
    marginBottom: 10,
  },

  subtext: {
    fontSize: 10,
    flexWrap: 'wrap',
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
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: '#0d7883',
    marginTop: 40,
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },
});
export default Riceboxkonfirm;