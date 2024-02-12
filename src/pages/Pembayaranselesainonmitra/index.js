import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image , Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BriIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';
import CountDown from 'react-native-countdown-component';
import StarRating from 'react-native-star-rating';

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
	  starCount: 3.5,
    };
this.url = "https://mutawif.co.id/api/muapi/rateaplikasi.php";
  }
   onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
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
  
   
  klikSimpan1(){
      if(this.state.group == '' || this.state.nama_leader == ''){
        alert('Silakan masukkan group dan nama_leader');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
				var produk =	this.props.route.params.nama_produk; 
	
		var costumer =	this.props.route.params.nama_lengkap; 
		var nilai = this.state.starCount; 

	const { tampil, date, mode } = this.state;
	
	     var tanggal =  moment(date).format('YYYY-MM-DD');
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:
			   "&produk="+produk+
			
			  "&costumer="+costumer+
			  
			  "&nilai="+nilai
          })
          .then((response)=>response.json())
          .then((json)=>{
              this.setState({nama:''});
              this.setState({alamat:''});
              this.ambilListData();
 alert('Terimakasih Atas Penilaian Anda');
			   this.props.navigation.navigate('Splash')
          })
      }
  }
  	 klikSimpan() {
		 
		 
		 
		 
		 
		 

 var invoice =	this.props.route.params.invoice; 
    Linking.openURL('https://mutawif.co.id/api/muapi/invoiceselesai/Invoice.php?invoice='+invoice);

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
	    var invoice =	this.props.route.params.invoice; 
	    var jumlah_order =	this.props.route.params.jumlah_order; 
	 var no_va =	this.props.route.params.no_va; 
	  var metode_pembayaran =	this.props.route.params.metode_pembayaran; 
	   var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_produk =	this.props.route.params.nama_produk; 
	
		
		var costumer =	this.props.route.params.nama_lengkap; 
		var harisekarang = moment().format('dddd');
		
		
		


		
	
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'white'}}>
          
		
            <View style={{flex: 1}}>
            

              <View style={styles.mainbank}>
               
            
				

                
				
                

				<View>
				
				
               
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
                        color: 'orange',
                        textAlign: 'center',

                        borderColor: '#eaeaea',
                        marginTop: 20,
                      }}
					  onPress={() => this.klikSimpan()}>
                     Download Invoice 
                    </Text>
                  </TouchableOpacity>
				  
				  
				  
				  
				
				  
                </View>
				<View>
              <Text style={{marginTop: 10}}></Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                fullStarColor={'orange'}
                selectedStar={rating => this.onStarRatingPress(rating)}
                starSize={30}
                style={{backgroundColor: 'red'}}
              />
              <Text style={styles.pujian}></Text>
              <Text>Berikan Penilaian Anda Terhadap Aplikasi Kami</Text>
            </View>
			
			   <TouchableOpacity
onPress={() => this.klikSimpan1()}
            style={{
              borderRadius: 50,
                backgroundColor: '#00878c',
                padding: 10,
                marginBottom: 20,
                marginTop: 20,
            }}>
            <Text style={{color: 'white', fontSize:18, 
		 
					textAlign:'center',  }}>Konfirmasi</Text>
          </TouchableOpacity>
              </View>
			  
            </View>
            <View>
              
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
