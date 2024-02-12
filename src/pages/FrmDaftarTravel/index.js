import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default class Daftar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      nohp: '',
      email: '',
      password: '',
      password1: '',
      hidden: true,
      hidden2: true,
      listData: [],
      userType: 'Pelajar', // Default value
    };
    this.url = 'http://192.168.18.14/api/register.php';
  }

  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({ listData: json.data.result });
      })
      .catch(error => {
        console.log(error);
      });
  }

  klikSimpan() {
    if (this.state.nama === '') {
      alert('Silakan Isi Nama Lengkap');
    } else if (this.state.nohp === '') {
      alert('Silakan Isi Nomor Telepon');
    } else if (this.state.nohp.length < 11) {
      alert('Input Nomor Telepon Kurang');
    } else if (this.state.email === '') {
      alert('Silakan Isi Email');
    } else if (this.state.password === '') {
      alert('Silakan Isi Password');
    } else if (this.state.password1 === '') {
      alert('Silakan Isi Konfirm Password');
    } else if (this.state.password !== this.state.password1) {
      alert('Konfirm Password Salah');
    } else if (this.state.password.length < 6) {
      alert('Input Password Kurang');
    } else {
      var urlAksi = this.url + '/?op=daftar';

      var nama = this.state.nama;
      var nohp = this.state.nohp;
      var email = this.state.email;
      var password = this.state.password;
      var password1 = this.state.password1;
      var userType = this.state.userType;

      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'nama=' +
          nama +
          '&nohp=' +
          this.state.nohp +
          '&email=' +
          this.state.email +
          '&password=' +
          password +
          '&userType=' + userType, // Include userType in the request body
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson === 'true') {
            alert('Registar Berhasil, Silahkan Login Menggunakan NIK dan Password anda');
            this.props.navigation.replace('Login');
          } else if (responseJson === 'false') {
            alert('Email Sudah Terdaftar');
          } else if (responseJson === 'salah') {
            alert('No Telepon Sudah Terdaftar');
          }
        });
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Text style={{ textAlign: 'center', fontSize: 32, color: '#004ba0' }}>
            Pendaftaran
          </Text>

          <TextInput
            label="Nama Lengkap (Sesuai KTP)"
            theme={{ roundness: 30 }}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            style={{ backgroundColor: 'white', marginTop: 35 }}
            value={this.state.nama}
            onChangeText={text => this.setState({ nama: text })}
          />

          <TextInput
            label="No. HP"
            maxLength={13}
            theme={{ roundness: 30 }}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            keyboardType="numeric"
            style={{ backgroundColor: 'white', marginTop: 15 }}
            value={this.state.nohp}
            onChangeText={text => this.setState({ nohp: text })}
          />

          <TextInput
            label="Email Aktif"
            theme={{ roundness: 30 }}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            style={{ backgroundColor: 'white', marginTop: 35 }}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />

          <TextInput
            label="Password (Min. 6 Karakter)"
            theme={{ roundness: 30 }}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{ backgroundColor: 'white', marginTop: 15 }}
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />

          <TextInput
            label="Konfirmasi Password"
            theme={{ roundness: 30 }}
            activeOutlineColor="#005b9f"
            outlineColor="gray"
            mode="outlined"
            secureTextEntry={this.state.hidden}
            style={{ backgroundColor: 'white', marginTop: 15 }}
            value={this.state.password1}
            onChangeText={text => this.setState({ password1: text })}
          />

          <Picker
            selectedValue={this.state.userType}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ userType: itemValue })
            }
            style={{ height: 50, width: '100%', marginTop: 15 }}
            itemStyle={{ fontSize: 16 }}
          >
            <Picker.Item label="Pelajar" value="Pelajar" />
            <Picker.Item label="Dosen" value="Dosen" />
            <Picker.Item label="Umum" value="Umum" />
          </Picker>

          <CheckBox
            value={!this.state.hidden}
            onValueChange={() =>
              this.setState({
                hidden: !this.state.hidden,
                hidden2: !this.state.hidden2,
              })
            }
          />

          <TouchableOpacity
            style={styles.screenContainer}
            onPress={() => this.klikSimpan()}
          >
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
              Daftar
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 16, color: 'grey' }}>
              Sudah punya akun?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#004ba0' }}>
                {' '}
                Masuk
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 20,
  },

  screenContainer: {
    padding: 15,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#005b9f',
  },
});
