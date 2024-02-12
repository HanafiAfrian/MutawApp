import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image , Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BriIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import { style } from './Style'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';
import CountDown from 'react-native-countdown-component';


export default class DetailBayarbri extends Component {
	
	  constructor(props) {
    super(props);
    this.state = {
        nama:'',
		no_va:'',
        alamat:'',
        listData:[],
        idEdit:null,
				 date: new Date(),
    mode: 'date',
    tampil: false,
    };

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
      if(this.state.nama == '' || this.state.alamat == ''){
        alert('Silakan masukkan nama dan alamat');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=create";
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"nama="+this.state.nama+"&alamat="+this.state.alamat
          })
          .then((response)=>response.json())
          .then((json)=>{
              this.setState({nama:''});
              this.setState({alamat:''});
              this.ambilListData();
          })
      }
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
  render() {
	  
	  const { tampil, date, mode } = this.state;
	   var tanggalsekarang =  moment(date).format('DD - MM - YYYY');
	   
	   
	   	   var menit = moment(date).format('mm');
	   var pilih_jam_pesan = moment(date).format('HH');
	   
	   var jamtambah = moment(date).format('HH');
var jamtotal = 	+pilih_jam_pesan + 2 ;
	   
	    var jumlah_order =	this.props.route.params.jumlah_order; 
	 var no_va =	this.props.route.params.no_va; 
	  var metode_pembayaran =	this.props.route.params.metode_pembayaran; 
	   var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_produk =	this.props.route.params.nama_produk; 
		var batas_tanggal =	this.props.route.params.batas_tanggal; 
		var batas_jam =	this.props.route.params.batas_jam; 
		var harisekarang = moment().format('dddd');
		
		
		


		
	
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'white'}}>
          
		
            <View style={{flex: 1}}>
              <View style={styles.tagihan}>
                <View>
                
                  <View>
                 
                  </View>
                </View>

                <View>
                  <TouchableOpacity>
                  
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.mainbank}>
                <View style={styles.bank}>
                  <View>
                    <View>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          marginBottom: 10,
                          fontSize: 16,
						   color :'gray'
                        }}>
						{metode_pembayaran}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <TouchableOpacity>
                     
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text style={{fontSize: 16, fontWeight:'bold', color:'gray'}}>{metode_pembayaran}</Text>
                  <Text style={{fontSize: 1, fontWeight: 'bold', color:'red'}}>
                    	<View style={{marginLeft:-4}}>
          
                    
                        <Text style={{color:'red', fontWeight:'bold', marginLeft:-4}}>{no_va}</Text>
					
      
                   
              
        </View>	
                  </Text>
                </View>
				
				
				 <View>
                  <Text style={{fontSize: 8}}></Text>
                </View>

                  <Text style={{fontSize: 16, fontWeight: 'bold', color:'gray'}}>Pesanan</Text>
                <View>
				
				
                  <Text style={{fontSize: 14, color: 'red', fontWeight: 'bold'}}>
					  {nama_produk}  /  ( {jumlah_order} )
                  </Text>
                </View>
				
				
                <View>
                  <Text style={{fontSize: 8}}></Text>
                </View>

                  <Text style={{fontSize: 14, fontWeight: 'bold', color:'gray'}}>Total Pembayaran</Text>
                <View>
				
				
                  <Text style={{fontSize: 14, color: 'red', fontWeight: 'bold'}}>
					  {totalreal} SR ( {totalrupiah} )
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      borderTopWidth: 1,
                      marginTop: 10,
                      borderColor: '#eaeaea',
                    }}></Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#1e7080',
                        textAlign: 'center',

                        borderColor: '#eaeaea',
                        marginTop: 20,
                      }}>
					  <Text style={{color: '#1e7080'}}
      onPress={() => Linking.openURL('https://mutawif.co.id/api/TATACARAPEMBAYARANMUTAWIF.pdf')}>
     Lihat Cara Pembayaran
</Text>
                 
                    </Text>
					  <Text
                      style={{
                        fontSize: 16,
                        color: 'orange',
                        textAlign: 'center',

                        borderColor: '#eaeaea',
                        marginTop: 20,
                      }}
					    onPress={() => Linking.openURL('https://mutawif.co.id/api/muapi/invoice.php')}>
                     Status Pesanan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 40,
                  marginRight: 20,
                  marginLeft: 20,
                  marginBottom: 20,
                  borderRadius: 5,
                  backgroundColor: '#0d7883',
                }}
                onPress={() =>
                  this.props.navigation.navigate('Authsplash')
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                Selesai
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainbank: {
    // margin: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  bank: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    marginBottom: 10,
  },

  tagihan: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
