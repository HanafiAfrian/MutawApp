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
import {IconJastip} from '../../assets';

export default class JasatitipOrder extends Component {
   constructor(props) {
    super(props);
    this.state = {show: false ,
	show1: false ,
	show2: false ,
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
  
   this.url = "https://mutawif.co.id/api/muapi/jasatitip.php";
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
    idr1000: false,
    idr2000: false,
    idr5000: false,
    idr10000: false,
    idr20000: false,
    idr50000: false,
    idr100000: false,
  };

  idr1000Pressed() {
    this.setState({
      idr1000: true,
      idr2000: false,
      idr5000: false,
      idr10000: false,
      idr20000: false,
      idr50000: false,
      idr100000: false,
    });
  }

  idr2000Pressed() {
    this.setState({
      idr1000: false,
      idr2000: true,
      idr5000: false,
      idr10000: false,
      idr20000: false,
      idr50000: false,
      idr100000: false,
    });
  }

  idr5000Pressed() {
    this.setState({
      idr1000: false,
      idr2000: false,
      idr5000: true,
      idr10000: false,
      idr20000: false,
      idr50000: false,
      idr100000: false,
    });
  }
  idr10000Pressed() {
    this.setState({
      idr1000: false,
      idr2000: false,
      idr5000: false,
      idr10000: true,
      idr20000: false,
      idr50000: false,
      idr100000: false,
    });
  }
  idr20000Pressed() {
    this.setState({
      idr1000: false,
      idr2000: false,
      idr5000: false,
      idr10000: false,
      idr20000: true,
      idr50000: false,
      idr100000: false,
    });
  }
  idr50000Pressed() {
    this.setState({
      idr1000: false,
      idr2000: false,
      idr5000: false,
      idr10000: false,
      idr20000: false,
      idr50000: true,
      idr100000: false,
    });
  }
  idr100000Pressed() {
    this.setState({
      idr1000: false,
      idr2000: false,
      idr5000: false,
      idr10000: false,
      idr20000: false,
      idr50000: false,
      idr100000: true,
    });
  }
  
  
    klikMenu(){
		 const { tampil, date, mode } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');
	   
	   
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	 var jenis =	this.props.route.params.jenis;
	 	 var hargarupiah =	this.props.route.params.hargarupiah;
	 
	 
  var totalreal = this.state.jumlah_order * 100;
	  var totalrupiah = this.state.jumlah_order * this.state.hargarupiah ;
	  
	  	  const numb = this.state.jumlah_order * hargarupiah ;
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
		  if (this.state.idr50000 == true  && this.state.idr100000 == false)
	  {
		
	this.setState({show: true})
						  
	  }
	  
	  
	  		 else if (this.state.idr50000 == false  && this.state.idr100000 == true)
	  {
		
		this.setState({show1: true})
	  }
	   else 
	

		  
		  {
			  
			   this.setState({show2: true})
		  }
	}
	
	
	 klikMenu1(){
 
		  alert('Silhkan Pilih Kategori Pilihan ');  
		  
	 }
  render() {
	 
	  const { tampil, date, mode } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');
	   
	   
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	  var jenis =	this.props.route.params.jenis;
	  	 	 var hargarupiah =	this.props.route.params.hargarupiah;
	  
	  
  var totalreal =  this.state.jumlah_order *this.state.harga ;
  
  

	  var totalrupiah = this.state.jumlah_order *  this.state.hargarupiah ;
	  
	  
	    
		
	  	  const numb = this.state.jumlah_order * hargarupiah  ;
	const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
	
	
	  var totalreal1 = this.state.jumlah_order *this.state.harga ;
	    var totalrupiah1 = this.state.jumlah_order *  this.state.hargarupiah ;
	
	  	  const numb1 = this.state.jumlah_order * hargarupiah ;
	const format1 = numb1.toString().split('').reverse().join('');
const convert1 = format1.match(/\d{1,3}/g);
const rupiah1 = 'Rp. ' + convert1.join('.').split('').reverse().join('')
	console.log(rupiah1)	
	
	 
	
	
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
                   onPress={() => this.props.navigation.navigate('Jasatitip',{telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi, hargarupiah:hargarupiah } )}>
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
                <Image source={IconJastip} style={{alignSelf: 'center', width:50, height:50}} />
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                  Jasa 
                  <Text style={{color: 'orange'}}> Titip</Text>
                </Text>
              </View>
              <View>
               
              </View>
            </View>
          </View>

          <View style={styles.container}>
            {/* form */}
            <View style={{marginLeft: 10, marginBottom: 20}}>
              <Text style={{fontWeight: 'bold', color:'grey'}}>Choose :</Text>
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
                    selected={this.state.idr50000}
                    onPress={() => this.idr50000Pressed()}
                  />
                  <Text style={{marginTop: 2, marginLeft: 2,  color:'gray'}}>Pribadi</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: 10,
                  }}>
                 <RadioButton
                      color={'#0d7883'}
                      selected={this.state.idr100000}
                      onPress={() => this.idr100000Pressed()}
                    />
                  <Text style={{marginTop: 2, marginLeft: 2,  color:'gray', marginRight:60}}>Sedekah</Text>
                </View>
            
		
              </View>
			 
			 <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:40, marginRight:10}}>
				 <View>
				 <View>
                  <Text style={styles.subformtext}>Jenis Barang</Text>
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
			
 value = {this.state.jenis}
                    onChangeText = {(text) => this.setState({jenis: text })}
                    underlineColorAndroid="transparent"
                  />
				 </View>
                </View>
				 <View>
				  <View>
                  <Text style={styles.subformtext}>Jumlah Barang</Text>
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
                      placeholder="Input"
					keyboardType = 'numeric'
 value = {this.state.jumlah_order}
                    onChangeText = {(text) => this.setState({jumlah_order: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
				 </View>
				
			 </View>
				
				  
				  <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginRight:10}}>
				  <View>
				  <View>
                  <Text style={styles.subformtext}>Alamat Penerima</Text>
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
					
 value = {this.state.alamat}
                    onChangeText = {(text) => this.setState({alamat: text })}
                    underlineColorAndroid="transparent"
                  />
				  </View>
                </View>
				
				  <View>
				  <View>
                  <Text style={styles.subformtext}>No. WhatsApp</Text>
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
 value = {this.state.telepon}
                    onChangeText = {(text) => this.setState({telepon: text })}
                    underlineColorAndroid="transparent"
                  />
				  </View>
                </View>
				  </View>
				
				
			
           
        
            </View>



            {/* end form */}
           
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
        <Text style={{fontWeight: 'bold', fontSize: 16 , color:'gray'}}>Deskripsi</Text>
      
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
          fontSize: 16, color:'gray'
        }}>
       Kategori
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Sedekah </Text>
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
          fontSize: 16, color:'gray'
        }}>
       Jumlah
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
          fontSize: 16, color:'gray'
        }}>
        Jenis Barang
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.jenis}</Text>
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
          fontSize: 16, color:'gray'
        }}>
       No. WhatsApp
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.telepon}</Text>
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
          fontSize: 16, color:'gray'
        }}>
      Alamat
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.alamat}</Text>
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
          fontSize: 16, color:'gray'
        }}>
        Total Bayar 
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
		  {totalreal} SR  ({rupiah}) 
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
                          this.props.navigation.navigate('TotalTagihanjasatitip', {
							  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.alamat, 
			  jumlah_order: this.state.jumlah_order, 
				 note: this.state.note, 
			jenis :	'Sedekah',	
			nama_mutawif :this.state.jenis,
			pecehan :'500',
totalreal: totalreal , 
				totalrupiah: totalrupiah	
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
        <Text style={{fontWeight: 'bold', fontSize: 16 , color:'gray'}}>Tipe</Text>
        <Text style={{color: 'red'}}></Text>
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
          fontSize: 16, color:'gray'
        }}>
        Nama Barang
      </Text>

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
          fontSize: 16, color:'gray'
        }}>
        Jumlah Barang
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}></Text>
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
          fontSize: 16, color:'gray'
        }}>
        Alamat Penerima
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
          fontSize: 16, color:'gray'
        }}>
        Nomor WhatsApp
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
      <View style={{marginLeft: 20, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color:'gray'}}>Deskripsi</Text>
        
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
          fontSize: 16, color:'gray'
        }}>
        Kategori
      </Text>
  <Text style={{marginLeft: 20, color: 'red'}}> Pribadi </Text>
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
          fontSize: 16, color:'gray'
        }}>
        Jumlah
      </Text>
  <Text style={{marginLeft: 20, color: 'red'}}> {this.state.jumlah_order} </Text>
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
		Jenis Barang 
     
      </Text>
	   <Text style={{marginLeft: 20, color: 'red'}}>{this.state.jenis} </Text>
     
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
          fontSize: 16, color:'gray'
        }}>
       No. WhatsApp
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.telepon}</Text>
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
          fontSize: 16, color:'gray'
        }}>
        Alamat 
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.alamat}</Text>
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
          fontSize: 16, color:'gray'
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
		  {totalreal1}  SR  ({rupiah1})
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
                          this.props.navigation.navigate('TotalTagihanjasatitip', {
							  
			telepon : this.props.route.params.telepon,
nama_lengkap : this.props.route.params.nama_lengkap,
email_pribadi : this.props.route.params.email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.alamat, 
			  jumlah_order: this.state.jumlah_order, 
				 note: this.state.note, 
			jenis :	'Pribadi',	
			nama_mutawif :this.state.jenis,
			pecehan :'250',
totalreal: totalreal1 , 
				totalrupiah: totalrupiah1
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
  
  input2: {
    borderBottomWidth: 1,
color :'black',
    width: '90%',
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
