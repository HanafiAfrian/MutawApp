import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BniIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class PembelianSukses extends Component {
  render() {
   var jumlah_order =	this.props.route.params.jumlah_order; 
	   var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		const numb = this.props.route.params.totalrupiah; 
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('Formlogin')}>
            <Icon name="chevron-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.welcome}>
    
          </Text>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.tagihan}>
            <Icon
              name="check-circle"
              size={50}
              color="green"
              style={{alignSelf: 'center', marginTop: -40}}
            />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: 30,
                fontWeight: 'bold',
                fontSize: 20,
				 color :'gray'
              }}>
              Pembelian Berhasil
            </Text>

            <View style={styles.textsukses}>

            </View>
            <View style={styles.textsukses}>
              <Text style={{fontSize: 14 , color :'gray'}}>Metode Pembayaran</Text>
              <Text style={{fontWeight: 'bold',  color :'gray'}}>Credit Card</Text>
            </View>
            <View style={styles.textsukses}>
              <Text style={{fontSize: 14,  color :'gray'}}>Total Harga</Text>
              <Text style={{fontWeight: 'bold', color :'red'}}>{totalreal} SR ( {rupiah} </Text>
            </View>
          </View>

          <View style={styles.mainbank}>
            <TouchableOpacity>
              <View style={styles.bank}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 10,
                      fontSize: 16,
					   color :'gray'
                    }}>
                    Download Invoice
                  </Text>
                </View>

                <View>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="grey"
                    style={{marginRight: 10}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.mainbank}>
            <TouchableOpacity>
              <View style={styles.bank}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 10,
                      fontSize: 16,
					   color :'gray'
                    }}>
                    Perlu Bantuan ?
                  </Text>
                </View>

                <View>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="grey"
                    style={{marginRight: 10}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.mainbank1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Authsplash')}>
              <View style={styles.bank1}>
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 10,
                      fontSize: 16,
                      textAlign: 'center',
					   color :'gray'
                    }}>
                    Selesai
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textsukses: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btnbayar: {
    backgroundColor: '#1e7080',
    height: 60,

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  mainbank: {
    // margin: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  bank: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    marginBottom: 10,
  },
  mainbank1: {
    margin: 10,
    marginTop: 40,
    padding: 10,
    elevation: 1,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
  bank1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderBottomColor: '#e5e5e5',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },

  tagihan: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,

    elevation: 2,
    borderRadius: 15,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    marginBottom: 20,
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
