import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import {topimg, logowic} from '../../assets';
export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    selectedcat: "",
	 listData: [],
      idEdit: null,
 
  };
   this.url = 'https://mutawif.co.id/api/muapi/ambilakun.php';
	 }
	 
	 
	  componentDidMount() {
    this.ambilListData();
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
  
	 
	 
  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
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
          var nama = 	this.props.route.params.name;;

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"pilih_travel="+this.state.selectedcat+"&nama_lengkap="+ nama
          })
          .then((response)=>response.json())
 
		 .then(responseJson => {

			 if (responseJson == 'ok') {
				 
				 
		 this.props.navigation.replace('Auth');
                try {
                  var user = {
                    Name: nama,
                    Age: this.state.selectedcat,
                    Email: '',
                  };
                  AsyncStorage.setItem('UserData', JSON.stringify(user));
                  navigation.replace('Auth');
                } catch (error) {
                  console.log(error);
                } 
				 
				 
				 
				 
				 
			 }
		
		
      })
      .catch(error => {
        console.log(error);
      });
      }
  }
  render() {
	  
	     var nama_lengkap =	this.props.route.params.name; 
    return (
      <View style={styles.viewStyle}>
        <View style={{width: '100%'}}>
          <Image
            source={topimg}
            style={{width: '105%', height: 200, marginTop: -120}}
          />
          <Image source={logowic} style={styles.logoico} />
          <Text style={styles.pilihtrvl}>Pilih travel keberangkaan anda</Text>
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
  cbt: {
    marginBottom: 20,
    borderRadius: 10,
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 120,
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
