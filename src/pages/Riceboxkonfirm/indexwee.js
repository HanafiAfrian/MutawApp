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
import Ambilparam from'./../Ambilparam';
import {ScrollView} from 'react-native-gesture-handler';
import {ModalPopup} from '../../components/ModalPopup';

import {BannerFood, IconBack, IconNasibox} from '../../assets';

export default class RiceboxOrder extends Component {
   constructor(props) {
    super(props);
    this.state = {
        pilih_tanggal_pesan: '',
        pilih_jam_pesan: '',
        tempat_pilih: '',
		jumlah_order: '',
			total: '',
			nama_mutawif: '',
			nohp_mutawif: '',
			no_bus: '',
		
        listData: [],
        idEdit: null,
    };
     this.url = "http://192.168.0.102/mutawifapi/nasikotak.php";
}
componentDidMount(){
      this.ambilListData()
  }
  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
        console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
        this.setState({listData:json.data.result});
    })
    .catch((error)=>{
        console.log(error);
    })
  }
  klikSimpan(){
      if(this.state.pilih_tanggal_pesan == '' || this.state.pilih_jam_pesan == ''){
        alert('Silakan masukkan Waktu Pesan Dan Identitas Mutawif');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
			var jumlah = +this.state.jumlah_order;
			var harga = +49.395;
			var total = jumlah * harga;
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"pilih_tanggal_pesan="+this.state.pilih_tanggal_pesan+
					"&pilih_jam_pesan="+this.state.pilih_jam_pesan+
					"&tempat_pilih="+this.state.tempat_pilih+
					"&jumlah_order="+this.state.jumlah_order+
					"&total="+total+
					"&nama_mutawif="+this.state.nama_mutawif+
					"&nohp_mutawif="+this.state.nohp_mutawif+
					"&no_bus="+this.state.no_bus
					
          })
          .then((response)=>response.json())
          .then((json)=>{
			  this.props.navigation.replace('RiceboxOrder')
              this.setState({pilih_tanggal_pesan:''});
              this.setState({pilih_jam_pesan:''});
			  this.setState({tempat_pilih:''});
              this.setState({jumlah_order:''});
			  this.setState({nama_mutawif:''});
              this.setState({nohp_mutawif:''});
			  this.setState({no_bus:''});
              this.ambilListData();
          })
      }
  }
  async klikEdit(id){
    await fetch(this.url+"/?op=detail&id="+id)
    .then((response)=>response.json())
    .then((json)=>{
        this.setState({nama:json.data.result[0].nama});
        this.setState({alamat:json.data.result[0].alamat})
        this.setState({idEdit:id})
    })
  }
  async klikDelete(id){
    await fetch(this.url+"/?op=delete&id="+id)
    .then((response)=>response.json())
    .then((json)=>{
        alert('Data berhasil didelete');
        this.ambilListData();
    })
    .catch((error)=>{
        console.log(error)
    })
  }

	
	
  render() {
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
                  onPress={() => this.props.navigation.navigate('Home')}>
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
                <Image source={IconNasibox} style={{alignSelf: 'center'}} />
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                  Nasi
                  <Text style={{color: '#c19737'}}> Kotak</Text>
                </Text>
              </View>
              <View>
                <Text>/</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              backgroundColor: '#eaeaea',
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              justifyContent: 'center',
              // marginTop: 20,
            }}>
            <View
              style={{
                width: '25%',
              }}>
              <Text style={{fontSize: 14, color: '#26c8f5', fontWeight: '700'}}>
                Harga
              </Text>
              <Text style={styles.subtext}>13 SR/Box (Rp.49.395)</Text>
            </View>
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: 'grey',
                marginRight: 5,
              }}
            />
            <View style={{width: '25%'}}>
              <Text style={{fontSize: 14, color: '#26c8f5', fontWeight: '700'}}>
                Menu
              </Text>
              <Text style={styles.subtext}>Nasi + Ayam + Sayur + Jus</Text>
            </View>
            <View
              style={{
                borderLeftWidth: 1,
                borderLeftColor: 'grey',
                marginRight: 5,
              }}
            />
            <View style={{width: '50%'}}>
              <Text style={{fontSize: 14, color: '#26c8f5', fontWeight: '700'}}>
                Syarat & Ketentuan
              </Text>

              <Text style={styles.subtext}>
                Pesan selambat-lambatnya 6 jam sebelum kedatangan
              </Text>
            </View>
          </View>
          {/* <Icon name="close" size={30} color="#900" /> */}

          <View style={styles.container}>
            {/* form */}

            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Pilih Tanggal</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="calendar"
                    size={20}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="12/02/2022"
					value = { this.state.pilih_tanggal_pesan }
                    onChangeText = {(text) => this.setState({ pilih_tanggal_pesan: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View>
                <View>
                  <Text style={styles.subformtext}>Waktu</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="clock-o"
                    size={20}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="08:45"
                  value = { this.state.pilih_jam_pesan }
                    onChangeText = {(text) => this.setState({pilih_jam_pesan: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            {/* end form */}
            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Tempat</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="location-arrow"
                    size={20}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Jeddah"
                   value = { this.state.tempat_pilih }
                    onChangeText = {(text) => this.setState({tempat_pilih: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.subformtext}>Order</Text>
                </View>
                <View style={styles.subform}>
                  <FontAwesome5
                    size={20}
                    style={styles.searchIcon}
                    name={'concierge-bell'}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Jumlah (Pax)"
                    value = {this.state.jumlah_order}
                    onChangeText = {(text) => this.setState({jumlah_order: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                Isi Form Berikut :
              </Text>
              <TextInput
                style={styles.inputform}
                placeholder="Nama Mutawif"
                value = { this.state.nama_mutawif }
                 onChangeText = {(text) => this.setState({nama_mutawif: text })}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputform}
                placeholder="No. Hp"
               value = { this.state.nohp_mutawif }
                 onChangeText = {(text) => this.setState({nohp_mutawif: text })}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputform}
                placeholder="No. Bus"
                value = { this.state.no_bus }
                 onChangeText = {(text) => this.setState({no_bus: text })}
                underlineColorAndroid="transparent"
              />
            </View>

            <TouchableOpacity
             onPress = {() => this.klikSimpan()}
              style={styles.roundButton1}>
              <Text style={styles.btntext}>Pesan</Text>
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
                    <Text>{text}</Text>

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
              </ScrollView>
            </SafeAreaView>
			
          </Modal>
		   <Ambilparam />
		  <View>
		 
		  </View>
        </View>
      </ScrollView>
    );
  }
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
