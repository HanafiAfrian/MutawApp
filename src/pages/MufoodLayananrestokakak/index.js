import React, { Component, useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { bakso, pecal } from '../../assets';

export default class MufoodLayananrestokakak extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.url = "https://mutawif.co.id/api/muapi/muufood_restokakak.php";
  }

  componentDidMount() {

    this.ambilListData()
  }


  async ambilListData() {
    await fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ textreal: json.data.result[0].textreal });
        this.setState({ hargarupiah: json.data.result[0].hargarupiah });
        this.setState({ harga: json.data.result[0].harga });
        this.setState({ textrp: json.data.result[0].textrp });

        this.setState({ textrealjns2: json.data.result[0].textrealjns2 });
        this.setState({ hargarupiahjns2: json.data.result[0].hargarupiahjns2 });
        this.setState({ textrpjns2: json.data.result[0].textrpjns2 });

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({ listData: json.data.result });

      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var telepon = this.props.route.params.telepon;
    var nama_lengkap = this.props.route.params.nama_lengkap;
    var email_pribadi = this.props.route.params.email_pribadi;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#222a32', }}>
        {/* <View style={{flex: 1, backgroundColor: 'grey'}}> */}
        {/* tengah */}
        <View>
          <View style={styles.topbtn}>

          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, marginTop: 20 }}>
          <Image style={styles.imgads} source={bakso} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: 'white', fontSize: 22, textAlign: 'left', fontWeight: 'bold' }}>Bakso</Text>
            <Text style={{ color: 'white', flexShrink: 1, maxWidth: '80%' }}>Bakso dengan kuah yang kaya akan citarasa </Text>
            <Text style={{ color: 'white', fontSize: 14, textAlign: 'left' }}>
              {this.state.textreal} SR (Rp.{this.state.textrp})
            </Text>
            <TouchableOpacity
              style={styles.roundButton2}
              onPress={() => this.props.navigation.navigate('MufoodOrder', { resto: 'Restoran Kakak-Bakso', harga: this.state.textreal, telepon: telepon, nama_lengkap: nama_lengkap, email_pribadi: email_pribadi, hargarupiah: this.state.hargarupiah })}>
              <Text style={styles.btntext}>Pesan</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 20, marginTop: 20 }}>
          <Image style={styles.imgads} source={pecal} />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: 'white', fontSize: 22, textAlign: 'left', fontWeight: 'bold' }}>Pecal</Text>

            <Text style={{ color: 'white', flexShrink: 1, maxWidth: '80%' }}>Pecal dengan racikan bumbu Indonesia
            </Text>
            <Text style={{ color: 'white', fontSize: 14, textAlign: 'left', }}>
              {this.state.textrealjns2} SR (Rp.{this.state.textrpjns2})
            </Text>
            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => this.props.navigation.navigate('MufoodOrder', { resto: 'Restoran Kakak-Pecal', harga: this.state.textrealjns2, telepon: telepon, nama_lengkap: nama_lengkap, email_pribadi: email_pribadi, hargarupiah: this.state.hargarupiahjns2 })}>
              <Text style={styles.btntext}>Pesan</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View
          style={{
            margin: 20,
            flexDirection: 'row',


          }}>

        </View>



        {/* </View> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topbtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },

  iconbackstyle: {
    marginTop: 30,

    zIndex: 1,
  },
  imgads: {

    backgroundColor: '#eaeaea',
    marginBottom: 20,
    height: 120,
    width: 120,
    borderRadius: 10,
  },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  container: {
    paddingBottom: 20,

    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,

    color: '#26c8f5',

    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 10,
    fontWeight: 'bold',
  },

  roundButton1: {
    width: '70%',
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 20,
    // marginLeft: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
  roundButton2: {
    width: '60%',
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 20,
    // marginLeft: 20,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },
});
