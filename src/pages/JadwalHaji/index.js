import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import {Bgadzan} from '../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
export default class Jadwal extends Component {
	  constructor(props) {
    super(props);
    this.state = {show: false ,
	 tanggal: '',
	    nama_leader:'',
        no_telepon:'',
		 group:'',
        listData:[],
		  listData1: [],
        idEdit:null,
		 selectedcat2: "",
			 date: new Date(),
    mode: 'date',
    tampil: false,
			
			};
			this.url = "https://mutawif.co.id/api/muapi/jadwalberangkathaji.php";
				this.url1 = 'https://mutawif.co.id/api/muapi/ambilnokloter.php';

  }
  componentDidMount(){
      this.ambilListData()
	  	  this.ambilListData1();
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
    async ambilListData1() {
    await fetch(this.url1)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  klikSimpan1(){
      if(this.state.no_telepon == ''){
   alert('Silakan masukkan Nomor Telepon');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		var group =	this.state.group; 
		var namakarom = this.state.namakarom; 
	
		var no_telepon = this.state.no_telepon; 
		var email =	this.props.route.params.email; 
	
		    var kloter =	this.props.route.params.kloter; 
			   var lokasi =	this.props.route.params.lokasi;
	const { tampil, date, mode } = this.state;
	
	     var tanggal =  moment(date).format('YYYY-MM-DD');
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:
			  
			  "&nokloter="+kloter+
			  "&nmkloter="+email+
			  "&lokasi="+lokasi+
			  "&nokarom="+this.state.nokarom+
			  "&namakarom="+namakarom+
			  "&notlpkarom="+no_telepon+
			  "&tanggal="+tanggal
          })
        .then(response => response.json())
        .then(responseJson => {
            
 if (responseJson == 'true') {
 alert('Jadwal Keberangkatan Anda Telah Berhasil Di Simpan');
			   this.props.navigation.replace('Splash')
          }
		})
      }
  }
  
  
  klikSimpan(){
      if(this.state.no_telepon == ''){
    alert('Silakan masukkan Nomor Telepon');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		var group =	this.state.group; 
		var namakarom = this.state.namakarom; 
	
		var no_telepon = this.state.no_telepon; 
		var email =	this.props.route.params.email; 
	
		    var kloter =	this.props.route.params.kloter; 
			   var lokasi =	this.props.route.params.lokasi;
	const { tampil, date, mode } = this.state;
	
	     var tanggal =  moment(date).format('YYYY-MM-DD');
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:
			  
			  "&nokloter="+kloter+
			  "&nmkloter="+email+
			  "&lokasi="+lokasi+
			  "&nokarom="+this.state.nokarom+
			  "&namakarom="+namakarom+
			  "&notlpkarom="+no_telepon+
			  "&tanggal="+tanggal
          })
           .then(response => response.json())
        .then(responseJson => {
            
 if (responseJson == 'true') {
			   this.props.navigation.replace('JadwalHajiAdd',{email:email, kloter:kloter, lokasi:lokasi,tanggal:tanggal})
 }})
      }
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
 async onValueChangeCat2(value) {
    this.setState({ selectedcat2: value });
  }
  render() {
	     var email =	this.props.route.params.email; 
		    var kloter =	this.props.route.params.kloter; 
			   var lokasi =	this.props.route.params.lokasi; 
	   const { tampil, date, mode } = this.state;
	     var tanggal =  moment(date).format('YYYY-MM-DD');
    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor:'#fff'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 20,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              marginTop: 10,
            }}>
             <Icon
                    style={styles.searchIcon}
                    name="calendar"
                    size={20}
                    color="grey"
					
                  />
            <Text style={{marginLeft: 10, color: "gray"}}
			 value = {tanggal} 
                  onChangeText = {(text) => this.setState({ tanggal: text })}
                >
              Atur Jadwal keberangkatan Haji dan kepulangan agar anda dapat terhubung
              dengan rombongan jamaah anda
            </Text>
			
          </View>
				  	    { tampil && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }
          {/* inputan */}
          <View style={styles.jadwalbase}>
	
			
			
			
			
			
           <View style={styles.pickerStyle}>
		
        <Text style={{ color: "gray"}}>Nomor Karom</Text>
		 <TextInput
                style={styles.inputjadwal}
                placeholder="Nomor Karom"
				 placeholderTextColor="gray"
				 keyboardType = 'numeric'
                value={this.state.nokarom}
                onChangeText={text => this.setState({nokarom: text})}
              /> 
						   
						   </View>
 <View style={{marginTop: 20}}>
              <Text style={{ color: "gray"}}>Nama Karom</Text>

              <TextInput style={styles.inputjadwal} placeholder="Nama karom"
 value = { this.state.namakarom }
  placeholderTextColor="gray"
                    onChangeText = {(text) => this.setState({namakarom: text })}			  />
            </View>
			 <View style={{marginTop: 20}}>
              <Text style={{ color: "gray"}}>No. Telepon Karom</Text>

              <TextInput style={styles.inputjadwal} placeholder="No Telepon " 
			   value = { this.state.no_telepon }
			   keyboardType = 'numeric'
			    placeholderTextColor="gray"
                    onChangeText = {(text) => this.setState({no_telepon: text })}	/>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{color: "gray"}}>Jadwal Keberangkatan</Text>

              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputjadwal}
				   value = {tanggal} 
				   
				   onChangeText = {(text) => this.setState({ tanggal: text })}
                  placeholder="Pilih Tanggal Keberangkatan"
				   placeholderTextColor="black"
                />
                <Icon
                  name="calendar"
                  size={25}
                  color="grey"
                  style={{marginTop: 10, marginLeft: -40}}
				  	onPress={this.datepicker}
                />
              </View>
            </View>

            
          </View>

          <View style={{height: 100 }}>
            <TouchableOpacity style={styles.roundButton1}
			   onPress={()=>this.klikSimpan()}
			>
              <Text style={styles.btntext}>Tambah</Text>
            </TouchableOpacity>

          </View>
		     <View style={{height: 100}}>
            <TouchableOpacity style={styles.roundButton1}
			   onPress={()=>this.klikSimpan1()}
			>
              <Text style={styles.btntext}>Selesai</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
        {/* inputan */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 roundButton1: {
    // width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
    roundButton2: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 200,
	  marginTop: -31,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },

  jadwalbase: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  inputjadwal: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 5,
    height: 40,
    width: '100%',
	 color: 'black',
	  fontSize: 14,
  },
    pickStyle: {
    color: 'black',
    fontSize: 16,
    processColor: 'red',
    ColorValue: 'red',
	borderColor:'red',
	borderWidth:2,
borderRadius:10
	
  },
  image: {
    // opacity: 0.2,
    zIndex: 0,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 100,
  },
  lasttx: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    // fontWeight: 'bold',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ff9d47',
    margin: 20,
    paddingTop: 20,
    padding: 15,
    height: 140,
    borderRadius: 5,
  },

  riwayat: {
    backgroundColor: 'white',
  },
});
