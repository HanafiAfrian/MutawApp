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
		 var nama_lengkap =	this.props.route.params.nama_lengkap; 
		
		  var mitra =	this.props.route.params.mitra; 
	    var jumlah_order =	this.props.route.params.jumlah_order; 
	 var no_va =	this.props.route.params.no_va; 
	  var metode_pembayaran =	this.props.route.params.metode_pembayaran; 
	   var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_produk =	this.props.route.params.nama_produk; 
		var batas_tanggal =	this.props.route.params.batas_tanggal; 
		var batas_jam =	this.props.route.params.batas_jam; 
		var harisekarang = moment().format('dddd');
		
		
		


			       if (this.props.route.params.nama_produk == "Airport Handling")
   {
 this.props.navigation.replace('Pembayaranselesainonmitra',{
							jumlah_order:jumlah_order,
								invoice:invoice,
								no_va:no_va,
								metode_pembayaran:metode_pembayaran,
								totalreal:totalreal,
								totalrupiah:totalrupiah,
								nama_produk:nama_produk,
								nama_lengkap :nama_lengkap,
							})
	  }
	
	
			       else if (this.props.route.params.nama_produk == "Meried")
   {
 this.props.navigation.replace('Pembayaranselesainonmitra',{
							jumlah_order:jumlah_order,
								invoice:invoice,
								no_va:no_va,
								metode_pembayaran:metode_pembayaran,
								totalreal:totalreal,
								totalrupiah:totalrupiah,
								nama_produk:nama_produk,
								nama_lengkap :nama_lengkap,
							})
	  }
	
	
				       else if (this.props.route.params.nama_produk == "Dam & Qurban")
   {
 this.props.navigation.replace('Pembayaranselesainonmitra',{
							jumlah_order:jumlah_order,
								invoice:invoice,
								no_va:no_va,
								metode_pembayaran:metode_pembayaran,
								totalreal:totalreal,
								totalrupiah:totalrupiah,
								nama_produk:nama_produk,
								nama_lengkap :nama_lengkap,
							})
	  }
			      else if (this.props.route.params.nama_produk == "Ibadah")
   {
 this.props.navigation.replace('Pembayaranselesaiibadah',{
							jumlah_order:jumlah_order,
								invoice:invoice,
								no_va:no_va,
								metode_pembayaran:metode_pembayaran,
								totalreal:totalreal,
								totalrupiah:totalrupiah,
								nama_produk:nama_produk,
								nama_lengkap :nama_lengkap,
							})
	  }
	  
	  
	  
	  		       else if (this.props.route.params.nama_produk == "Ziarah")
   {
 this.props.navigation.replace('Pembayaranselesaziarah',{
							jumlah_order:jumlah_order,
								invoice:invoice,
								no_va:no_va,
								metode_pembayaran:metode_pembayaran,
								totalreal:totalreal,
								totalrupiah:totalrupiah,
								nama_produk:nama_produk,
								nama_lengkap :nama_lengkap,
							})
	  }
	
	
		  		       else
   {
 this.props.navigation.replace('Pembayaranselesaimitra',{
							jumlah_order:jumlah_order,
								invoice:invoice,
								no_va:no_va,
								metode_pembayaran:metode_pembayaran,
								totalreal:totalreal,
								totalrupiah:totalrupiah,
								nama_produk:nama_produk,
								mitra :mitra,
								nama_lengkap :nama_lengkap,
							})
	  }
	
	
	
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'white'}}>
          
		
            <View style={{flex: 1}}>
            

              
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
