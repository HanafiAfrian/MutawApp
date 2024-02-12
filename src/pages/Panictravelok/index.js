import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput,PermissionsAndroid, ScrollView} from 'react-native';
import MapView , {Marker} from 'react-native-maps';
import CustomButton from './CustomButton';
import Geolocation from '@react-native-community/geolocation';
export default class PanicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
      listData: [],
      idEdit: null,
	   userLocation :{
	 coords: {
	 accuracy: 0,
	 altitude: 0,
	 heading: 0,
	 latitude: 0,
	 longitude: 0, 
	 speed: 0 
	 },
	 
	 mocked: false, 
	 timestamp: 0, 
	 timestamp: 0,
  }
    };

    this.url = 'https://mutawif.co.id/api/muapi/ambilpanictravel.php';
  }
	  componentDidMount() {
	   this.ambilListData();
	 this.requestLocationPermission();
	 Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
	  Geolocation.getCurrentPosition(info => console.log(info));
  }

requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Izinkan Aplikasi Mengakses Lokasi",
        message:
          "Tes " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Di izinkan");
	   Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
    } else {
      console.log("Tidak Di Izinkan");
    }
  } catch (err) {
    console.warn(err);
  }
};
  async ambilListData() {
    var telepon = this.props.route.params.email;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	var email_pribadi = this.props.route.params.email_pribadi;
    await fetch(this.url + '/?op=ambildata&telepon=' + telepon)
      .then(response => response.json())
      .then(json => {
		   this.setState({latitudepribadi:json.data.result[0].latitudepribadi});
		    this.setState({jumlah:json.data.result[0].jumlah});
			this.setState({longitudepribadi:json.data.result[0].longitudepribadi});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
		
        this.setState({listData: json.data.result});
			
      })
      .catch(error => {
        console.log(error);
      });
  }
	
	klikSimpan(){
		
	 var email =	this.props.route.params.email; 
      if(this.state.nama != ''){
        alert('Silakan masukkan nama dan alamat');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=updatepanic";
          }else{
            var urlAksi = this.url+"/?op=updatepanic";
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"email="+email
          })
          .then((response)=>response.json())
          .then((json)=>{
              alert ('Bantuan Telah Selsai di Kerjakan')
      this.props.navigation.replace('Auth');
              
          })
      }
  }
 
  
  render() {
	
	 var  jumlahpanic = this.props.route.params.jumlahpanic; 
	    var telepon =	this.props.route.params.email; 
		var email =	this.props.route.params.email; 
		var name =	this.props.route.params.name; 
		var age =	this.props.route.params.age; 
	
	
		var nama =	this.props.route.params.nama; 
			var jenis =	this.props.route.params.jenis; 
				var telepon =	this.props.route.params.telepon; 
				var latitudepribadi2 =	  this.props.route.params.latitudepribadi; 
				var longitudepribadi2 =	  this.props.route.params.longitudepribadi; 
	     if(jumlahpanic == 0)
   {
alert ('Tidak Ada Yang Sedang Memerlukan Bantuan Panic Button')
      this.props.navigation.replace('HomeTravel',{email:email,name:name, age:age});
   
	   
   }
	
    return (
      <ScrollView>
        <View
          style={{
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: 'white',
            padding: 20,
            marginTop: 20,
            borra: 10,
          }}>
		  

          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'gray'}}>Kategori</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'red'}}>
				
		     <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text style={{fontSize: 18, fontWeight: 'bold',color:'red'
                    }}>{val.jenis}


						{latitudepribadi2}
							{longitudepribadi2}
					</Text>

                  
                ))
            }
        </View>
			
			
			
			</Text>
          </View>
		  
		    <View>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'gray'}}>Nama Jamaah</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'red'}}>
			
		     <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text style={{fontSize: 18, fontWeight: 'bold',color:'red'
                    }}>{val.nama}</Text>

                  
                ))
            }
        </View>
			
			
			
			</Text>
          </View>
          <View style={{marginTop: 20 }}>
            <Text style={{fontSize: 16, fontWeight: 'bold' ,color:'gray'}}>No.HP</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'red'}}>     <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text style={{fontSize: 18, fontWeight: 'bold',color:'red'
                    }}>{val.telepon}</Text>

                  
                ))
            }
        </View></Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold' ,color:'gray'}}>Lokasi</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold',color:'red'}}>
			     <View>
         
        </View>
		
		</Text>
		    
 <View style={styles.containermap}>
   <MapView style={styles.map}//window pake Dimensions
   region={{
      latitude: this.state.userLocation.coords.latitude,
      longitude: this.state.userLocation.coords.longitude,
      latitudeDelta: 0.099,
      longitudeDelta: 0.099 
   }} >
   
   <Marker
	coordinate={{
      latitude: this.state.userLocation.coords.latitude,
      longitude: this.state.userLocation.coords.longitude,
   }}
   key ={'user'}
   title={"Lokasi Saya"}
   description={""}   
   pinColor={"#FF0000"}
   /> 
<Marker
   coordinate={{
   latitude: + latitudepribadi2,
      longitude: + longitudepribadi2,
   }}
   key ={'userpelanggan'}
   title="Lokasi Bantuan"
   pinColor={"#0000ff"}/>
   
  
   </MapView>
    </View>
          </View>
  <CustomButton
			  style={{  
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40,
	  textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 100,}}
              title='Selesai'
              color='orange'
onPressFunction={() => this.klikSimpan()}
         
			  
          />
        </View>
	

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputjadwal: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 5,
    height: 40,
    width: '100%',
  },
    containermap: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	width: '100%',
	height:400,
  },
  map: {

...StyleSheet.absoluteFillObject
  },
  
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "yellow",
    borderColor: "red",
    borderRadius: 50,
    elevation: 10,
  },
  text: {
  color: "#red",   
  },
});
