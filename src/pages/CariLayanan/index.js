import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ProfilePhoto} from '../../assets';

export default class CariLayanan extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#eaeaea'}}>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                // color: '#0d7883',
                alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: 20,
                marginBottom: 20,
                fontSize: 16,
                fontWeight: 'bold',

                padding: 10,
              }}>
              Pilih Mutawif
            </Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TotalTagihan')}>
              <Text
                style={{
                  color: '#0d7883',
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginTop: 20,
                  marginBottom: 20,
                  fontSize: 16,
                  fontWeight: 'bold',

                  padding: 10,
                }}>
                Batal Cari
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 20,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
            }}>
            <Icon
              name="exclamation-triangle"
              size={20}
              color="orange"
              style={{
                padding: 7,
                marginLeft: -10,
              }}
            />
            <Text style={{marginLeft: 10}}>
              Anda dapat menerima atau menolak penawaran
            </Text>
          </View>
        </View>

        {/* 3 */}
        <View>
          <View
            style={{
              width: 340,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={ProfilePhoto}
                style={{
                  width: 70,
                  marginBottom: 15,
                  marginTop: 15,
                  marginLeft: 15,
                  height: 70,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  marginTop: 25,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Bintang Kejora
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginTop: -15,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Icon
                  name="star"
                  size={16}
                  color="orange"
                  style={{
                    marginLeft: 25,
                  }}
                />
                <Text style={{fontSize: 14}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: -20,
                    fontSize: 16,
                    marginRight: 20,
                  }}>
                  Lulusan Al-Azhar Kairo
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // marginTop: -15,
              }}>
              <View>
                <Text style={{fontSize: 14, marginRight: 20, marginTop: -20}}>
                  Kewarganegaraan : Indonesia
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DetailBayar')}
                style={styles.roundButton1}>
                <Text style={{color: 'white'}}>Pilih</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 3 */}
        <View>
          <View
            style={{
              width: 340,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={ProfilePhoto}
                style={{
                  width: 70,
                  marginBottom: 15,
                  marginTop: 15,
                  marginLeft: 15,
                  height: 70,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  marginTop: 25,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Rahmatsyah
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginTop: -15,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Icon
                  name="star"
                  size={16}
                  color="orange"
                  style={{
                    marginLeft: 25,
                  }}
                />
                <Text style={{fontSize: 14}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: -20,
                    fontSize: 16,
                    marginRight: 20,
                  }}>
                  Lulusan Al-Azhar Kairo
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // marginTop: -15,
              }}>
              <View>
                <Text style={{fontSize: 14, marginRight: 20, marginTop: -20}}>
                  Kewarganegaraan : Indonesia
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DetailBayarCod')}
                style={styles.roundButton1}>
                <Text style={{color: 'white'}}>Pilih</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 2 */}
        <View>
          <View
            style={{
              width: 340,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={ProfilePhoto}
                style={{
                  width: 70,
                  marginBottom: 15,
                  marginTop: 15,
                  marginLeft: 15,
                  height: 70,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  marginTop: 25,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Muhammad Yusuf
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginTop: -15,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Icon
                  name="star"
                  size={16}
                  color="orange"
                  style={{
                    marginLeft: 25,
                  }}
                />
                <Text style={{fontSize: 14}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: -20,
                    fontSize: 16,
                    marginRight: 20,
                  }}>
                  Lulusan Al-Azhar Kairo
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // marginTop: -15,
              }}>
              <View>
                <Text style={{fontSize: 14, marginRight: 20, marginTop: -20}}>
                  Kewarganegaraan : Indonesia
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DetailBayarCc')}
                style={styles.roundButton1}>
                <Text style={{color: 'white'}}>Pilih</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
});
