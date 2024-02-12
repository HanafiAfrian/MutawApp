import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class BantuanFaq extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.judul}> Apa itu mutawif? </Text>
          <Text style={styles.paragraf}>
            Mutawif adalah platform digitial satu satunya di Indonesia yang
            menyediakan pelayanan yang memudahkan bagi jamaah umroh dan haji
            dengan beragam fasilitas yang bisa dipilih baik
            untukperusahaan/travel atau jamaah itu sendiri.
          </Text>
          <Text style={styles.sub1}> Apa saja kelebihan mutawif? </Text>

          <View>
               <Text style={{fontSize: 14, color: "gray"}}>1 </Text>
            <Text style={styles.textisi}>
              Mutawif adalah platform digital satu-satunya di Indonesia yang
              menyediakan pelayanan yang memudahkan bagi jamaah umroh
            </Text>
          </View>
		  
		  
          <View>
             <Text style={{fontSize: 14,  color: "gray"}}>2. </Text>
            <Text style={styles.textisi}>
              Kami mempunyai tenaga kerja terpercaya yang berintegritas tinggi,
              professional,berpengalaman serta bersih dan rapi
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 14,  color: "gray"}}>3. </Text>
            <Text style={styles.textisi}>
              Mutawif berdiri dibawah naungan PT. Pelopor Mutawif Indonesia
              memiliki legalitas dan izin yang resmi serta telah terakreditasi
              di Indonesia maupun arab saudi.
            </Text>
          </View>

          {/* qa */}
          <View>
            <Text style={styles.quest}>
              Bagaimana cara memesan layanan yang ada?
            </Text>
            <Text style={{fontSize: 14 , color: "gray"}}>
              Untuk memesan layanan yang ada, anda dapat mendownload aplikasi
              kami yang tersedia di playstore dan appstore, dan memiih layanan
              sesuai kebutuhan anda
            </Text>
          </View>
          <View>
            <Text style={styles.quest}>
              Apa saja metode pembayaran Mutawif?
            </Text>
           <Text style={{fontSize: 14 , color: "gray"}}>
              Pengguna dapat menggunakan beragam metode pembayaran seperti bank
              transfer, e wallet dan cash
            </Text>
          </View>
          <View>
            <Text style={styles.quest}>
              Apakah saya dapat menentukan tanggal dan lokasi pemesanan sesuai
              keinginan saya?
            </Text>
           <Text style={{fontSize: 14 , color: "gray"}}>
              Tentu Bisa. Anda bisa menentukan jadwal dan lokasi pemesanan
              sesuai kebutuhan Anda pada saat pengisian form pemesanan.
            </Text>
          </View>
          <View>
            <Text style={styles.quest}>
              Apa yang saya lakukan jika mendapat kendala?
            </Text>
           <Text style={{fontSize: 14 , color: "gray"}}>
              Jika terdapat kendala Anda dapat menghubungi kami ke nomor kontak
              service yang tersedia
            </Text>
          </View>
        </View>

        {/* end qa */}

        <Text
          style={{
            color: 'white',
            paddingTop: 20,
            marginTop: 10,
            paddingLeft: 20,
            fontSize: 18,
            fontWeight: 'bold',
            backgroundColor: '#222a32',
          }}>
          Hubungi Kami
        </Text>

        <View
          style={{
            backgroundColor: '#222a32',
            paddingTop: 10,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <Icon
                name="mobile-phone"
                size={20}
                color="orange"
                style={{
                  marginLeft: 20,
                  marginRight: 10,
                }}
              />
              <Text style={{color: 'white'}}>+62 811-6552-800</Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <Icon
                name="phone"
                size={20}
                color="orange"
                style={{
                  marginLeft: 20,
                  marginRight: 10,
                }}
              />

              <Text style={{color: 'white'}}>021 22831406</Text>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <Icon
                name="envelope"
                size={20}
                color="orange"
                style={{
                  marginLeft: 20,
                  marginRight: 10,
                }}
              />

              <Text style={{color: 'white'}}>info@mutawif.co.id</Text>
            </View>
          </View>

          <View>
            <Image
              source={{uri: 'http://mutawif.co.id/images/logotag.png'}}
              style={styles.logo}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  judul: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
	color: "gray"
  },
   paragraf: {
    fontSize: 14,
    
	 align: 'center',
    marginTop: 20,
    marginBottom: 10,
	color: "gray"
  },
  textisi: {
	   marginTop: -19,
	    marginLeft: 20,
    textAlign: 'justify',
	color: "gray"
  },
  sub1: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 21,
	 color: "gray"
  },
  poin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  quest: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
	color: "gray"
  },

  container: {
    marginLeft: 20,
    marginRight: 20,
  },
});
