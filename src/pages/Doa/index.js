import React, {Component} from 'react';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';
import Adzan from './../../assets/icons/icnadzan.png';
import Doa2 from './../../assets/icons/doa.png';
import quran from './../../assets/icons/quran.png';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Buku} from '../../assets';

export default class Doa extends Component {
  render() {
    return (
	<SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
       <ScrollView>
        <View>
          {/* <Image style={styles.buku} source={Buku} />
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => this.props.navigation.navigate('DoaDetail')}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              LIHAT DOA
            </Text>
          </TouchableOpacity> */}
      
<Image style={{alignSelf:'center',marginVertical:20}} source={quran} /> 

{/* new */}

<View style={{marginBottom:20}}>
<Text style={{fontWeight:'bold',fontSize:16, textAlign:'center',color:'black'}}>DO'A DAN DZIKIR</Text>
<Text style={{fontWeight:'bold',fontSize:16, textAlign:'center',color:'orange'}}>MANASIK HAJI DAN UMRAH</Text>
</View>

<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between'}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>Doa Dalam Perjalanan Keberangkatan</Text>
     <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetail')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
    <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
     </TouchableOpacity>
  </View>
</View>

{/* doa row2 */}

{/* doa row 3 */}
<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>Do’a Thawaf</Text>
    <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetaildua')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}
  {/* doa row 3 */}
  <View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>Do’a Sa'i</Text>
    <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetailtiga')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}

{/* doa row2 */}

{/* doa row 3 */}
<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>Niat Haji, Doa Berangkat ke Arafah, Dan Doa Wukuf</Text>
    <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetailempat')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}
{/* doa row 3 */}
<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>Doa Muzdalifah dan Mina</Text>
    <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetaillima')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}
{/* doa row 3 */}
<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5 }}>Doa Thawaf Ifadhah, Sa'i, dan Thawaf Wada'</Text>
    <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetailenam')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}
{/* doa row 3 */}
<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>Do'a Ziarah di Madinah</Text>
    <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetailtujuh')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}
{/* doa row 3 */}
<View >
  <View style={{ backgroundColor: '#ffca28', padding: 10, borderRadius: 10, flexDirection:'row',marginHorizontal:10,justifyContent:'space-between', marginTop:10}}>
    <Text style={{ marginTop: 10, fontSize: 18,flexShrink:1,marginRight:5  }}>Do'a Tiba di Rumah/ Kampung Halaman</Text>
    <TouchableOpacity
       onPress={() => this.props.navigation.navigate('DoaDetaildelapan')}>
    <View style={{ backgroundColor: '#c79a00', borderRadius: 5, alignContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Lihat Doa</Text>
    </View>
    </TouchableOpacity>
  </View>
</View>
{/* doa row 3 */}




{/* new */}



</View>
<View style={{height:100, backgroundColor:'white'}}></View>
</ScrollView>
	  
	  
	  <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 53,
                elevation: 1,
                borderRadius: 0,
                zIndex: 0,
                //marginTop: -65,
                position :'absolute',
				bottom:0,
				width:'100%',
				backgroundColor: 'white',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Beranda')}>
                  <Image
                  source={Beranda}
                    style={{
                      width: 30,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color:'gray'}}>Beranda</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Adzan')}>
                  <Image
                    source={Adzan}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
					 onPress={() => this.props.navigation.navigate('Adzan')}
                  />
                  <Text style={{marginBottom: 20,color:'gray'}}>Adzan</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  	   <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('Notifikasi')}>
                  <Image
                    source={Notifikasi}
                    style={{
                      width: 23,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20,color:'gray'}}>Notifikasi</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  
			  
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
		
		
		
                <TouchableOpacity
                  onPress={() =>this.props.navigation.replace('Doa')}>
                  <Image
                    source={Doa2}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
		
                    }}
                  />
				
                  <Text style={{marginBottom: 20,color:'orange'}}>Doa</Text>
                </TouchableOpacity>
              </View>
			  
			  
		
            </View>
	
	    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buku: {
    width: '96%',
    height: 480,
    alignSelf: 'center',
    
  },

  roundButton1: {
    marginBottom: 20,
    width: '96%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    // borderRadius: 5,
    backgroundColor: '#e6b86a',
    borderRadius: 5,
    alignSelf: 'center',
  },
});
