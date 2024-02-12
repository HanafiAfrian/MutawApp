import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

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
        idEdit:null,
			 date: new Date(),
    mode: 'date',
    tampil: false,
			
			};
			this.url = "https://mutawif.co.id/api/muapi/jadwalberangkat.php";

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
      if(this.state.group == '' || this.state.nama_leader == ''){
        alert('Silakan masukkan group dan nama_leader');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		var group =	this.state.group; 
		var nama_leader = this.state.nama_leader; 
		var no_telepon = this.state.no_telepon; 
		var email =	this.props.route.params.email; 
	const { tampil, date, mode } = this.state;
	
	     var tanggal =  moment(date).format('YYYY-MM-DD');
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:
			  
			  "&email="+email+
			  "&group="+group+
			  "&nama_leader="+nama_leader+
			  "&no_telepon="+no_telepon+
			  "&tanggal="+tanggal
          })
          .then((response)=>response.json())
          .then((json)=>{
              this.setState({nama:''});
              this.setState({alamat:''});
              this.ambilListData();
 alert('Jadwal Keberangkatan Anda Telah Berhasil Di Simpan');
			   this.props.navigation.navigate('Splash')
          })
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

  render() {
	     var email =	this.props.route.params.email; 
	   const { tampil, date, mode } = this.state;
	     var tanggal =  moment(date).format('YYYY-MM-DD');
    return (
      <SafeAreaView>
        <ScrollView>
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
              Atur Jadwal keberangkatan dan kepulangan agar anda dapat terhubung
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
            <View>
              <Text style={{marginLeft: 10, color: "gray"}}> No / Nama Group</Text>

              <TextInput style={styles.inputjadwal} placeholder="Group"
 value = { this.state.group }
  placeholderTextColor="gray"
                    onChangeText = {(text) => this.setState({group: text })}	

			  />
            </View>
			 <View>
              <Text style={{marginLeft: 10, color: "gray"}}> Nama Leader</Text>

              <TextInput style={styles.inputjadwal} placeholder="Nama Leader"
 value = { this.state.nama_leader }
  placeholderTextColor="gray"
                    onChangeText = {(text) => this.setState({nama_leader: text })}			  />
            </View>
			 <View>
              <Text style={{marginLeft: 10, color: "gray"}}> No Telepon Leader</Text>

              <TextInput style={styles.inputjadwal} placeholder="No Telepon " 
			   value = { this.state.no_telepon }
			   keyboardType = 'numeric'
			    placeholderTextColor="gray"
                    onChangeText = {(text) => this.setState({no_telepon: text })}	/>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{marginLeft: 10, color: "gray"}}>Jadwal Keberangkatan</Text>

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
          <View style={{height: 80}}>
            <TouchableOpacity style={styles.roundButton1}
			   onPress={()=>this.klikSimpan()}
			>
              <Text style={styles.btntext}>Atur Jadwal</Text>
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
