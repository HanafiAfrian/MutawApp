import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BniIcon, CodIcon, CcIcon, BriIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioButton from 'react-native-simple-radio-button-input';

var radio_props = [
  {label: 'param1', value: 0},
  {label: 'param2', value: 1},
];

export default class TotalTagihan extends Component {
	
	constructor(props) {
    super(props);
	
    this.state = {show: false ,
	 pilih_tanggal_pesan: '',
        pilih_jam_pesan: '',
        tempat_pilih: '',
		jumlah_order: '',
			totalreal: '',
			totalrupiah: '',
			nama_mutawif: '',
			nohp_mutawif: '',
			no_bus: '',
			no_hpbus: '',
			no_pesawat: '',
			
		 date: new Date(),
    mode: 'date',
    tampil: false,
        listData: [],
        idEdit: null,
		};
		this.url = "https://mutawif.co.id/api/muapi/kursiroda.php";

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

	
  state = {
    bni: false,
	 bri: false,
    cod: false,
    cc: false,
  };

  bniPressed() {
    this.setState({bni: true,  bri: false, cod: false, cc: false});

  }

  briPressed() {
    this.setState({bni: false, bri: true, cod: false, cc: false});
	
  }

  codPressed() {
    this.setState({bni: false, bri: false, cod: true, cc: false});

  }
  
   ccPressed() {
    this.setState({bni: false, bri: false, cod: false, cc: true});

  }
  klikMenu(){
	  
	  
	  
	  
      if
	  (this.state.bni == true  && this.state.bri == false && this.state.cod == false && this.state.cc == false  )
	  {
		   if(this.state.pilih_tanggal_pesan == 'juju' || this.state.pilih_jam_pesan == 'xcxc'){
        alert('Silakan masukkan Waktu Pesan Dan Identitas Mutawif');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		
			
		var telepon =	this.props.route.params.telepon; 
		var nama_lengkap =	this.props.route.params.nama_lengkap; 
		var email_pribadi =	this.props.route.params.email_pribadi; 
		var pilih_tanggal_pesan =	this.props.route.params.pilih_tanggal_pesan; 
		var pilih_jam_pesan =	this.props.route.params.pilih_jam_pesan; 
		var tempat_pilih =	this.props.route.params.tempat_pilih; 
		var tempat_pilih_penjemputan =	this.props.route.params.tempat_pilih_penjemputan; 
		var jumlah_order =	this.props.route.params.jumlah_order; 
		var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_mutawif =	this.props.route.params.nama_mutawif; 
		var no_kamar =	this.props.route.params.no_kamar; 
		var jenis =	'Kursi Roda Sewa'; 
		 var metode_pembayaran = 'BNI VIRTUAL ACCOUNT';


     }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:	"&jenis="+jenis+
					"&nama_lengkap="+nama_lengkap+
					"&telepon="+telepon+
					"&pilih_tanggal_pesan="+pilih_tanggal_pesan+
					"&pilih_jam_pesan="+pilih_jam_pesan+
					"&tempat_pilih="+tempat_pilih+
					"&tempat_pilih_penjemputan="+tempat_pilih_penjemputan+
					
					"&jumlah_order="+jumlah_order+
					"&totalreal="+totalreal+
					"&totalrupiah="+totalrupiah+
					"&no_kamar="+no_kamar+
					"&metode_pembayaran="+metode_pembayaran
					
          })
          .then((response)=>response.json())
          .then((json)=>{
			 this.props.navigation.navigate('CariMitrakursiroda', {	
			metode : 'BNI VIRTUAL ACCOUNT',			 
			totalreal : totalreal,
			jumlah_order : jumlah_order,
			 totalrupiah : totalrupiah});
                           this.ambilListData();
          })
      }
       
		}
		
		  else if 
		  (this.state.bni == false  && this.state.bri == true && this.state.cod == false && this.state.cc == false )
		  {
			   
		   if(this.state.pilih_tanggal_pesan == 'juju' || this.state.pilih_jam_pesan == 'xcxc'){
        alert('Silakan masukkan Waktu Pesan Dan Identitas Mutawif');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		
		var telepon =	this.props.route.params.telepon; 
		var nama_lengkap =	this.props.route.params.nama_lengkap; 
		var email_pribadi =	this.props.route.params.email_pribadi; 
		var pilih_tanggal_pesan =	this.props.route.params.pilih_tanggal_pesan; 
		var pilih_jam_pesan =	this.props.route.params.pilih_jam_pesan; 
		var tempat_pilih =	this.props.route.params.tempat_pilih; 
		var tempat_pilih_penjemputan =	this.props.route.params.tempat_pilih_penjemputan; 
		var jumlah_order =	this.props.route.params.jumlah_order; 
		var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_mutawif =	this.props.route.params.nama_mutawif; 
		var no_kamar =	this.props.route.params.no_kamar; 
		var jenis =	'Kursi Roda Sewa'; 
		 var metode_pembayaran = 'BRI VIRTUAL ACCOUNT';


     }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
                  body:	"&jenis="+jenis+
					"&nama_lengkap="+nama_lengkap+
					"&telepon="+telepon+
					"&pilih_tanggal_pesan="+pilih_tanggal_pesan+
					"&pilih_jam_pesan="+pilih_jam_pesan+
					"&tempat_pilih="+tempat_pilih+
					"&tempat_pilih_penjemputan="+tempat_pilih_penjemputan+
					
					"&jumlah_order="+jumlah_order+
					"&totalreal="+totalreal+
					"&totalrupiah="+totalrupiah+
					"&no_kamar="+no_kamar+
					"&metode_pembayaran="+metode_pembayaran
					
          })
          .then((response)=>response.json())
          .then((json)=>{
			  
			   this.props.navigation.navigate('CariMitrakursirodaBri', {	
		metode : 'BRI VIRTUAL ACCOUNT',		
totalreal : totalreal,
			jumlah_order : jumlah_order,
			 totalrupiah : totalrupiah});
			  
                           this.ambilListData();
          })
      }
       
		}
		
		
		  else if 
		  (this.state.bni == false  && this.state.bri == false && this.state.cod == true && this.state.cc == false )
		  {
			   
		   if(this.state.pilih_tanggal_pesan == 'juju' || this.state.pilih_jam_pesan == 'xcxc'){
        alert('Silakan masukkan Waktu Pesan Dan Identitas Mutawif');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		
	var telepon =	this.props.route.params.telepon; 
		var nama_lengkap =	this.props.route.params.nama_lengkap; 
		var email_pribadi =	this.props.route.params.email_pribadi; 
		var pilih_tanggal_pesan =	this.props.route.params.pilih_tanggal_pesan; 
		var pilih_jam_pesan =	this.props.route.params.pilih_jam_pesan; 
		var tempat_pilih =	this.props.route.params.tempat_pilih; 
		var tempat_pilih_penjemputan =	this.props.route.params.tempat_pilih_penjemputan; 
		var jumlah_order =	this.props.route.params.jumlah_order; 
		var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_mutawif =	this.props.route.params.nama_mutawif; 
		var no_kamar =	this.props.route.params.no_kamar; 
		var jenis =	'Kursi Roda Sewa'; 
		 var metode_pembayaran = 'CASH ON DELIVERY';


     }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
                   body:	"&jenis="+jenis+
					"&nama_lengkap="+nama_lengkap+
					"&telepon="+telepon+
					"&pilih_tanggal_pesan="+pilih_tanggal_pesan+
					"&pilih_jam_pesan="+pilih_jam_pesan+
					"&tempat_pilih="+tempat_pilih+
					"&tempat_pilih_penjemputan="+tempat_pilih_penjemputan+
					
					"&jumlah_order="+jumlah_order+
					"&totalreal="+totalreal+
					"&totalrupiah="+totalrupiah+
					"&no_kamar="+no_kamar+
					"&metode_pembayaran="+metode_pembayaran
					
          })
          .then((response)=>response.json())
          .then((json)=>{
			  
			   this.props.navigation.navigate('CariMitrakursirodaCod', {	
metode : 'Cash On Delivery',			
totalreal : totalreal,
			jumlah_order : jumlah_order,
			 totalrupiah : totalrupiah});
			  
                           this.ambilListData();
          })
      }
       
		}
		
        
		
		
else
							
			  {
			   
		   if(this.state.pilih_tanggal_pesan == 'juju' || this.state.pilih_jam_pesan == 'xcxc'){
        alert('Silakan masukkan Waktu Pesan Dan Identitas Mutawif');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		
			
		
		var telepon =	this.props.route.params.telepon; 
		var nama_lengkap =	this.props.route.params.nama_lengkap; 
		var email_pribadi =	this.props.route.params.email_pribadi; 
		var pilih_tanggal_pesan =	this.props.route.params.pilih_tanggal_pesan; 
		var pilih_jam_pesan =	this.props.route.params.pilih_jam_pesan; 
		var tempat_pilih =	this.props.route.params.tempat_pilih; 
		var jumlah_order =	this.props.route.params.jumlah_order; 
		var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_mutawif =	this.props.route.params.nama_mutawif; 
		var nohp_mutawif =	this.props.route.params.nohp_mutawif; 
		var no_bus = this.props.route.params.no_bus; 
		var no_hpbus = this.props.route.params.no_hpbus; 
		var no_pesawat = this.props.route.params.no_pesawat; 
		 var metode_pembayaran = 'CREDIT CARD';


     }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:
					"&nama_lengkap="+nama_lengkap+
					"&telepon="+telepon+
					"&pilih_tanggal_pesan="+pilih_tanggal_pesan+
					"&pilih_jam_pesan="+pilih_jam_pesan+
					"&tempat_pilih="+tempat_pilih+
					"&jumlah_order="+jumlah_order+
					"&totalreal="+totalreal+
					"&totalrupiah="+totalrupiah+
					"&nama_mutawif="+nama_mutawif+
					"&nohp_mutawif="+nohp_mutawif+
					"&no_bus="+no_bus+
					"&no_hpbus="+no_hpbus+
					"&no_pesawat="+no_pesawat+
					"&metode_pembayaran="+metode_pembayaran
					
          })
          .then((response)=>response.json())
          .then((json)=>{
			   this.props.navigation.navigate('CariMitrakursirodaCc', {
metode : 'Credit Card',					
jumlah_order : jumlah_order,   
			totalreal : totalreal,
			 totalrupiah : totalrupiah});
			
                           this.ambilListData();
          })
      }
       
		}
		
        
			
		
		
		
	
  }
  render() {
	  var telepon =	this.props.route.params.telepon; 
		var nama_lengkap =	this.props.route.params.nama_lengkap; 
		var email_pribadi =	this.props.route.params.email_pribadi; 
		var pilih_tanggal_pesan =	this.props.route.params.pilih_tanggal_pesan; 
		var pilih_jam_pesan =	this.props.route.params.pilih_jam_pesan; 
		var tempat_pilih =	this.props.route.params.tempat_pilih; 
		var tempat_pilih_penjemputan =	this.props.route.params.tempat_pilih_penjemputan; 
		var jumlah_order =	this.props.route.params.jumlah_order; 
		var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		var nama_mutawif =	this.props.route.params.nama_mutawif; 
		var no_kamar =	this.props.route.params.no_kamar; 

		
		
		const numb = this.props.route.params.totalrupiah; 
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('KursirodaOrder')}>
            <Icon
              name="chevron-left"
              size={20}
              color="#fff"
              style={{
                marginTop: -10,
                padding: 7,
                marginLeft: -10,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>
            Total<Text style={{color: 'orange'}}> Tagihan</Text>
          </Text>
          <View></View>
        </View>
		     <View>
             
					   
					   
            </View>
        <View style={{flex: 1}}>
          <View style={styles.tagihan}>
            <View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Total Tagihan kursi roda sewa
				  
                </Text>
              </View>
              <View>
                <Text style={{color: 'orange', fontWeight: 'bold'}}>
                  {totalreal} SR ( {rupiah} )
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={{color: '#1E7080'}}></Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', marginLeft: 15, marginTop: 15}}>
              Pilih Metode Pembayaran
            </Text>
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
                    }}>
                    BNI Virtual Account
                  </Text>
                </View>
              </View>

              <View>
                <Image source={BniIcon} style={{width: 70, height: 20}} />
              </View>
            </View>
            {/* header */}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{fontSize: 12, maxWidth: 280}}>
                  Dapatkan{' '}
                  <Text style={{fontWeight: 'bold'}}>kode pembayaran</Text>{' '}
                  setelah klik "Bayar"
                </Text>
                <Text style={{fontSize: 12, maxWidth: 250}}>
                  Tidak Disarankan bayar melalui bank lain agar transaksi agar
                  transaksi dapat diproses tanpa kendala
                </Text>
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <RadioButton
                  color={'green'}
                  selected={this.state.bni}
                  onPress={() => this.bniPressed()}
                />
              </View>
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
                    }}>
                    BRI Virtual Account
                  </Text>
                </View>
              </View>

              <View>
                <Image source={BriIcon} style={{width: 70, height: 20}} />
              </View>
            </View>
            {/* header */}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{fontSize: 12, maxWidth: 280}}>
                  Dapatkan{' '}
                  <Text style={{fontWeight: 'bold'}}>kode pembayaran</Text>{' '}
                  setelah klik "Bayar"
                </Text>
                <Text style={{fontSize: 12, maxWidth: 250}}>
                  Tidak Disarankan bayar melalui bank lain agar transaksi agar
                  transaksi dapat diproses tanpa kendala
                </Text>
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <RadioButton
                  color={'green'}
                  selected={this.state.bri}
                  onPress={() => this.briPressed()}
                />
              </View>
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
                    }}>
                    Cash On Delivery
                  </Text>
                </View>
              </View>

              <View>
                <Image source={CodIcon} style={{width: 70, height: 40}} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontSize: 12, maxWidth: 285}}>
                  Metode{' '}
                  <Text style={{fontWeight: 'bold'}}>cash on delivery</Text>{' '}
                  merupakan metode pembayaran yang dilakukan secara langsung di
                  tempat, setelah pesanan dari kurir diterima oleh Pembeli
                </Text>
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <RadioButton
                  color={'green'}
                  selected={this.state.cod}
                  onPress={() => this.codPressed()}
                />
              </View>
            </View>
          </View>
          <View style={styles.mainbank}>
            <View style={styles.bank}>
              <View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 14,
                      fontSize: 16,
                    }}>
                    Debit Card
                  </Text>
                </View>
              </View>

              <View>
                <Image source={CcIcon} style={{width: 120, height: 40}} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontSize: 12, maxWidth: 250}}>
                  Metode <Text style={{fontWeight: 'bold'}}>credit card</Text>{' '}
                  merupakan pembayaran non tunai dengan menggunakan kartu yang
                  diterbitkan oleh bank
                </Text>
              </View>
              <View style={{marginLeft: 30, marginTop: 10}}>
                <RadioButton
                  color={'green'}
                  selected={this.state.cc}
                  onPress={() => this.ccPressed()}
                />
              </View>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.btnbayar}
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
              Bayar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btnbayar: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
  mainbank: {
    margin: 10,
    padding: 15,
    elevation: 2,
    borderRadius: 15,
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
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 20,
	 marginLeft: -30,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
