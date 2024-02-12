import React, { Component } from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
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
	  
     <Text  style={{ marginLeft: 25,  marginTop: -550, fontSize: 20,  color:'black',

	 fontFamily: "Roboto-Regular",}}>Isi Nama Travel Keberangkatang Anda</Text>
          <Text style={{ fontSize: 20, 
		  marginLeft: -230,  marginTop: -290, color:'black',
		   fontFamily: "Roboto-Regular",
		  }}>Pilih Travel : </Text>
   
        <View style={{ fontSize: 14,  marginLeft: -190, marginRight: 70, marginTop: -170,  borderRadius: 10, 
    backgroundColor:'#68a0cf',
    borderRadius: 10,
   
  width:250,
      height: 40,
	   
      borderColor: '333333',
 }}>
          <Picker
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
           
         
		
			  
            {this.state.listData.map((val,index)=>(
                   
                       <Picker.Item
                color="white"
                label={val.namatravelpesan}
                value={val.namatravelpesan}
                index={index}
              />
						))}
						   </Picker>
						
						  
						<CustomButton
			  style={{  
  
    marginBottom: 20,
    borderRadius: 40,
	
	  textAlign: 'center',
    alignSelf: 'center',
    marginTop: 40,
	marginLeft: 10,
    marginBottom: 70,}}
              title='Lanjut'
              color='#68a0cf'
onPressFunction={() => this.klikSimpan()}
         
			  
          />
      
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },

  pickerStyle: {
    width: "90%",
    height: 40,
    color: "#fff",
    fontSize: 16,
  
  },
  textStyle: {
    fontSize: 18,
    fontFamily: "Roboto-Regular",
	marginTop : -90,
	 borderTopLeftRadius: 10, borderTopRightRadius: 10,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
	marginLeft : 38,
	color: "black",
  }
});