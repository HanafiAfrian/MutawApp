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
import RadioButton from 'react-native-simple-radio-button-input';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import {IconMoney} from '../../assets';

export default class MoneychangerOrder extends Component {
   constructor(props) {
    super(props);
    this.state = {show: false ,
	show1: false ,
	show2: false ,
	show3: false ,
	show4: false ,
	show5: false ,
	show6: false ,
	
	
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
  
   this.url = "https://mutawif.co.id/api/muapi/moneychanger.php";
  }
componentDidMount(){
      this.ambilListData()
  }
  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
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
    sr1: false,
    sr5: false,
    sr10: false,
    sr20: false,
    sr50: false,
    sr100: false,
    sr500: false,
  };

  sr1Pressed() {
    this.setState({
      sr1: true,
      sr5: false,
      sr10: false,
      sr20: false,
      sr50: false,
      sr100: false,
      sr500: false,
    });
  }

  sr5Pressed() {
    this.setState({
      sr1: false,
      sr5: true,
      sr10: false,
      sr20: false,
      sr50: false,
      sr100: false,
      sr500: false,
    });
  }

  sr10Pressed() {
    this.setState({
      sr1: false,
      sr5: false,
      sr10: true,
      sr20: false,
      sr50: false,
      sr100: false,
      sr500: false,
    });
  }
  sr20Pressed() {
    this.setState({
      sr1: false,
      sr5: false,
      sr10: false,
      sr20: true,
      sr50: false,
      sr100: false,
      sr500: false,
    });
  }
  sr50Pressed() {
    this.setState({
      sr1: false,
      sr5: false,
      sr10: false,
      sr20: false,
      sr50: true,
      sr100: false,
      sr500: false,
    });
  }
  sr100Pressed() {
    this.setState({
      sr1: false,
      sr5: false,
      sr10: false,
      sr20: false,
      sr50: false,
      sr100: true,
      sr500: false,
    });
  }
  sr500Pressed() {
    this.setState({
      sr1: false,
      sr5: false,
      sr10: false,
      sr20: false,
      sr50: false,
      sr100: false,
      sr500: true,
    });
  }
  
  
    klikMenu(){
		 const { tampil, date, mode } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');
	   
var latitude =	this.props.route.params.latitude; 
var longitude =	this.props.route.params.longitude; 
	   
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	 var jenis =	this.props.route.params.jenis;
  var totalreal = this.state.jumlah_order * 1;
	  var totalrupiah = this.state.jumlah_order * 3921 * 1;
	  
	  	  const numb = this.state.jumlah_order * 3921 *1 ;
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
		  if (this.state.sr1 == true  && this.state.sr5 == false && this.state.sr10 == false 
	  && this.state.sr20 == false  && this.state.sr50 == false && this.state.sr100 == false 
	  && this.state.sr500 == false)
	  {
				this.setState({show: true})
	  }
	  
	  
	  
	  
	  
		 else if (this.state.sr1 == false  && this.state.sr5 == true && this.state.sr10 == false 
	  && this.state.sr20 == false  && this.state.sr50 == false && this.state.sr100 == false 
	  && this.state.sr500 == false)
	  {
		 
							  
				this.setState({show1: true})
	  }	  
	  
	  	  
		else  if (this.state.sr1 == false  && this.state.sr5 == false && this.state.sr10 == true 
	  && this.state.sr20 == false  && this.state.sr50 == false && this.state.sr100 == false 
	  && this.state.sr500 == false)
	  {
		 	this.setState({show2: true})
	  }	
	  	else	  if (this.state.sr1 == false  && this.state.sr5 == false && this.state.sr10 == false 
	  && this.state.sr20 == true  && this.state.sr50 == false && this.state.sr100 == false 
	  && this.state.sr500 == false)
	  {
		  this.setState({show3: true})
	  }
	  
	    		 else if (this.state.sr1 == false  && this.state.sr5 == false && this.state.sr10 == false 
	  && this.state.sr20 == false  && this.state.sr50 == true && this.state.sr100 == false 
	  && this.state.sr500 == false)
	  {
		  this.setState({show4: true})
	  }
	  

	  	      		 else if (this.state.sr1 == false  && this.state.sr5 == false && this.state.sr10 == false 
	  && this.state.sr20 == false  && this.state.sr50 == false && this.state.sr100 == false 
	  && this.state.sr500 == true)
	  {
		  this.setState({show6: true})
	  }
	  
	 else 
	

		  
		  {
			  
			   this.setState({show5: true})
		  }
		  
	  
	  
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
	  var jenis =	this.props.route.params.jenis;
  var totalreal = this.state.jumlah_order * 1;
   var totalreal1 = this.state.jumlah_order * 5;
   var totalreal2 = this.state.jumlah_order * 10;
    var totalreal3 = this.state.jumlah_order * 20;
    var totalreal4 = this.state.jumlah_order * 50;
    var totalreal5 = this.state.jumlah_order / 3921;
	 var totalreal6 = this.state.jumlah_order * 500;
  
	  var totalrupiah = this.state.jumlah_order * 3921 * 1;
	  
	  	  const numb = this.state.jumlah_order * 3921 *1 ;
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
	
	
	
		  var totalrupiah1 = this.state.jumlah_order * 3921 * 5;
	  
	  	  const numb1 = this.state.jumlah_order * 3921 *5 ;
const format1 = numb1.toString().split('').reverse().join('');
const convert1 = format1.match(/\d{1,3}/g);
const rupiah1 = 'Rp. ' + convert1.join('.').split('').reverse().join('')
	console.log(rupiah1) 
	
	  var totalrupiah2 = this.state.jumlah_order * 3921 * 10;
	  
	  	  const numb2 = this.state.jumlah_order * 3921 *10 ;
const format2 = numb2.toString().split('').reverse().join('');
const convert2 = format2.match(/\d{1,3}/g);
const rupiah2 = 'Rp. ' + convert2.join('.').split('').reverse().join('')
	console.log(rupiah2) 
	
		  var totalrupiah3 = this.state.jumlah_order * 3921 * 20;
	  
	  	  const numb3 = this.state.jumlah_order * 3921 *20 ;
const format3 = numb3.toString().split('').reverse().join('');
const convert3 = format3.match(/\d{1,3}/g);
const rupiah3 = 'Rp. ' + convert3.join('.').split('').reverse().join('')
	console.log(rupiah3) 
	
		  var totalrupiah4 = this.state.jumlah_order * 3921 * 50;
	  
	  	  const numb4 = this.state.jumlah_order * 3921 *50 ;
const format4 = numb4.toString().split('').reverse().join('');
const convert4 = format4.match(/\d{1,3}/g);
const rupiah4 = 'Rp. ' + convert4.join('.').split('').reverse().join('')
	console.log(rupiah4) 
	
	  var totalreal5 = this.state.jumlah_order / this.state.hargarupiah;
	  var lebihlimajuta  = parseFloat(totalreal5).toFixed(0);
	
	  
	  	  const numb5 = this.state.jumlah_order  *1 ;
const format5 = numb5.toString().split('').reverse().join('');
const convert5 = format5.match(/\d{1,3}/g);
const rupiah5 = 'Rp. ' + convert5.join('.').split('').reverse().join('')
	console.log(rupiah5) 
	
	  var totalrupiah6 = this.state.jumlah_order * 3921 * 500;
	  
	  	  const numb6 = this.state.jumlah_order * 3921 *500 ;
const format6 = numb6.toString().split('').reverse().join('');
const convert6 = format6.match(/\d{1,3}/g);
const rupiah6 = 'Rp. ' + convert5.join('.').split('').reverse().join('')
	console.log(rupiah6) 
	
	
	  	  if (this.state.jumlah_order < 5000000)
	  {
		  alert('Minimal Jumlah Uang Rp 5000000 ');  
		  
	  }
	  
	  else
	  {
	        this.props.navigation.navigate('TotalTagihanmoneychanger', {
					
latitude :latitude,
longitude :longitude,		  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				  note: this.state.note, 
			jenis :	this.props.route.params.jenis,	
			pecehan :this.state.jumlah_order,
totalreal: lebihlimajuta, 
				totalrupiah: this.state.jumlah_order		
			  })
                        }
	  }
	  
	
  render() {
	   	  if (this.state.jumlah_order != '')
	  {
		 this.state.sr1= false,
      this.state.sr5= false,
      this.state.sr10= false,
      this.state.sr20= false,
      this.state.sr50 =false,
      this.state.sr100= false,
      this.state.sr500 = false
		  
	  }
	 
	 
	  const { tampil, date, mode } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');
	   
	   var latitude =	this.props.route.params.latitude; 
var longitude =	this.props.route.params.longitude; 
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	  var jenis =	this.props.route.params.jenis;
  var totalreal = this.state.jumlah_order * 1;
   var totalreal1 = this.state.jumlah_order * 5;
   var totalreal2 = this.state.jumlah_order * 10;
    var totalreal3 = this.state.jumlah_order * 20;
    var totalreal4 = this.state.jumlah_order * 50;
	
    var totalreal5 = this.state.jumlah_order / this.state.hargarupiah;
	  var lebihlimajuta  = parseFloat(totalreal5).toFixed(0);
	
	
	 var totalreal6 = this.state.jumlah_order * 500;
  
	  var totalrupiah = 1000000 / this.state.hargarupiah * 1;
	  var sejuta  = parseFloat(totalrupiah).toFixed(0);
	  
	  	  const numb = this.state.jumlah_order * 3921 *1 ;
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
	
	
	
		  var totalrupiah1 = 2000000 / this.state.hargarupiah ;
	   var duajuta  = parseFloat(totalrupiah1).toFixed(0);
	   
	   
	  	  const numb1 = this.state.jumlah_order * 3921 *5 ;
const format1 = numb1.toString().split('').reverse().join('');
const convert1 = format1.match(/\d{1,3}/g);
const rupiah1 = 'Rp. ' + convert1.join('.').split('').reverse().join('')
	console.log(rupiah1) 
	
	  var totalrupiah2 = 3000000 / this.state.hargarupiah ;
	   var tigajuta  = parseFloat(totalrupiah2).toFixed(0);
	   
	  	  const numb2 = this.state.jumlah_order * 3921 *10 ;
const format2 = numb2.toString().split('').reverse().join('');
const convert2 = format2.match(/\d{1,3}/g);
const rupiah2 = 'Rp. ' + convert2.join('.').split('').reverse().join('')
	console.log(rupiah2) 
	
		  var totalrupiah3 = 4000000 / this.state.hargarupiah ;
	  	   var empatjuta  = parseFloat(totalrupiah3).toFixed(0)
		   
	  	  const numb3 = this.state.jumlah_order * 3921 *20 ;
const format3 = numb3.toString().split('').reverse().join('');
const convert3 = format3.match(/\d{1,3}/g);
const rupiah3 = 'Rp. ' + convert3.join('.').split('').reverse().join('')
	console.log(rupiah3) 
	
		  var totalrupiah4 =  5000000 / this.state.hargarupiah ;
		    	   var limajuta  = parseFloat(totalrupiah4).toFixed(0)
		  
	  	  const numb4 = this.state.jumlah_order * 3921 *50 ;
const format4 = numb4.toString().split('').reverse().join('');
const convert4 = format4.match(/\d{1,3}/g);
const rupiah4 = 'Rp. ' + convert4.join('.').split('').reverse().join('')
	console.log(rupiah4) 
	
	  var totalrupiah5 = this.state.jumlah_order * 3921 * 100;
	  
	  	  const numb5 = this.state.jumlah_order  *1 ;
const format5 = numb5.toString().split('').reverse().join('');
const convert5 = format5.match(/\d{1,3}/g);
const rupiah5 = 'Rp. ' + convert5.join('.').split('').reverse().join('')
	console.log(rupiah5) 
	
	  var totalrupiah6 = this.state.jumlah_order * 3921 * 500;
	  
	  	  const numb6 = this.state.jumlah_order * 3921 *500 ;
const format6 = numb6.toString().split('').reverse().join('');
const convert6 = format6.match(/\d{1,3}/g);
const rupiah6 = 'Rp. ' + convert5.join('.').split('').reverse().join('')
	console.log(rupiah6) 
	
	
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
                onPress={() => this.props.navigation.navigate('MoneychangerLayanan',{telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi } )}>
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
                <Image source={IconMoney} style={{alignSelf: 'center'}} />
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                  IDR 
                  <Text style={{color: 'orange'}}> to SR</Text>
                </Text>
              </View>
              <View>
               
              </View>
            </View>
          </View>

          <View style={styles.container}>
            {/* form */}
            <View style={{marginLeft: 10, marginBottom: 20}}>
              <Text style={{fontWeight: 'bold', color:'gray'}}>Quantity :</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <RadioButton
                    color={'#0d7883'}
                    selected={this.state.sr1}
                    onPress={() => this.sr1Pressed()}
                  />
                  <Text style={{marginTop: 2, marginLeft: 2,  color:'gray'}}>1.000.000</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: 10,
                  }}>
                  <RadioButton
                    color={'#0d7883'}
                    selected={this.state.sr5}
                    onPress={() => this.sr5Pressed()}
                  />
                  <Text style={{marginTop: 2, marginLeft: 2,  color:'gray', marginRight:60}}>4.000.000</Text>
                </View>
                
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <RadioButton
                    color={'#0d7883'}
                    selected={this.state.sr20}
                    onPress={() => this.sr20Pressed()}
                  />
                  <Text style={{marginTop: 2, marginLeft: 2,  color:'gray'}}>2.000.000</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: 10,
                  }}>
                  <RadioButton
                    color={'#0d7883'}
                    selected={this.state.sr50}
                    onPress={() => this.sr50Pressed()}
                  />
                  <Text style={{marginTop: 2, marginLeft: 2, color:'grey',marginRight:60}}>5.000.000</Text>
                </View>
              
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <RadioButton
                    color={'#0d7883'}
                    selected={this.state.sr500}
                    onPress={() => this.sr500Pressed()}
                  />
                  <Text style={{marginTop: 2, marginLeft: 2, color:'gray'}}>3.000.000</Text>
                </View>
				<View>
				<View>
                  <Text style={styles.subformtext}>>5.000.000</Text>
                </View>
                <View style={styles.subform}>
                  <FontAwesome5
                    size={16}
                    style={styles.searchIcon}
                    name={'edit'}
                  />
                
				     <TextInput
                    style={styles.input}
					 placeholderTextColor="gray"
                      placeholder="Input"
					keyboardType = 'numeric'
 value = {this.state.jumlah_order}
                    onChangeText = {(text) => this.setState({jumlah_order: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
				</View>
              </View>
            </View>

            <View style={styles.searchSection}>
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
                    placeholder="Lokasi"
					 placeholderTextColor="gray"
                  value = { this.state.tempat_pilih }
                    onChangeText = {(text) => this.setState({tempat_pilih: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View>
               <View>
                  <Text style={styles.subformtext}>Note:</Text>
                </View>
                <View style={styles.subform}>
                  <FontAwesome5
                    size={16}
                    style={styles.searchIcon}
                    name={'edit'}
                  />
                
				     <TextInput
                    style={styles.input}
					 placeholderTextColor="gray"
                      placeholder="Pecahan 100"
					
 value = {this.state.note}
                    onChangeText = {(text) => this.setState({note: text })}
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

              <TouchableOpacity
             style={styles.roundButton1}
               onPress={()=>this.klikMenu()}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              Pesan
            </Text>
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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 20, }}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16
		  ,color:'gray',
        }}>
     Quantity
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Rp. 1.000.000</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16
		  ,color:'gray'
        }}>
		Uang SR Yang di dapatkan :
     
      </Text>
	   <Text style={{marginLeft: 20, color: 'red'}}>{sejuta} SR</Text>
     
    </View>
  <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16
		  ,color:'gray'
        }}> Note 
       </Text>
 <Text style={{marginLeft: 20, color: 'red'}}>{this.state.note}</Text>
    </View>

    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16
		  ,color:'gray'
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.tempat_pilih}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
		marginRight: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16 ,color:'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>{pilih_tanggal_pesan}</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Jam</Text>
  <Text style={{color: 'red'}}>{pilih_jam_pesan}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16 ,color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
   Rp. 1.000.000
      </Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
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
                          this.props.navigation.navigate('TotalTagihanmoneychanger', {
					latitude :latitude,
longitude :longitude,		  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				 note: this.state.note, 
			jenis :	this.props.route.params.jenis,	
			pecehan :'1000000',
totalreal: sejuta, 
				totalrupiah: 1000000			
			  })
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
            transparent={true}
            visible={this.state.show1}>
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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Jenis Pecahan :
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Rp. 4.000.000</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
       Uang SR Yang di dapatkan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{empatjuta} SR</Text>
    </View>
 <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
       Note
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.note}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.tempat_pilih}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
		marginRight: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>{pilih_tanggal_pesan}</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Jam</Text>
  <Text style={{color: 'red'}}>{pilih_jam_pesan}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		  marginRight: 20,
		  marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
         Rp. 4.000.000
      </Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
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
                        onPress={() => this.setState({show1: false})}
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
                          this.props.navigation.navigate('TotalTagihanmoneychanger', {
				latitude :latitude,
longitude :longitude,			  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
			  note: this.state.note, 	
			jenis :	this.props.route.params.jenis,	
			pecehan :'4000000',
totalreal: empatjuta, 
				totalrupiah: 4000000			
			  })
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
            transparent={true}
            visible={this.state.show2}>
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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
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
          fontSize: 16,color:'gray'
        }}>
        Jenis Pecahan :
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>10 SR</Text>
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
          fontSize: 16,color:'gray'
        }}>
        Quantity (Lembar)
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.jumlah_order}</Text>
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
          fontSize: 16,color:'gray'
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.tempat_pilih}</Text>
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
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>{pilih_tanggal_pesan}</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Jam</Text>
  <Text style={{color: 'red'}}>{pilih_jam_pesan}</Text>
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
          fontSize: 16,color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
         {(totalreal2)}  SR   ( {rupiah2})
      </Text>
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
                        onPress={() => this.setState({show2: false})}
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
                          this.props.navigation.navigate('TotalTagihanmoneychanger', {
				latitude :latitude,
longitude :longitude,			  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				
			jenis :	this.props.route.params.jenis,	
			pecehan :'10',
totalreal: totalreal *10, 
				totalrupiah: totalrupiah *10			
			  })
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
            transparent={true}
            visible={this.state.show3}>
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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
       Quantity
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Rp. 2.000.000</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
     Uang SR Yang di dapatkan :
      </Text>
  <Text style={{marginLeft: 20, color: 'red'}}>{duajuta} SR</Text>
    </View>

    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
	   <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16
		  ,color:'gray'
        }}> Note 
       </Text>
 <Text style={{marginLeft: 20, color: 'red'}}>{this.state.note}</Text>
    </View>
	  <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.tempat_pilih}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
		marginRight: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>{pilih_tanggal_pesan}</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Jam</Text>
  <Text style={{color: 'red'}}>{pilih_jam_pesan}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
        Rp. 2.000.000
      </Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
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
                        onPress={() => this.setState({show3: false})}
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
                          this.props.navigation.navigate('TotalTagihanmoneychanger', {
					latitude :latitude,
longitude :longitude,		  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				note: this.state.note, 
			jenis :	this.props.route.params.jenis,	
			pecehan :'2000000',
totalreal:duajuta, 
				totalrupiah: 2000000			
			  })
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
            transparent={true}
            visible={this.state.show4}>
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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Jenis Pecahan :
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Rp. 5.000.000</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
     Uang SR Yang di dapatkan
      </Text>
  <Text style={{marginLeft: 20, color: 'red'}}>{limajuta} SR</Text>
    </View>
 <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
      Note
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.note}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.tempat_pilih}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
		marginRight: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>{pilih_tanggal_pesan}</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Jam</Text>
  <Text style={{color: 'red'}}>{pilih_jam_pesan}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
     Rp. 5.000.000
      </Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
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
                        onPress={() => this.setState({show4: false})}
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
                          this.props.navigation.navigate('TotalTagihanmoneychanger', {
					latitude :latitude,
longitude :longitude,		  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				 note: this.state.note, 
			jenis :	this.props.route.params.jenis,	
			pecehan :'5000000',
totalreal: limajuta, 
				totalrupiah: 5000000			
			  })
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
            transparent={true}
            visible={this.state.show5}>
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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
         Quantity 
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.jumlah_order} </Text>
    </View>
   
 <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Hasil SR Yang di dapatkan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{lebihlimajuta}  SR</Text>
    </View>
	
	 <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Note 
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.note}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.tempat_pilih}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
		marginRight: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>{pilih_tanggal_pesan}</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Jam</Text>
  <Text style={{color: 'red'}}>{pilih_jam_pesan}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
    ( {rupiah5})
      </Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
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
                        onPress={() => this.setState({show5: false})}
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
		
		
		
		
		
		
		
			 <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.show6}>
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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color:'gray'}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
  Quantity
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Rp. 3.000.000</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
      Uang SR Yang di dapatkan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{tigajuta} SR</Text>
    </View>
 <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Note
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.note}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.tempat_pilih}</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>{pilih_tanggal_pesan}</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,color:'gray'}}>Jam</Text>
  <Text style={{color: 'red'}}>{pilih_jam_pesan}</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 16,color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
        Rp, 3.000.000
      </Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
		marginRight: 20,
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
                        onPress={() => this.setState({show6: false})}
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
                          this.props.navigation.navigate('TotalTagihanmoneychanger', {
				
latitude :latitude,
longitude :longitude,			  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
				 note: this.state.note, 
			jenis :	this.props.route.params.jenis,	
			pecehan :'3000000',
totalreal: tigajuta, 
				totalrupiah: 3000000			
			  })
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
	color:'grey',
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

  roundButtonidr: {
    borderRadius: 5,
    borderColor: '#0d7883',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    padding: 10,
  },
  roundButtonsr: {
    borderRadius: 5,
    borderColor: '#0d7883',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    padding: 10,
    backgroundColor: '#0d7883',
  },
  roundButton: {
    borderRadius: 5,
    borderColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    padding: 10,
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
