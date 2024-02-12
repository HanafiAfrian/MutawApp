import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import text from './konfirm';
import RadioButton from 'react-native-simple-radio-button-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
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

import {BannerFood, IconBack, IconLaundry} from '../../assets';

export default class LaundryKiloan extends Component {
constructor(props) {
    super(props);
    this.state = {show: false ,
	
	    nama:'',
        alamat:'',
        listData:[],
        idEdit:null,
	
	 pilih_tanggal_pesan: '',
        pilih_jam_pesan: '',
		realharga :'',
rupiahharga :'',
        tempat_pilih: '',
		jumlah_order: '',
			totalreal: '',
			nama_mutawif: '',
			totalrupiah: '',
			nohp_mutawif: '',
			 date: new Date(),
    mode: 'date',
    tampil: false,
			no_bus: '',
			
			no_hpbus: '',
			no_pesawat: '',
			};
  
   this.url = "https://mutawif.co.id/api/muapi/loundry.php";
  }
  componentDidMount(){
      this.ambilListData()
  }
  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
		
			this.setState({harga:json.data.result[0].harga});
				this.setState({hargarupiah:json.data.result[0].hargarupiah});
        console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
        this.setState({listData:json.data.result});
    })
    .catch((error)=>{
        console.log(error);
    })
  }
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      tampil: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  tampil = mode => {
    this.setState({
      tampil: true,
      mode,
    });
  }

  datepicker = () => {
    this.tampil('date');
  }

  timepicker = () => {
    this.tampil('time');
  }

  state = {
    kiloan: false,
    satuan: false,
  };
  kiloanPressed() {
    this.setState({
      kiloan: true,
      satuan: false,
    });
  }
  satuanPressed() {
    this.setState({
      kiloan: false,
      satuan: true,
    });
  }

 klikMenu1(){
const { tampil, date, mode } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');
	   
	   var latitude =	this.props.route.params.latitude; 
var longitude =	this.props.route.params.longitude; 
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	    var hargarupiah =	this.props.route.params.hargarupiah;
	  	  var hargarupiahjns2 =	this.props.route.params.hargarupiahjns2;
	  var jenis =	this.props.route.params.jenis;
  var totalreal = this.state.jumlah_order * this.state.harga ;
	  var totalrupiah = this.state.jumlah_order * this.state.hargarupiah ;
	  
	  	  const numb = this.state.jumlah_order * hargarupiah ;
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah)  
	  
	
	
	  
	  	  if (this.state.jumlah_order < 2)
	  {
		  alert('Minimal Jumlah Order 2 KG ');  
		  
	  }
	  
	  else
	  {
this.props.navigation.navigate('TotalTagihanlaundry', {
				latitude :latitude,
longitude :longitude,			  
			telepon : telepon,
nama_lengkap : nama_lengkap,
email_pribadi : email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				  jenis: jenis, 
			
totalreal: totalreal, 
				totalrupiah: totalrupiah 			
			  })
                        }
	  }
	  
  render() {

var latitude =	this.props.route.params.latitude; 
var longitude =	this.props.route.params.longitude; 
	  const { tampil, date, mode } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');
	   
	   
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	    var hargarupiah =	this.props.route.params.hargarupiah;
	  	  var hargarupiahjns2 =	this.props.route.params.hargarupiahjns2;
	  
	  
	  var jenis =	this.props.route.params.jenis;
  var totalreal = this.state.jumlah_order * this.state.harga ;
	  var totalrupiah = this.state.jumlah_order * this.state.hargarupiah ;
	  
	  	  const numb = this.state.jumlah_order * hargarupiah;
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah)  
	  
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
                        onPress={() => this.props.navigation.navigate('LaundryLayanan',{telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi, hargarupiah:hargarupiah, hargarupiahjns2:hargarupiahjns2  } )}>
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
                <Image
                  source={IconLaundry}
                  style={{alignSelf: 'center', width: 50, height: 50}}
                />
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                  <Text style={{color: 'orange'}}>Laundry Kiloan </Text>
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
                  <Text style={styles.subformtext}>Pilih Tanggal</Text>
                </View>
                <View style={styles.subform}>
                    <Icon
                    style={styles.searchIcon}
                    name="calendar"
                    size={20}
                    color="grey"
					onPress={this.datepicker}
                  />
                    <TextInput
                    style={styles.input}
                  
					 value = {pilih_tanggal_pesan} 
                  onChangeText = {(text) => this.setState({ pilih_tanggal_pesan: text })}
                   onPress={this.datepicker}
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
				  onPress={this.timepicker}
                    style={styles.searchIcon}
                    name="clock-o"
                    size={20}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="08:45"
					
					value = {pilih_jam_pesan}
 onChangeText = {(text) => this.setState({pilih_jam_pesan: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
			    	  	    { tampil && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
            </View>

            {/* end form */}
            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Lokasi</Text>
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
                      placeholder="Lokasi anda"
					 placeholderTextColor="gray"
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
                    size={16}
                    style={styles.searchIcon}
                    name={'sort'}
                  />
              
				  
				         <TextInput
                    style={styles.input}
					 placeholderTextColor="gray"
                placeholder="Jumlah (Cth:2)"
					keyboardType = 'numeric'
 value = {this.state.jumlah_order}
                    onChangeText = {(text) => this.setState({jumlah_order: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
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
				 <View style={{width: 350}}>
    <View style={{alignContent: 'center'}}>
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

    <View>
      <Text
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
		  color:'gray',
        }}>
        Tanggal & Waktu Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{pilih_tanggal_pesan} - {pilih_tanggal_pesan}   </Text>
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
		  color:'gray',
        }}>
        Lokasi bertemu
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>
		  {this.state.tempat_pilih}
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginLeft: 20,
        }}></View>
    </View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
		  color:'gray',
        }}>
        Quantity
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.jumlah_order} KG</Text>
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
		  color:'gray',
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{(totalreal)}  SR   ( {(rupiah)} )</Text>
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
                        marginBottom: 60,
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
                     onPress={()=>this.klikMenu1()}>
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
