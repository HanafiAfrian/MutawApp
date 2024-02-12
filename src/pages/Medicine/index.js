import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import text from './konfirm';

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
import {ScrollView} from 'react-native-gesture-handler';
import {ModalPopup} from '../../components/ModalPopup';

import {IconHospital, IconBack, IconNasibox} from '../../assets';

export default class Medicine extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  render() {
	    var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi; 
	    var jenis =	this.props.route.params.jenis; 
		   var hargarupiah =	this.props.route.params.hargarupiah; 
		  	  var hargarupiahjns2 =	this.props.route.params.hargarupiahjns2; 
			  	  var hargarupiahjns3 =	this.props.route.params.hargarupiahjns3; 
		
var latitude =	this.props.route.params.latitude; 
var longitude =	this.props.route.params.longitude; 
			
  var totalreal = this.state.jumlah_order *this.state.harga;
	  var totalrupiah = this.state.jumlah_order * 4000 * this.state.harga;
	  
	  
	  
	  
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1, backgroundColor: '#222a32'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('HospitalLayanan',{telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi, hargarupiah:hargarupiah,  hargarupiahjns2:hargarupiahjns2 ,hargarupiahjns3:hargarupiahjns3 } )}>
                  {/* <Image source={IconBack} style={{marginTop: 20}} /> */}
                  <Icon
                    name="chevron-left"
                    size={20}
                    color="#fff"
                    style={{marginTop: 20, marginLeft: 10}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Image source={IconHospital} style={{alignSelf: 'center'}} />
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                  Medicine 
                  {/* <Text style={{color: '#c19737'}}> Kotak</Text> */}
                </Text>
              </View>
              <View>
              
              </View>
            </View>
          </View>

          <View style={styles.container}>
            {/* form */}

            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Lokasi Pengantaran</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="location-arrow"
                    size={16}
                    color="grey"
                  />
               
				  
				   <TextInput
                    style={styles.input}
                    placeholder="Masukkan Lokasi"
					 placeholderTextColor="gray"
                  value = { this.state.tempat_pilih }
                    onChangeText = {(text) => this.setState({tempat_pilih: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View>
                <View>
                  <Text style={styles.subformtext}>Quantity</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="sort"
                    size={16}
                    color="grey"
                  />
                
				       <TextInput
                    style={styles.input}
					 placeholderTextColor="gray"
                    placeholder="Jumlah "
					keyboardType = 'numeric'
 value = {this.state.jumlah_order}
                    onChangeText = {(text) => this.setState({jumlah_order: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontWeight: 'bold', marginBottom: 10, color:'gray'}}>
                Isi Form Berikut :
              </Text>

          
   <TextInput
                    style={styles.input}
                   placeholder="Nama Obat"
					 placeholderTextColor="gray"
                  value = { this.state.nama_obat }
                    onChangeText = {(text) => this.setState({nama_obat: text })}
                    underlineColorAndroid="transparent"
                  />
              <TextInput
                multiline={true}
                placeholder="Input Gejala"
				 placeholderTextColor="gray"
				  value = { this.state.gejala }
                    onChangeText = {(text) => this.setState({gejala: text })}
                numberOfLines={2}
                style={{
                  height: 100,
                  textAlignVertical: 'top',
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  marginBottom: 10,
				  color:'black'
                }}
              />
              <TextInput
                style={styles.inputform}
                placeholder="Perkiraan Harga"
              	 placeholderTextColor="gray"
				 	keyboardType = 'numeric'
				  value = { this.state.harga }
                    onChangeText = {(text) => this.setState({harga: text })}
                underlineColorAndroid="transparent"
              />
             

              <View>
                <TouchableOpacity style={styles.borderdot}>
                  <FontAwesome5
                    size={50}
                    style={styles.searchIcon}
                    name={'file-upload'}
                  />
                  <Text style={{marginLeft: 10, color:'gray' }}>Upload</Text>
                </TouchableOpacity>
                <Text style={{marginLeft: 10, color:'gray' }}>Input Foto Obat (Opsional)</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.setState({show: true})}
              style={styles.roundButton1}>
              <Text style={styles.btntext}>Lanjutkan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.show}>
            <SafeAreaView>
              <ScrollView>
                <View style={styles.modalContainer}>
                  <View style={styles.modalView}>
                    <View>
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
        <Text style={{fontWeight: 'bold', fontSize: 14, color:'gray'}}>Lokasi</Text>
        <Text style={{color: 'red'}}>{ this.state.tempat_pilih }</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14, color:'gray' }}>Jumlah</Text>
        <Text style={{color: 'red'}}>{this.state.jumlah_order}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
      }}></View>

    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14,  color:'gray'}}>Nama Obat</Text>
        <Text style={{color: 'red'}}>{ this.state.nama_obat }</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14, color:'gray'}}>Perkiraan Harga</Text>
        <Text style={{color: 'red'}}>{ this.state.harga }</Text>
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
		  color:'gray'
        }}>
        Total Bayar
      </Text>
        <Text style={{marginLeft: 20, color: 'red'}}>{(totalreal)}  SR   (Rp. {(totalrupiah)} )</Text>
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
                        onPress={() => this.setState({show: false})}
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
                        onPress={() =>
                          this.props.navigation.navigate('TotalTagihanhospital',{
				latitude :latitude,
longitude :longitude,			  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				
			jenis: jenis, 	
			
totalreal: totalreal, 
						totalrupiah: totalrupiah 	})
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
              </ScrollView>
            </SafeAreaView>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  borderdot: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'grey',
    width: 100,
    height: 100,
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: -20,
    borderStyle: 'dashed',
  },


  modalContainer: {
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },

  modalView: {
   flex: 1,
    backgroundColor: 'white',
  height: 760,
 
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
	color:'black'
  },

  // formpesanan: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },

  input: {
    borderBottomWidth: 1,
color:'black',
    width: 140,
    borderColor: '#eaeaea',
    marginBottom: 10,
  },

  inputform: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
    // marginTop: 10,
	color:'black',
    marginBottom: 10,
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
});
