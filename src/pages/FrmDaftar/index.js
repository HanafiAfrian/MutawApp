import React, {Component, useState, useRef} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from 'react-native-check-box';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase  from "@react-native-firebase/app";
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

export default class Formdaftar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nohp: '',
	   pwsatu: '',
	    pwdua: '',
      listData: [],
      idEdit: null,
      isChecked: '',
      isSelected: '',
	    idToken :null,
    };
    this.url = 'https://mutawif.co.id/api/muapi/daftar.php';
  }
  componentDidMount() {
    this.ambilListData();
	var firebaseConfig = {
  apiKey: "AIzaSyB5YPERkCxXmMudVXCYECUdYKslB_S6SWA",
  authDomain: "mutawifapp.firebaseapp.com",
  projectId: "mutawifapp",
  storageBucket: "mutawifapp.appspot.com",
  messagingSenderId: "269716772100",
  appId: "1:269716772100:web:52d329906c297d3396ec51"
};
if (!Firebase.apps.length){
	Firebase.initializeApp(firebaseConfig);		
} else {
	Firebase.app();
	
}

	 PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  
  onRegister: function (token) {
   console.log("TOKEN:", token);
  },
onRegister:(token) =>this.setState({idToken:token.token}),
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});
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
      this.state.email == '') {
      alert('Silakan Isi Nama Lengkap');
    } 
	 else if (
    
      this.state.password == '') {
      alert('Silakan Isi Email');
    }
	
	
	 else if (
    
      this.state.pwsatu == '') {
      alert('Silakan Isi Password');
    }
	
	 else if (
    
      this.state.pwdua == '') {
      alert('Silakan Isi Konfirm Password');
    }
	
	 else if (
    
      this.state.pwsatu != this.state.pwdua) {
      alert('Konfirm Password Salah');
    }
	
	
	else if (
    
      this.state.nohp == '') {
      alert('Silakan Isi Nomor Telepon');
    }
	
	
	else if (this.state.isChecked == '') {
      alert('Silahkan Centang CekBox');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + '/?op=update&id=' + this.state.idEdit;
      } else {
        var urlAksi = this.url + '/?op=daftar';
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
	     var token = this.state.idToken;
      }

      var isSelected = false;
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'email=' +
          this.state.email +
          '&password=' +
          this.state.password +
          '&nohp=' +
          nohp +
		   '&pwsatu=' +
          pwsatu +
		  
		  
		  '&token=' +
          this.state.idToken +
          '&otp=' +
          res,
      })
        .then(response => response.json())
        .then(responseJson => {
			 if (responseJson == 'false') {
				 alert('Username Sudah Terdaftar!, Silahkan Login Menggunakan Username Yang Telah di Daftarkan !');
			 }
			
			 else if (responseJson == 'salah') {
				 alert('Nomor Telepon Sudah Terdaftar!, Silahkan Login Menggunakan Nomor Telepon Yang Telah di Daftarkan !');
			 } 
			else
			{
				
		
          this.props.navigation.replace('Pilihtraveldaftar', {
            itemId: res,
            telepon: nohp,
            nama_lengkap: email,
            email_pribadi: password,
          });
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
        <View style={{backgroundColor: 'white', flex: 1, }}>
          {/* tengah */}
            <View style={styles.welcomebg} >
              <TouchableOpacity
                style={styles.iconbackstyle}
                onPress={() => this.props.navigation.navigate('Daftar')}>
                <Image source={IconBack} />
              </TouchableOpacity>
              <Text style={styles.welcome}  onPress={() => this.props.navigation.navigate('Daftar')}>Pendaftaran 
			  Pribadi</Text>
           
 </View>

          <View style={styles.container}>
            <View style={styles.textinputmain}>
              <Image source={Logouser} style={styles.logoiconuser} />
              <TextInput
			   autoFocus
                style={styles.input}
                placeholder="Username"
				 placeholderTextColor="gray"
                inlineImageLeft="S"
                value={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <Image source={Logomail} style={styles.logoiconmail} />
              <TextInput
                style={styles.input}
                placeholder="Email"
				 placeholderTextColor="gray"
                value={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
   <Image source={Logokey} style={styles.logoiconpw} />
              <TextInput
                style={styles.input}
                placeholder="Password"
				 placeholderTextColor="gray"
                value={this.state.pwsatu}
                onChangeText={text => this.setState({pwsatu: text})}
              />
 <Image source={Logokey} style={styles.logoiconpwdua} />
              <TextInput
                style={styles.input}
                placeholder="Konfirm Password"
				 placeholderTextColor="gray"
                value={this.state.pwdua}
                onChangeText={text => this.setState({pwdua: text})}
              />
              <PhoneInput
                style={styles.phoneinput}
                defaultCode="ID"
                value={this.state.nohp}
                withDarkTheme
                containerStyle={styles.containerphone}
                textContainerStyle={styles.textcontainerphone}
                placeholder="82274627112"
				 placeholderTextColor='blue'
               
                onChangeText={text => this.setState({nohp: text})}
              />
            </View>
            <View style={styles.checkboxInput}>
              <CheckBox
                onClick={() => {
                  this.setState({
                    isChecked: !this.state.isChecked,
                  });
                }}
                isChecked={this.state.isChecked}
                style={styles.checkbox}
              />
              <Text style={styles.label}>
                  Dengan ini Anda sudah{' '}
                <Text
                  style={styles.label}
                  style={{color: 'orange'}}
                  onPress={() =>
                    Linking.openURL(
                      'https://mutawif.co.id/api/SYARATDANKETENTUANMUTAWIF.pdf',
                    )
                  }>
                  menyetujui syarat dan ketentuan mutawif
                </Text>
                dengan mencentang pada cek box yang tersedia, Kemudian Klik
                Lanjut.
              </Text>
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
    marginTop: 20,
    marginBottom: 100,}}
              title='Lanjut'
              color='orange'
onPressFunction={() => this.klikSimpan()}
         
			  
          />
          </View>
        </View>
        <View style={{height: 40, backgroundColor: 'white', paddingTop: 10}}>
          <Text style={styles.bottext2}>
            Sudah Punya Akun?  <Text
              style={{color: '#c19737'}}
              onPress={() => this.props.navigation.navigate('Formlogin')}>
              Masuk sekarang
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerphone: {
    backgroundColor: '#D2B48C',
    borderBottomWidth: 1,
    borderBottomColor: '#D2B48C',
  },

  textcontainerphone: {
    backgroundColor: '#D2B48C',
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey',
  },

  phoneinput: {
    backgroundColor: 'black',
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
    marginTop: 142,
    position: 'absolute',
    opacity: 0.5,
  },
  
    logoiconpwdua: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 202,
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
    // color: 'white',
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
    marginTop: -90,
    textAlign: 'center',
	color: "gray",
  },

  input: {
    height: 40,
    width: 250,
    margin: 10,
    marginLeft: 30,
	  fontSize: 14,
    // borderWidth: 1,
 color: 'black',
 
    borderBottomWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	 marginTop: -60,
  },
  checkboxInput: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 30,
    marginTop: 10,
	color:'black',
  },
  checkbox: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    margin: 4,
	color: "gray",
  },
});
