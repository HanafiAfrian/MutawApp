import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image, ScrollView,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import {topimg, logowic} from '../../assets';
export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    selectedcat: "",
	 selectedcat1: "",
	  selectedcat2: "",
	 listData: [],
	  listData1: [],
	    listData2: [],
      idEdit: null,
 
  };
   this.url = 'https://mutawif.co.id/api/muapi/ambilakunkloterawal.php';
    this.url1 = 'https://mutawif.co.id/api/muapi/ambilakunkaromhaji.php';
	    this.url2 = 'https://mutawif.co.id/api/muapi/ambilakunlokasi.php';
   
	 }
	 
	 
	  componentDidMount() {
    this.ambilListData();
	    this.ambilListData1();
		  this.ambilListData2();
  }

  async ambilListData() {
    var telepon = this.props.route.params.name;
	var name = this.props.route.params.name;
	
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
		    this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
                this.setState({ email_pribadi: json.data.result[0].email_pribadi })
                this.setState({ telepon: json.data.result[0].telepon })
				 this.setState({ nama: json.data.result[0].nama })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		
		
		
      })
      .catch(error => {
        console.log(error);
      });
  }
  
	  async ambilListData1() {
    var telepon = this.props.route.params.name;
	var name = this.props.route.params.name;
	
    await fetch(this.url1)
      .then(response => response.json())
      .then(json => {
		    this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
                this.setState({ email_pribadi: json.data.result[0].email_pribadi })
                this.setState({ telepon: json.data.result[0].telepon })
				 this.setState({ nama: json.data.result[0].nama })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
		
		
		
      })
      .catch(error => {
        console.log(error);
      });
  } 
	 async ambilListData2() {
    var telepon = this.props.route.params.name;
	var name = this.props.route.params.name;
	
    await fetch(this.url2)
      .then(response => response.json())
      .then(json => {
		    this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
                this.setState({ email_pribadi: json.data.result[0].email_pribadi })
                this.setState({ telepon: json.data.result[0].telepon })
				 this.setState({ nama: json.data.result[0].nama })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData2: json.data.result});
		
		
		
      })
      .catch(error => {
        console.log(error);
      });
  }  
  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }
  async onValueChangeCat1(value) {
    this.setState({ selectedcat1: value });
  }
  async onValueChangeCat2(value) {
    this.setState({ selectedcat2: value });
  }
  
 klikSimpan(){
      if(this.state.selectedcat == null){
        alert('Silakan masukkan nama Travel');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=create";
          }
     var itemId =	this.props.route.params.itemId; 
		   var nama_lengkap =	this.props.route.params.nama_lengkap; 
   var kategori = 'hajipribadi';
          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"namakloter="+this.state.selectedcat+
			   "&nokoter="+this.state.selectedcat1 +
			   "&lokasi="+this.state.selectedcat2 +
			  "&nama_lengkap="+ nama_lengkap
          })
          .then((response)=>response.json())
 
		 .then(responseJson => {

			 if (responseJson == 'ok') {
				 
		 this.props.navigation.replace('OtpCosthaji', {
            itemId: itemId,
           
            kategori: kategori,
            nama_lengkap: nama_lengkap,
          });
				 
				 
				 
				 
				 
			 }
		
		
      })
      .catch(error => {
        console.log(error);
      });
      }
  }
  render() {
	    var itemId =	this.props.route.params.itemId; 
	     var nama_lengkap =	this.props.route.params.nama_lengkap; 
    return (
	   <ScrollView>
      <View style={styles.viewStyle}>
	
        <View style={{width: '100%'}}>
          <Image
            source={topimg}
            style={{width: '105%', height: 200, marginTop: -120}}
          />
          <Image source={logowic} style={styles.logoico} />
          <Text style={styles.pilihtrvl}>Pilih Kloter keberangkaan anda </Text>
 <View style={styles.pickerStyle}>
         <Picker
            mode="dropdown"
            style={styles.pickStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
               {this.state.listData.map((val,index)=>(
                   
                       <Picker.Item
                color="orange"
                label={val.namatravelpesan}
                value={val.namatravelpesan}
                index={index}
              />
						))}
						   </Picker>
          </View>
       <Text style={styles.pilihtrv2}>Pilih Karom keberangkaan anda</Text>
 <View style={styles.pickerStyle}>
         <Picker
            mode="dropdown"
            style={styles.pickStyle}
            selectedValue={this.state.selectedcat1}
            onValueChange={this.onValueChangeCat1.bind(this)}
          >
               {this.state.listData1.map((val,index)=>(
                   
                       <Picker.Item
                color="orange"
                label={val.nmkarom}
                value={val.nmkarom}
                index={index}
              />
						))}
						   </Picker>
          </View>
		  <Text style={styles.pilihtrv2}>Pilih Embarkasi keberangkaan anda</Text>
 <View style={styles.pickerStyle}>
         <Picker
            mode="dropdown"
            style={styles.pickStyle}
            selectedValue={this.state.selectedcat2}
            onValueChange={this.onValueChangeCat2.bind(this)}
          >
               {this.state.listData2.map((val,index)=>(
                   
                       <Picker.Item
                color="orange"
                label={val.namakloter}
                value={val.namakloter}
                index={index}
              />
						))}
						   </Picker>
          </View>
 </View>
 
        <View>
          <CustomButton
            style={styles.cbt}
            title="Lanjut"
            color="orange"
            onPressFunction={() => this.klikSimpan()}
          />
        </View>
	
      </View>
	  	 </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pilihtrvl: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  },
    pilihtrv2: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  cbt: {
    marginBottom: 20,
    borderRadius: 10,
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 70,
  },
  viewStyle: {
    paddingVertical: '30%',
    // padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },

  logoico: {
    width: 350,
    height: 50,
    marginTop: -150,
    marginBottom: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pickerStyle: {
    marginTop: 50,
    width: '97%',
    marginLeft: 4,
    height: 60,

 backgroundColor: 'orange',
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 10,
  },
  pickStyle: {
    color: 'white',
    fontSize: 16,
    processColor: 'red',
    ColorValue: 'red',
  },
});
