import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, Linking} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BniIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

export default class DetailBayarCod extends Component {
  render() {
	  var totalreal =	this.props.route.params.totalreal; 
		var totalrupiah =	this.props.route.params.totalrupiah; 
		const numb = this.props.route.params.totalrupiah; 
const format = numb.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('')
	console.log(rupiah) 
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: 'white'}}>
           
            <View style={{flex: 1}}>
              <View style={styles.tagihan}>
                <View>
                
                  <View>
                   
                  </View>
                </View>

             
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
						   color :'gray'
                        }}>
                        Cash On Delivery
                      </Text>
                    </View>
                  </View>

                  <View>
                    <TouchableOpacity>
                      {/* <Image source={BniIcon} /> */}
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text style={{fontSize: 14, fontWeight: 'bold', color :'gray'}}>
                    Pesanan Anda Sedang Menunggu Konfirmasi
                  </Text>
                  <Text style={{fontSize: 14,  color :'gray'}}>
                    Cek status pesanan anda dari tombol lihat status pemesanan
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 8,  color :'gray'}}></Text>
                </View>
                <View>
                  <Text style={{fontSize: 14,  color :'gray'}}>Total Pembayaran</Text>
                  <Text style={{fontSize: 14, color: 'red'}}>
                    {totalreal} SR ( {rupiah} )
                  </Text>
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
                        color: 'orange',
                        textAlign: 'center',
                        borderColor: '#eaeaea',
                      }}
					  onPress={() => Linking.openURL('https://mutawif.co.id/api/muapi/invoice/Invoice.php')}>
    
                      Lihat Status Pemesanan
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 100, backgroundColor: 'white'}}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
                marginRight: 20,
                marginLeft: 20,

                borderRadius: 5,
                backgroundColor: '#0d7883',
              }}
              onPress={() => this.props.navigation.navigate('Authsplash')}>
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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

  tagihan: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 15,
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
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
