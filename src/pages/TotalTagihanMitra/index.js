import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BniIcon, CodIcon, CcIcon, BriIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioButton from 'react-native-simple-radio-button-input';

var radio_props = [
  {label: 'param1', value: 0},
  {label: 'param2', value: 1},
];

export default class TotalTagihanMitra extends Component {
  state = {
    bni: false,
    bri: false,
    cod: false,
    cc: false,
  };

  bniPressed() {
    this.setState({bni: true, bri: false, cod: false, cc: false});
  }

  briPressed() {
    this.setState({bni: false, bri: true, cod: false, cc: false});
  }

  codPressed() {
    this.setState({bni: false, bri: false, cod: true, cc: false});
  }

  ccPressed() {
    this.setState({bni: false, bri: false, cod: false, cc: true});
  }
  klikMenu() {
    if (
      this.state.bni == true &&
      this.state.bri == false &&
      this.state.cod == false &&
      this.state.cc == false
    ) {
      this.props.navigation.navigate('CariMitra');
      // this.props.navigation.navigate('DetailBayar');
    } else if (
      this.state.bni == false &&
      this.state.bri == true &&
      this.state.cod == false &&
      this.state.cc == false
    ) {
      this.props.navigation.navigate('CariMitra');
      // this.props.navigation.navigate('DetailBayarCod');
    } else if (
      this.state.bni == false &&
      this.state.bri == false &&
      this.state.cod == true &&
      this.state.cc == false
    ) {
      this.props.navigation.navigate('CariMitra');
      // this.props.navigation.navigate('DetailBayarCc');
    } else if (
      this.state.bni == false &&
      this.state.bri == false &&
      this.state.cod == false &&
      this.state.cc == true
    ) {
      this.props.navigation.navigate('CariMitra');
    } else {
  alert('Silahkan Pilih Jenis Pembayaran Yang Telah  Disediakan');
    }
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            // onPress={() => this.props.navigation.navigate('KursirodaOrder')}
          >
            <Icon
              name="chevron-left"
              size={20}
              color="#fff"
              style={{
                marginTop: -10,
                padding: 7,
                marginLeft: -10,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>
            Total<Text style={{color: 'orange'}}> Tagihan Cari Mitra</Text>
          </Text>
          <View></View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.tagihan}>
            <View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Total Tagihan
                </Text>
              </View>
              <View>
                <Text style={{color: 'orange', fontWeight: 'bold'}}>
                  130 SR (Rp. 493.950)
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Text></Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', marginLeft: 15, marginTop: 15}}>
              Pilih Metode Pembayaran
            </Text>
          </View>
          <View style={styles.mainbank}>
            <View style={styles.bank}>
              <View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 10,
                      fontSize: 16,
                    }}>
                    BNI Virtual Account
                  </Text>
                </View>
              </View>

              <View>
                <Image source={BniIcon} style={{width: 70, height: 20}} />
              </View>
            </View>

            {/* header */}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{fontSize: 12, maxWidth: 280}}>
                  Dapatkan{' '}
                  <Text style={{fontWeight: 'bold'}}>kode pembayaran</Text>{' '}
                  setelah klik "Bayar"
                </Text>
                <Text style={{fontSize: 12, maxWidth: 250}}>
                  Tidak Disarankan bayar melalui bank lain agar transaksi agar
                  transaksi dapat diproses tanpa kendala
                </Text>
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <RadioButton
                  color={'green'}
                  selected={this.state.bni}
                  onPress={() => this.bniPressed()}
                />
              </View>
            </View>
          </View>

          {/* bri */}
          <View style={styles.mainbank}>
            <View style={styles.bank}>
              <View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 10,
                      fontSize: 16,
                    }}>
                    BRI Virtual Account
                  </Text>
                </View>
              </View>

              <View>
                <Image source={BriIcon} style={{width: 70, height: 20}} />
              </View>
            </View>

            {/* header */}
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View>
                <Text style={{fontSize: 12, maxWidth: 280}}>
                  Dapatkan{' '}
                  <Text style={{fontWeight: 'bold'}}>kode pembayaran</Text>{' '}
                  setelah klik "Bayar"
                </Text>
                <Text style={{fontSize: 12, maxWidth: 250}}>
                  Tidak Disarankan bayar melalui bank lain agar transaksi agar
                  transaksi dapat diproses tanpa kendala
                </Text>
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <RadioButton
                  color={'green'}
                  selected={this.state.bri}
                  onPress={() => this.briPressed()}
                />
              </View>
            </View>
          </View>
          {/* bri */}

          <View style={styles.mainbank}>
            <View style={styles.bank}>
              <View>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 10,
                      fontSize: 16,
                    }}>
                    Cash On Delivery
                  </Text>
                </View>
              </View>

              <View>
                <Image source={CodIcon} style={{width: 70, height: 40}} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View>
                <Text style={{fontSize: 12, maxWidth: 285}}>
                  Metode{' '}
                  <Text style={{fontWeight: 'bold'}}>cash on delivery</Text>{' '}
                  merupakan metode pembayaran yang dilakukan secara langsung di
                  tempat, setelah pesanan dari kurir diterima oleh Pembeli
                </Text>
              </View>
              <View style={{marginLeft: 20, marginTop: 10}}>
                <RadioButton
                  color={'green'}
                  selected={this.state.cod}
                  onPress={() => this.codPressed()}
                />
              </View>
            </View>
          </View>
     
        </View>

        <View>
          <TouchableOpacity
            style={styles.btnbayar}
            onPress={() => this.klikMenu()}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              Pesan
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btnbayar: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
  mainbank: {
 	margin: 10,
    padding: 15,
    borderRadius: 10,
	 borderWidth:1,
  },
  bank: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    marginBottom: 10,
  },

  tagihan: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 20,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
