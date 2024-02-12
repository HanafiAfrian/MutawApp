import React, {Component, useState, useRef} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from 'react-native-check-box';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  Button,
  Linking,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Logomail, Logouser, Logokey} from '../../assets';
import {IconBack} from '../../assets';
import PhoneInput from 'react-native-phone-number-input';
// import SelectDropdown from 'react-native-select-dropdown';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nohp: '',
	  username:'',
	   pwsatu: '',
	    pwdua: '',
      listData: [],
      idEdit: null,
      isChecked: '',
      isSelected: '',
    };
    this.url = 'https://mutawif.co.id/api/muapi/login.php';
  }
  componentDidMount() {
    this.ambilListData();
  }
  async ambilListData() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  klikSimpan() {
     if (
      this.state.username == '') {
      alert('Masukkan Username');
    } 
	 else if (
    
      this.state.password == '') {
      alert('Silakan Isi Password');
    }
	
	
	
	
	 else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=login';
   var str = '1 2 3 4 5 6 7 8 9 0';
    var waktu = new Date().getMilliseconds();
    var waktu2 = new Date().getSeconds();
    var waktu3 = new Date().getMinutes();
    var waktu4 = new Date().getHours();
    var waktu5 = new Date().getDay();
    var every_word_im_shuffling = str
      .split(/\s\b(?!\s)/)
      .sort(function () {
        return 0.2 - Math.random();
      })
      .join(+waktu + waktu2 + waktu3 + waktu4 + waktu5);
    console.log(every_word_im_shuffling);
    var res = every_word_im_shuffling.substring(0, 4);
        var email = this.state.email;
        var password = this.state.password;
        var nohp = 0 + this.state.nohp;
       var pwsatu = this.state.pwsatu;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'username=' +
          this.state.username +
          '&password=' +
          this.state.password ,
      })
        .then(response => response.json())
        .then(responseJson => {

			 if (responseJson == 'btoc') {
				 this.props.navigation.replace('Pilihtravel',{name:this.state.username});
			 }
		 else if (responseJson == 'btob') {
				  
                this.props.navigation.replace('Authotp',{name:this.state.username});
                
			 
			 }
			  else if (responseJson == 'Kloter') {
				  
                this.props.navigation.replace('Authotp',{name:this.state.username});
                
			 }
			 
			 
			    else if (responseJson == 'ketuakarom') {
				  
                this.props.navigation.replace('Authotp',{name:this.state.username});
                
			 }
			  else if (responseJson == 'nonaktif') {
				alert('Akun Anda Belom Aktif Silahkan Coba Beberapa Saat Lagi');
			 }
			else
			{
				
		alert('Username Salah');
          this.setState({email: ''});
          this.setState({password: ''});
          this.setState({nohp: ''});

          this.ambilListData();
        }
	}
		);
    }
  }
  async klikEdit(id) {
    await fetch(this.url + '/?op=detail&id=' + id)
      .then(response => response.json())
      .then(json => {
        this.setState({email: json.data.result[0].email});
        this.setState({password: json.data.result[0].password});
        this.setState({nohp: json.data.result[0].nohp});
        this.setState({idEdit: id});
      });
  }
  async klikDelete(id) {
    await fetch(this.url + '/?op=delete&id=' + id)
      .then(response => response.json())
      .then(json => {
        alert('Data berhasil didelete');
        this.ambilListData();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', flex: 1}}>
          {/* tengah */}
            <View style={styles.welcomebg}>
              <TouchableOpacity
                style={styles.iconbackstyle}
                onPress={() => this.props.navigation.navigate('Welcome')}>
                <Image source={IconBack} />
              </TouchableOpacity>
              <Text style={styles.welcome}  onPress={() => this.props.navigation.navigate('Welcome')}>Login</Text>
           
 </View>

          <View style={styles.container}>
            <View style={styles.textinputmain}>
              <Image source={Logouser} style={styles.logoiconuser} />
              <TextInput
                style={styles.input}
                placeholder="Username"
				 placeholderTextColor="gray"
                inlineImageLeft="S"
                value={this.state.username}
                onChangeText={text => this.setState({username: text})}
              />
             
   <Image source={Logokey} style={styles.logoiconpw} />
              <TextInput
                style={styles.input}
                placeholder="Password"
				 placeholderTextColor="gray"
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />

             
            </View>
          
            <View></View>
            {/*  */}
            
			
  <CustomButton
			  style={{  
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40,
	  textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 100,}}
              title='Login'
              color='orange'
onPressFunction={() => this.klikSimpan()}
         
			  
          />
          </View>
		    <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Lupapassword')}>
            <Text style={styles.bottext}>
            
              <Text style={{color: '#c19737',  fontSize: 16,}}>Lupa Password</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 40, backgroundColor: 'white', paddingTop: 20}}>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Daftar')}>
            <Text style={styles.bottext}>
              Belum Punya Akun?
              <Text style={{color: '#c19737'}}> Daftar Disini</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerphone: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

  textcontainerphone: {
    backgroundColor: 'white',
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey',
  },

  phoneinput: {
    backgroundColor: 'white',
  },

  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  aaa: {
    backgroundColor: 'red',
    color: 'yellow',
  },

  midtext: {
    color: '#828487',
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 5,
  },

  line: {
    height: 1,
    width: 30,
    backgroundColor: '#828487',
  },

  container: {
    // height: 300,
    justifyContent: 'center',
    marginTop: 50,
    paddingBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -29,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    marginBottom: 80,
    backgroundColor: '#1b2333',
  },

  btnsos: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: 'grey',
  },

  //   textinputmain: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //   },

  logoiconuser: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 22,
    position: 'absolute',
    opacity: 0.5,
  },
  logoiconmail: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 82,
    position: 'absolute',
    opacity: 0.5,
  },
  
    logoiconpw: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 82,
    position: 'absolute',
    opacity: 0.5,
  },
  
    logoiconpwdua: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 82,
    position: 'absolute',
    opacity: 0.5,
  },
  logoiconkey: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 142,
    position: 'absolute',
    opacity: 0.5,
  },
  logoiconkey2: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 202,
    position: 'absolute',
    opacity: 0.5,
  },

  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 40,
    backgroundColor: 'orange',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',

    fontWeight: 'bold',
  },

  bottext: {
    fontSize: 14,
    color: "gray",
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext3: {
    fontSize: 12,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  bottext2: {
    fontSize: 16,
    textDecorationLine: 'underline',
color: "black",
    textAlign: 'center',
  },

  input: {
    height: 40,
    width: 250,
    margin: 10,
    marginLeft: 30,
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
	 color: 'black',
	  fontSize: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxInput: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 30,
    marginTop: 10,
  },
  checkbox: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    margin: 4,
  },
});
