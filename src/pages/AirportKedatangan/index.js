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
  ActivityIndicator,

  Modal,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ModalPopup} from '../../components/ModalPopup';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import {BannerFood, IconBack, IconAirport} from '../../assets';

export default class AirportKedatangan extends Component {
 constructor(props) {
    super(props);
    this.state = {show: false ,
	isVisible: true,
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
			jenis_muassasah:'',
			 date: new Date(),
    mode: 'date',
    tampil: false,
			no_bus: '',
			
			no_hpbus: '',
			no_pesawat: '',
			};
  
   this.url = "https://mutawif.co.id/api/muapi/airporthandling.php";
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
  
  showLoader() {
    this.setState({ isVisible: true });
  }

  hideLoader() {
    this.setState({ isVisible: false });
  }

  render() {
	     const { tampil, date, mode } = this.state;
	   var pilih_tanggal_pesan =  moment(date).format('YYYY-MM-DD');
	   var pilih_jam_pesan = moment(date).format('HH:mm:00');
	   var latitude =	this.props.route.params.latitude; 
		var longitude =	this.props.route.params.longitude;
	   
	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi;
	   var hargarupiah =	this.props.route.params.hargarupiah;
	
  var totalreal = this.state.jumlah_order * +this.state.harga;
	  var totalrupiah = this.state.jumlah_order * this.state.hargarupiah;
	  
	  	  const numb = this.state.jumlah_order * hargarupiah
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
	  
    return (
      <SafeAreaView>
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
                   onPress={() => this.props.navigation.navigate('AirportOrder',{telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi,hargarupiah:hargarupiah } )}>
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
                  <Image source={IconAirport} style={{alignSelf: 'center'}} />
                  <Text
                    style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                    <Text style={{color: 'white'}}> Kedatangan </Text>
					
                  </Text>
                </View>
                <View>
                 
                </View>
              </View>
            </View>

            {/* <Icon name="close" size={30} color="#900" /> */}

            <View style={styles.container}>
              {/* form */}

              <View style={styles.searchSection}>
                <View>
                  <View>
                    <Text style={styles.subformtext}>Tanggal Service</Text>
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
				  	    { tampil && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
                  </View>
                </View>

                <View>
                  <View>
                    <Text style={styles.subformtext}>Waktu Service</Text>
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
              </View>
              <View style={styles.searchSection}>
                <View>
                  <View>
                    <Text style={styles.subformtext}>Jenis & Kode Pesawat</Text>
                  </View>
                  <View style={styles.subform}>
                    <Icon
                      style={styles.searchIcon}
                      name="plane"
                      size={16}
                      color="grey"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="AV Airlines AWQ737"
					  placeholderTextColor="gray"
                      value = { this.state.no_pesawat }
                 onChangeText = {(text) => this.setState({no_pesawat: text })}
                      underlineColorAndroid="transparent"
                    />
                  </View>
                </View>

                <View>
                  <View>
                    <Text style={styles.subformtext}>
                      Quantity/Jumlah Jemaah
                    </Text>
                  </View>
                  <View style={styles.subform}>
                    <Icon
                      style={styles.searchIcon}
                      name="group"
                      size={16}
                      color="grey"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="59"
					  placeholderTextColor="gray"
					  keyboardType = 'numeric'
                      value = {this.state.jumlah_order}
                    onChangeText = {(text) => this.setState({jumlah_order: text })}
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
                      placeholder="Bandara IATA (Jeddah)"
					  placeholderTextColor="gray"
                        value = { this.state.tempat_pilih }
                    onChangeText = {(text) => this.setState({tempat_pilih: text })}
                      underlineColorAndroid="transparent"
                    />
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.subformtext}>Jenis Muassasah</Text>
                  </View>
                  <View style={styles.subform}>
                    <FontAwesome5
                      size={16}
                      style={styles.searchIcon}
                      name={'file-alt'}
                    />
                    <TextInput
                      style={styles.input}
					  placeholderTextColor="gray"
                      placeholder="Jenis"
 value = { this.state.jenis_muassasah }
                    onChangeText = {(text) => this.setState({jenis_muassasah: text })}
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
				  placeholderTextColor="gray"
 value = { this.state.nama_mutawif }
                 onChangeText = {(text) => this.setState({nama_mutawif: text })}
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.inputform}
                  placeholder="No. Hp"
				  placeholderTextColor="gray"
				  keyboardType = 'numeric'
                    value = { this.state.nohp_mutawif }
                 onChangeText = {(text) => this.setState({nohp_mutawif: text })}
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
				  placeholderTextColor="gray"
                  placeholder="No. Hp Bus"
				  keyboardType = 'numeric'
value = { this.state.no_hpbus }
                 onChangeText = {(text) => this.setState({no_hpbus: text })}

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
                    <Text style={{marginLeft: 10, color :'gray'}}>Upload</Text>
                  </TouchableOpacity>
                  <Text style={{ color :'gray'}}>
                    Upload Data Jemaah / Manifest (Data berisi nama jemaah + No.Hp + Ttl) (Format .pdf)
                  </Text>
                </View>
				 <TouchableOpacity style={styles.borderdot}>
                    <FontAwesome5
                      size={50}
                      style={styles.searchIcon}
					     onPress={() => this.setState({show2: true})}
                      name={'file-upload'}
                    />
                    <Text style={{marginLeft: 10, color :'gray'}}>Upload</Text>
                  </TouchableOpacity>
				       <Text style={{ color :'gray'}}>
                    Upload Foto Koper
                  </Text>
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
              transparent={false}
              visible={this.state.show1}>
			   <WebView
   source={{ uri: 'https://mutawif.co.id/api/daftarb2b/uploaddokumen.php?jenis=Kedatangan' }}
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
			
			
			
			 <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.show2}>
			   <WebView
   source={{ uri: 'https://mutawif.co.id/api/daftarb2b/uploaddokumen.php?jenis=FotoKoperKedatangan' }}
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
                          onPress={() => this.setState({show2: false})}
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
		  
		  
		  
		  <View>
            <Modal
              animationType="slide"
              transparent={false}
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
        <Text style={{fontWeight: 'bold', fontSize: 16, color :'gray'}}>Nama Mutawif</Text>
        <Text style={{color: 'red'}}>{this.state.nama_mutawif}</Text>
      </View>

      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,  color :'gray'}}>No. HP</Text>
        <Text style={{color: 'red'}}>{this.state.nohp_mutawif}</Text>
      </View>
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
        <Text style={{fontWeight: 'bold', fontSize: 16, color :'gray'}}>No Bus</Text>
        <Text style={{color: 'red'}}>{this.state.no_bus}</Text>
      </View>

     
	    <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>No.Hp Bus</Text>
        <Text style={{color: 'red'}}>{this.state.no_hpbus}</Text>
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
          fontSize: 16,
		   color :'gray'
        }}>
        Jenis & Kode Pesawat
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.no_pesawat}</Text>
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
          fontSize: 16,
		   color :'gray'
        }}>
        Quantity/Jumlah Jemaah
      </Text>
  <Text style={{marginLeft: 20, color: 'red'}}>{this.state.jumlah_order} Orang</Text>
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
          fontSize: 16,
		   color :'gray'
        }}>
        Jenis Muassasah
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>{this.state.jenis_muassasah}</Text>
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
          fontSize: 16,
		   color :'gray'
        }}>
        Lokasi
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
        <Text style={{fontWeight: 'bold', fontSize: 16,  color :'gray'}}>Tanggal</Text>
        <Text style={{color: 'red'}}>12/02/2022</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,  color :'gray'}}>Jam</Text>
        <Text style={{color: 'red'}}>08.45</Text>
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
          fontSize: 16,
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold',}}>
		  {totalreal} SR ({rupiah})
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
                            this.props.navigation.navigate('TotalTagihanairport', {
							  
			telepon : telepon,
nama_lengkap : nama_lengkap,
email_pribadi : email_pribadi,			
			pilih_tanggal_pesan: pilih_tanggal_pesan,
			  pilih_jam_pesan: pilih_jam_pesan, 
			  tempat_pilih: this.state.tempat_pilih, 
			  jumlah_order: this.state.jumlah_order, 
					latitude : latitude,
				longitude : longitude,
			nama_mutawif: this.state.nama_mutawif, 	
			nohp_mutawif: this.state.nohp_mutawif, 
			no_bus: this.state.no_bus,
			no_hpbus: this.state.no_hpbus,
			no_pesawat: this.state.no_pesawat,
			jenis_muassasah : this.state.jenis_muassasah,
totalreal: totalreal, 

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
        </ScrollView>
      </SafeAreaView>
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
	color : 'black'
  },

  roundButtonact: {
    borderRadius: 5,
    backgroundColor: '#0d7883',
    borderColor: '#0d7883',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    padding: 10,
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
  modalContainer: {
    marginTop: -5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },

  modalView: {
    flex: 1,
    backgroundColor: 'white',
    
 
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
    webViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -25,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
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
color : 'black',
    width: 140,
    borderColor: '#eaeaea',
    marginBottom: 10,
  },

  inputform: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
color :'black',
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

    color: 'black',
    marginBottom: 20,
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 10,
    fontWeight: 'bold',
  },

  roundButton1: {
    marginTop: 20,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
    // marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },
    webViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -25,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
