import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BniIcon} from '../../assets';


	const DetailBayarairport = ({ route, navigation }) => {
   const { totalreal } = route.params;
  const { totalrupiah } = route.params;
   const { pilih_tanggal_pesan } = route.params;
  const { pilih_jam_pesan } = route.params;
  
    return (
      <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('Formlogin')}>
            <Image source={IconBack} />
          </TouchableOpacity>
          <Text style={styles.welcome}>
            Detail<Text style={{color: 'orange'}}> Bayar</Text>
          </Text>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.tagihan}>
            <View>
              <View>
                <Text style={{fontSize: 14}}>Batas Akhir  DetailBayarairport Pembayaran</Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Selasa, 29 Nov 2021 16:41 WIB
                </Text>
              </View>
            </View>

            <View>
              <TouchableOpacity>
                <Text style={{color: 'red', marginTop: 20}}>23:54:03</Text>
              </TouchableOpacity>
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
                    }}>
                    BNI Virtual Account
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity>
                  <Image source={BniIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 14}}>Nomor Virtual Account</Text>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>8266081288</Text>
            </View>
            <View>
              <Text style={{fontSize: 8}}></Text>
            </View>
            <View>
              <Text style={{fontSize: 14}}>Total Pembayaran</Text>
              <Text style={{fontSize: 14, color: 'red'}}>
               {JSON.stringify(totalreal)} SR (Rp. {JSON.stringify(totalrupiah)} )
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
                    fontSize: 14,
                    color: '#1e7080',
                    textAlign: 'center',
                    //   marginTop: 20,

                    borderColor: '#eaeaea',
                  }}>
                  Lihat Cara Pembayaran
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#1E7080',
              height: 60,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 1.62,

              elevation: 4,
            }}
            onPress={() => navigation.navigate('PembelianSuksesairport',{
			totalreal: totalreal, 
			totalrupiah: totalrupiah,
	pilih_tanggal_pesan: pilih_tanggal_pesan, 
			pilih_jam_pesan: pilih_jam_pesan 			
			})}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 15,
              }}>
              Konfirmasi Pembayaran
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  
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
export default  DetailBayarairport ;