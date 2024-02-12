import React, {Component, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OTPInputView from '@twotalltotems/react-native-otp-input';

class Hitungmundur extends Component {
  constructor(props) {
    super(props);
    this.state = {currentCount: 60};
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    var habis = +this.state.currentCount;
    if (habis == 0) {
      alert('watu habis! ');
    }

    return <Text style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>{this.state.currentCount}</Text>;
  }
}

const Otp = ({route, navigation}) => {
  const {itemId} = route.params;
  const {kategori} = route.params;
  const {email_pribadi} = route.params;
  const {nama_lengkap} = route.params;

  state = {
    code: '',
  };

  var otp = itemId;
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#eaeaea', flex: 1}}>
        {/* tengah */}
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => navigation.navigate('Formlogin')}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.welcome}>Verifikasi OTP</Text>
          <View></View>
        </View>

        <View style={styles.container}>
          <Text style={styles.sub1}>Masukkan Kode Verifikasi</Text>
          <Text style={{textAlign: 'center'}}></Text>

          <OTPInputView
            pinCount={4}
            style={{width: '80%', height: 100}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code},`);

              if (code == otp) {
                navigation.replace('AuthHajiPribadi');
                try {
                  var user = {
                   Name: nama_lengkap,
                  
                    Email: '',
					  Kategori: kategori,
                  };
                  AsyncStorage.setItem('UserData', JSON.stringify(user));
                  navigation.replace('Auth');
                } catch (error) {
                  console.log(error);
                }
              } else {
                alert('Kode OTP Salah! ');
              }
            }}
          />
         

          <Text style={{color: 'black'}}>
            Mohon menunggu{' '}
            <View>
              <Hitungmundur />
            </View>{' '}
            detik untuk mengirim ulang
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Otp', {
            itemId: itemId,
            telepon: telepon,
           email_pribadi :email_pribadi,
            nama_lengkap: nama_lengkap,
          })}>
            <Text style={styles.bottext}>
              <Text style={{color: '#c19737'}}>Kirim Ulang OTP</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconbackstyle: {
    marginLeft: 20,

    marginTop: 30,
  },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  sub1: {
    fontWeight: 'bold',
    marginBottom: 20,
	color: 'black',
	fontSize: 20,
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
    height: 300,
    justifyContent: 'center',
    marginTop: 50,
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
    marginTop: 22,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
    fontSize: 20,
     color: 'black',
	   fontWeight: 'bold',
  },

  underlineStyleHighLighted: {
    // borderBottomWidth: 2,

    borderColor: '#da9203',
  },

  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'orange',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },

  bottext: {
    fontSize: 18,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
	 marginTop: 15,
	     color: 'orange',
  },
  bottext3: {
    fontSize: 12,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  bottext2: {
    fontSize: 14,
    textDecorationLine: 'underline',

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
    padding: 10,
  },
});

export default Otp;
