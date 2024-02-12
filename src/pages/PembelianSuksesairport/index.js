import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BniIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


	
	const PembelianSuksesairport = ({ route, navigation }) => {
   const { totalreal } = route.params;
  const { totalrupiah } = route.params;
   const { pilih_tanggal_pesan } = route.params;
  const { pilih_jam_pesan } = route.params;
  
  	
				
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('Formlogin')}>
            <Icon
              name="chevron-left"
              size={20}
              color="white"
              //   style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>
            Airport<Text style={{color: 'orange'}}> Handling</Text>
          </Text>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.tagihan}>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: 30,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Pembelian Berhasil
            </Text>

            <View style={styles.textsukses}>
              <Text style={{fontSize: 14}}>Dibeli</Text>
              <Text style={{fontWeight: 'bold'}}>{JSON.stringify(pilih_tanggal_pesan)}  , {JSON.stringify(pilih_jam_pesan)} </Text>
            </View>
            <View style={styles.textsukses}>
              <Text style={{fontSize: 14}}>Metode Pembayaran</Text>
              <Text style={{fontWeight: 'bold'}}>BNI Virtual Account</Text>
            </View>
            <View style={styles.textsukses}>
              <Text style={{fontSize: 14}}>Rincian Harga PembelianSuksesairport</Text>
              <Text style={{fontWeight: 'bold'}}>{JSON.stringify(totalreal)}  SR (Rp. {JSON.stringify(totalrupiah)})</Text>
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
                    Download Invoice
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="black"
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
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
                    }}>
                    Perlu Bantuan ?
                  </Text>
                </View>
              </View>

              <View>
                <TouchableOpacity>
                  <Icon
                    name="chevron-right"
                    size={20}
                    color="black"
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  
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
    margin: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,
    elevation: 2,
    borderRadius: 15,
  },
  bank: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    // marginBottom: 10,
    paddingTop: 10,
  },

  tagihan: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,

    elevation: 2,
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
export default  PembelianSuksesairport ;