import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import text from './konfirm';
import { WebView } from 'react-native-webview';
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
import RadioButton from 'react-native-simple-radio-button-input';

import {IconMutawif, IconBack, IconNasibox} from '../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
export default class MutawifOrder extends Component {
  

  constructor(props) {
    super(props);
    this.state = {show: false ,
		isVisible: true,
	show1: false ,
	    nama:'',
        alamat:'',
        listData:[],
        idEdit:null,
	
	 pilih_tanggal_pesan: '',
	 pilih_tanggal_selesai: '',
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
			 date1: new Date(),
    mode: 'date',
	    mode1: 'date1',
    tampil: false,
	   tampil1: false,
			no_bus: '',
			
			no_hpbus: '',
			no_pesawat: '',
			};
  
   this.url = "https://mutawif.co.id/api/muapi/mutawif.php";
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
 setDate1 = (event, date1) => {
    date1 = date1 || this.state.date1;

    this.setState({
      tampil1: Platform.OS === 'ios' ? true : false,
      date1,
    });
  }
  tampil = mode => {
    this.setState({
      tampil: true,
      mode,
    });
  }
  tampil1 = mode1 => {
    this.setState({
      tampil1: true,
      mode1,
    });
  }
  datepicker = () => {
    this.tampil('date');
  }
  datepicker1 = () => {
    this.tampil1('date1');
  }

  timepicker = () => {
    this.tampil('time');
  }

    showLoader() {
    this.setState({ isVisible: true });
  }

  hideLoader() {
    this.setState({ isVisible: false });
  }

  render() {
	  var latitude =	this.props.route.params.latitude; 
var longitude =	this.props.route.params.longitude; 
	  const { tampil, date, mode } = this.state;
	   const { tampil1, date1, mode1 } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');

	   	   var pilih_tanggal_selesai =  moment(date1).format('YYYY-MM-DD');
	   var hitungawal= moment(date).format('DD');
	   
           var hitungakhir= moment(pilih_tanggal_selesai).format('DD');
	   
	   var hasil =   +hitungakhir - +hitungawal ;
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	 var hargarupiah =	this.props.route.params.hargarupiah;
	
  var totalreal = hasil* this.state.harga;
	  var totalrupiah = hasil * this.state.hargarupiah;
	  
	  
	 
	  
	  	  	  const numb = hasil  * hargarupiah;
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
                  onPress={() => this.props.navigation.navigate('Mutawif',{telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi })}>
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
                <Image source={IconMutawif} style={{alignSelf: 'center'}} />
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                 Mutawif 
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
                  <Text style={styles.subformtext}>Pilih Tanggal Mulai</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="calendar"
                    size={20}
					 placeholderTextColor="gray"
                    color="grey"
					onPress={this.datepicker}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="2021-12-30"
                   	 value = {pilih_tanggal_pesan} 
                  onChangeText = {(text) => this.setState({ pilih_tanggal_pesan: text })}
                   onPress={this.datepicker}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View>
                <View>
                  <Text style={styles.subformtext}>Waktu Mulai</Text>
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
					 placeholderTextColor="gray"
                		value = {pilih_jam_pesan}
 onChangeText = {(text) => this.setState({pilih_jam_pesan: text })}
                    underlineColorAndroid="transparent"
                  />
				  				  	    { tampil && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
                </View>
              </View>
            </View>

            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Pilih Tanggal Selesai</Text>
                </View>
                <View style={styles.subform}>
                   <Icon
                    style={styles.searchIcon}
                    name="calendar"
                    size={20}
                    color="grey"
					onPress={this.datepicker1}
                  />
                  <TextInput
                    style={styles.input}
                      placeholder="2021-12-30"
					   placeholderTextColor="gray"
			
                  value = { pilih_tanggal_selesai }
                   onChangeText = {(text) => this.setState({pilih_tanggal_selesai: text })}
                    underlineColorAndroid="transparent"
                  />
				  		  				  	    { tampil1 && <DateTimePicker value={date1}
                    mode1={mode1}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate1} />
        }
                </View>
              </View>

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
                    placeholder="Lokasi"
                    value = { this.state.tempat_pilih }
					 placeholderTextColor="gray"
                    onChangeText = {(text) => this.setState({tempat_pilih: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 18,
                  marginTop: 20,
                  fontWeight: 'bold',
                  marginBottom: 10,
				  color :'gray'
                }}>
                Makkah: (Wajib)
              </Text>
            </View>
            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Nama Hotel:</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="pencil"
                    size={16}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nama Hotel"
					 placeholderTextColor="gray"
                  value = { this.state.nama_hotel_mekkah }
                    onChangeText = {(text) => this.setState({nama_hotel_mekkah: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.subformtext}>Lama Menginap</Text>
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
					keyboardType = 'numeric'
                    placeholder="Jumlah Hari"
					 placeholderTextColor="gray"
                    value = { this.state.lama_hotel_mekkah }
                    onChangeText = {(text) => this.setState({lama_hotel_mekkah: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 18,
                  marginTop: 20,
                  fontWeight: 'bold',
                  marginBottom: 10,
				  color :'gray'
                }}>
                Madinah: (Wajib)
              </Text>
            </View>
            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Nama Hotel:</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="pencil"
                    size={16}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nama Hotel"
                  value = { this.state.nama_hotel_madinah }
				   placeholderTextColor="gray"
                    onChangeText = {(text) => this.setState({nama_hotel_madinah: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.subformtext}>Lama Menginap</Text>
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
					keyboardType = 'numeric'
					 placeholderTextColor="gray"
                    placeholder="Jumlah Hari"
                          value = { this.state.lama_hotel_madinah }
                    onChangeText = {(text) => this.setState({lama_hotel_madinah: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginLeft: 18,
                  marginTop: 20,
                  fontWeight: 'bold',
                  marginBottom: 10,
				  color :'gray'
				  
                }}>
                Jeddah: (Optional)
              </Text>
            </View>
            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Nama Hotel:</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="pencil"
                    size={16}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nama Hotel"
					 placeholderTextColor="gray"
                       value = { this.state.nama_hotel_jeddah }
                    onChangeText = {(text) => this.setState({nama_hotel_jeddah: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View>
                <View>
                  <Text style={styles.subformtext}>Lama Menginap</Text>
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
					keyboardType = 'numeric'
                    placeholder="Jumlah Hari"
					 placeholderTextColor="gray"
                       value = { this.state.lama_hotel_jeddah }
                    onChangeText = {(text) => this.setState({lama_hotel_jeddah: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontWeight: 'bold', marginBottom: 10, color: 'gray'}}>
                Isi Form Berikut :
              </Text>
              <TextInput
                style={styles.inputform}
                placeholder="Nama PIC Travel"
				placeholderTextColor="gray"
                  value = { this.state.nama_plc }
                    onChangeText = {(text) => this.setState({nama_plc: text })}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputform}
				keyboardType = 'numeric'
				placeholderTextColor="gray"
                placeholder="No.Hp PIC Travel"
                value = { this.state.nohp_plc }
                    onChangeText = {(text) => this.setState({nohp_plc: text })}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputform}
                placeholder="No. Bus"
				placeholderTextColor="gray"
               value = { this.state.no_bus }
                    onChangeText = {(text) => this.setState({no_bus: text })}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputform}
				keyboardType = 'numeric'
                placeholder="No.Hp Bus"
				placeholderTextColor="gray"
                  value = { this.state.no_hpbus }
                    onChangeText = {(text) => this.setState({no_hpbus: text })}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputform}
                placeholder="No.Pesawat"
				placeholderTextColor="gray"
              value = { this.state.no_pesawat }
                    onChangeText = {(text) => this.setState({no_pesawat: text })}
                underlineColorAndroid="transparent"
              />

              <View>
                <TouchableOpacity style={styles.borderdot}>
                  <FontAwesome5
                    size={50}
                    style={styles.searchIcon}
					 onPress={() => this.setState({show1: true})}
                    name={'file-upload'}
                  />
                  <Text style={{marginLeft: 10, color:'gray'}}>Upload</Text>
                </TouchableOpacity>
                <Text style={{color:'gray'}}>
                  Upload Data Jemaah / Manifest (Data berisi nama jemaah + No.Hp + Ttl) (Format .pdf)
                </Text>
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
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>Nama PIC Travel</Text>
        <Text style={{color: 'red'}}>{this.state.nama_plc}</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>No.HP PIC Travel</Text>
        <Text style={{color: 'red'}}>{this.state.nohp_plc}</Text>
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
        marginTop: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>Hotel Makkah</Text>
        <Text style={{color: 'red'}}>{this.state.nama_hotel_mekkah}</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>Lama Menginap</Text>
        <Text style={{color: 'red'}}>{this.state.lama_hotel_mekkah} Hari</Text>
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
        marginTop: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>Hotel Madinah</Text>
        <Text style={{color: 'red'}}>{this.state.nama_hotel_madinah}</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20, color : 'gray'}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>Lama Menginap</Text>
        <Text style={{color: 'red'}}>{this.state.lama_hotel_madinah} Hari</Text>
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
        marginTop: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>Hotel Jeddah</Text>
        <Text style={{color: 'red'}}>{this.state.nama_hotel_jeddah}</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14, color : 'gray'}}>Lama Menginap</Text>
        <Text style={{color: 'red'}}>{this.state.lama_hotel_jeddah} Hari</Text>
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
          fontSize: 14, color : 'gray'
        }}>
        Dekskripsi Pesanan
      </Text>
  <Text style={{marginLeft: 20, color: 'red'}}>Mutawif 1 Org ({hasil}Hari)</Text>
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
          fontSize: 14 , color : 'gray'
        }}>
        Tanggal & Waktu Mulai
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{pilih_tanggal_pesan}, {pilih_jam_pesan} </Text>
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
          fontSize: 14, color : 'gray'
        }}>
        Tanggal & Waktu Selesai
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{pilih_tanggal_selesai} </Text>
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
          fontSize: 14, color : 'gray'
        }}>
        No. Bus
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.no_bus} </Text>
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
          fontSize: 14, color : 'gray'
        }}>
        No.Hp Bus
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.no_hpbus} </Text>
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
          fontSize: 14, color : 'gray'
        }}>
        Lokasi bertemu
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>
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
          fontSize: 14, color : 'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{totalreal} SR ({rupiah})</Text>
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
                          this.props.navigation.navigate('TotalTagihanKerja', {
							  
			telepon : telepon,
nama_lengkap : nama_lengkap,
latitude : latitude, 
longitude  :longitude,
email_pribadi : email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			pilih_jam_pesan: pilih_jam_pesan, 
			pilih_tanggal_selesai : pilih_tanggal_selesai,
			
			  
			  tempat_pilih: this.state.tempat_pilih, 
			  nama_hotel_mekkah : this.state.nama_hotel_mekkah,
			  lama_hotel_mekkah : this.state.lama_hotel_mekkah,
			  
			    nama_hotel_madinah : this.state.nama_hotel_madinah,
			  lama_hotel_madinah : this.state.lama_hotel_madinah,
			  
			      nama_hotel_jeddah : this.state.nama_hotel_jeddah,
			  lama_hotel_jeddah : this.state.lama_hotel_jeddah,
			  nama_mutawif: this.state.nama_plc, 	
			  nohp_mutawif :   this.state.nohp_plc, 
		
		no_bus: this.state.no_bus,
	no_hpbus: this.state.no_hpbus,
			  jumlah_order: hasil, 
				
		
			no_pesawat: this.state.no_pesawat,
totalreal: totalreal, 
				totalrupiah: totalrupiah 			
			  }
						  )
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
		 <View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.show1}>
			   <WebView
   source={{ uri: 'https://mutawif.co.id/api/daftarb2b/uploaddokumen.php?jenis=Mutawif&&username=' + nama_lengkap }}
   style={styles.webViewStyle}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   onLoadStart={() => this.showLoader()}
   onLoad={() => this.hideLoader()}
 />
              <SafeAreaView>
                <ScrollView>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                      <View>
					  
					  
					  
					  
					  
					  
					  
					  
					  
					<View>
   


  
 
    

  
   
    
  
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
                          onPress={() => this.setState({show1: false})}
                          style={{
                            width: '90%',
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
                            Kembali
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
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },

  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    paddingRight:20,
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
	color :'black'
  },

  // formpesanan: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },

  input: {
    borderBottomWidth: 1,
color :'black',
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
	color :'black',
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
