import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {BannerMadinah} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class MadinahLayanan extends Component {
  render() {
	  	  	  var telepon =	this.props.route.params.telepon; 
	  var nama_lengkap =	this.props.route.params.nama_lengkap; 
	  var email_pribadi =	this.props.route.params.email_pribadi; 
	     var hargarupiah =	this.props.route.params.hargarupiah; 
		  	  var hargarupiahjns2 =	this.props.route.params.hargarupiahjns2; 
			  	  var hargarupiahjns3 =	this.props.route.params.hargarupiahjns3; 
    return (
      <ScrollView style={{backgroundColor: '#222a32'}}>
        <View>
          <View style={styles.topbtn}>
            <TouchableOpacity
              style={styles.iconbackstyle}
                   onPress={() => this.props.navigation.navigate('Madinah',{telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi:email_pribadi,hargarupiah:hargarupiah,  hargarupiahjns2:hargarupiahjns2 ,hargarupiahjns3:hargarupiahjns3  } )}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconbackstyle}>
              <Icon name="info-circle" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image style={styles.imgads} source={BannerMadinah} />
        </View>

        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {' '}
          Pilih Layanan{' '}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            justifyContent: 'center',

            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Jabalmagnet', {jenis:'Jabalmagnet', telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi ,hargarupiah:hargarupiah,  hargarupiahjns2:hargarupiahjns2 ,hargarupiahjns3:hargarupiahjns3 })}>
            <Text style={styles.textbtn}>
              Jabal Magnet + Percetakan Al-Quran
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Alula', {jenis:'Alula', telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi,hargarupiah:hargarupiah,  hargarupiahjns2:hargarupiahjns2 ,hargarupiahjns3:hargarupiahjns3  })}>
            <Text style={styles.textbtn}>Al Ula + Khaibar + Madain Shaleh</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Badar', {jenis:'Badar', telepon:telepon, nama_lengkap:nama_lengkap, email_pribadi: email_pribadi ,hargarupiah:hargarupiah,  hargarupiahjns2:hargarupiahjns2 ,hargarupiahjns3:hargarupiahjns3 })}>
            <Text style={styles.textbtn}>Badar + Jabal Malaikah</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: -60,
    backgroundColor: '#eaeaea',
    marginBottom: 20,
    height: 300,
    width: '100%',
  },

  btn: {
    backgroundColor: '#0d7883',
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    width: '90%',
    borderRadius: 5,
  },
  textbtn: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
