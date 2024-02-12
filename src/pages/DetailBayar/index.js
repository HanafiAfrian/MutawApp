import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconBack, BniIcon } from '../../assets';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './Style'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';
import CountDown from 'react-native-countdown-component';
import {Clipboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class DetailBayarbri extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      no_va: '',
      alamat: '',
      listData: [],
      idEdit: null,
      date: new Date(),
      mode: 'date',
      tampil: false,
    };
 this.url = "https://mutawif.co.id/api/muapi/pembayaranbni.php";
  }
  componentDidMount() {
    this.ambilListData()
  }
  async ambilListData() {
    await fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({ listData: json.data.result });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  klikSimpan() {
    if (this.state.nama == '' || this.state.alamat == '') {
      alert('Silakan masukkan nama dan alamat');
    } else {
      if (this.state.idEdit) {
        var urlAksi = this.url + "/?op=update&id=" + this.state.idEdit;
      } else {
        var urlAksi = this.url + "/?op=create";
      }


      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "nama=" + this.state.nama + "&alamat=" + this.state.alamat
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({ nama: '' });
          this.setState({ alamat: '' });
          this.ambilListData();
        })
    }
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

    const { tampil, date, mode } = this.state;
    var tanggalsekarang = moment(date).format('DD - MM - YYYY');


    var menit = moment(date).format('mm');
    var pilih_jam_pesan = moment(date).format('HH');

    var jamtambah = moment(date).format('HH');
    var jamtotal = +pilih_jam_pesan + 2;


    var totalreal = this.props.route.params.totalreal;
    var totalrupiah = this.props.route.params.totalrupiah;

    var harisekarang = moment().format('dddd');

    const numb = this.props.route.params.totalrupiah;


    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
    console.log(rupiah)


    const rupiahCopy = numb.toString();



    var waktusekarang = moment().format('MMMM Do YYYY, h:mm:ss a');
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={{ paddingHorizontal: 10, marginTop: 10 }}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>


            <View style={{ flex: 1 }}>
            
              <View style={styles.tagihan}>
                <View>
                  <View>
                    <Text style={{ fontSize: 16, fontFamily: 'poppins-regular', color: 'black', }}>Batas Akhir Pembayaran</Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, fontFamily: 'poppins-regular', color: 'black', }}>
                      {harisekarang} {tanggalsekarang} - {jamtotal} : {menit}
                    </Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity>
                    <Text style={{ color: 'red' }}>
                      <CountDown
                        size={11}
                        until={7200}
                        onFinish={() => alert('Finished')}
                        digitStyle={{ backgroundColor: '#FFF', borderWidth: 0, borderColor: '#ff0000' }}
                        digitTxtStyle={{ color: '#1e7080', fontSize: 16, }}
                        timeLabelStyle={{ color: '#1e7080', fontWeight: 'bold' }}
                        separatorStyle={{ color: '#1e7080' }}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                      />


                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.mainbank}>
                <View style={styles.bank}>
                  <View>
                    
                  </View>

                </View>
                <View>

                  <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, color: 'black', marginBottom: 10, fontFamily: 'poppins-medium', marginTop: 15 }}>Nomor BNI Virtual Account</Text>
                    <Image source={BniIcon} style={{ width: 60, height: 55 }} />
                  </View>

                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>
                    <View style={{ marginLeft: -4 }}>
                      {
                        this.state.listData.map((val, index) => (
                          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#eeeeee', padding: 10, borderRadius: 5, width: '100%', paddingVertical: 15, marginTop: 10 }}>
                            <Text
                              style={{ color: 'black', fontWeight: 'bold', fontSize: 18, fontFamily: 'poppins-regular', marginRight: 40, paddingLeft: 10 }}>{val.no_va}
                            </Text>
                            <TouchableOpacity onPress={() => Clipboard.setString(val.no_va)}
                              style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}
                            >
                              <Icon name="clone" size={20} color="#0069c0" />
                            </TouchableOpacity>

                          </View>
                        ))
                      }
                    </View>
                  </Text>

                </View>
                <View>
                  <Text style={{ fontSize: 8 }}></Text>
                </View>
                <Text style={{ fontSize: 16, color: 'black', marginBottom: 10, fontWeight: 'bold', fontFamily: 'poppins-regular', marginTop: 10 }}>Total Pembayaran</Text>
                <View style={{ backgroundColor: '#eeeeee', padding: 10, paddingVertical: 15, borderRadius: 5, width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', fontFamily: 'poppins-regular', paddingLeft: 10, marginTop: 5 }}>
                 
                    {rupiah}
                  </Text>
                  <TouchableOpacity onPress={() => Clipboard.setString(rupiahCopy)}
                    style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}
                  >
                    <Icon name="clone" size={20} color="#0069c0" />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{
                      borderTopWidth: 1,
                      marginTop: 10,
                      borderColor: '#eaeaea',
                    }}></Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#1e7080',
                        textAlign: 'center',

                        borderColor: '#eaeaea',
                        marginTop: 20,
                      }}>
                      <Text style={{ color: '#1e7080', fontFamily: 'poppins-regular' }}
                        onPress={() => Linking.openURL('https://mutawif.co.id/api/TATACARAPEMBAYARANMUTAWIF.pdf')}>
                        Lihat Cara Pembayaran
                      </Text>
                    </Text>
                    <TouchableOpacity>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'orange',
                        textAlign: 'center',
                        fontFamily: 'poppins-regular',
                        borderColor: '#eaeaea',
                        marginTop: 20,
                      }}
                      onPress={() => Linking.openURL('https://mutawif.co.id/api/muapi/invoice.php')}>

                      Status Pesanan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: '96%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 40,
                  marginRight: 20,
                  marginLeft: 10,
                  marginBottom: 20,
                  borderRadius: 5,
                  backgroundColor: '#0d7883',
                }}
                onPress={() =>
                  this.props.navigation.navigate('Authsplash')
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  Selesai
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainbank: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    backgroundColor: 'white',
    flex: 1,
    elevation: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eeeeee',
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bank: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  tagihan: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    marginTop: 20,
    elevation: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eeeeee',
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  welcome: {
    fontSize: 20,
    color: 'black',
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'poppins-regular'
  },
  welcomebg: {
    height: 60,

  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
