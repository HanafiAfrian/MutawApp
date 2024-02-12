import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class CariLayanan extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TotalTagihan')}>
              <Text
                style={{
                  color: 'green',
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginTop: 20,
                  marginBottom: 20,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Batalkan
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#eaeaea',
              padding: 20,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Icon name="exclamation" size={20} color="grey" />
            <Text>Anda dapat menerima atau menolak penawaran</Text>
          </View>

          <View
            style={{
              width: 320,
              backgroundColor: '#eaeaea',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Icon
                name="user-circle"
                size={50}
                color="grey"
                style={{
                  margin: 20,
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
                Doni Ando
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: -15,
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
                <Text style={{marginLeft: 5, fontSize: 14}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{marginLeft: 15, fontSize: 16, marginRight: 10}}>
                  Lulusan Al-Azhar Kairo
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.roundButtonyellow}>
                <Text style={{color: 'white'}}>Tolak</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('PembelianSukses')
                }
                style={styles.roundButton1}>
                <Text style={{color: 'white'}}>Pilih</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              width: 320,
              backgroundColor: '#eaeaea',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Icon
                name="user-circle"
                size={50}
                color="grey"
                style={{
                  margin: 20,
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
                Azlan Rinaldi
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: -15,
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
                <Text style={{marginLeft: 5, fontSize: 14}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{marginLeft: 15, fontSize: 16, marginRight: 10}}>
                  Lulusan Al-Azhar Kairo
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.roundButtonyellow}>
                <Text style={{color: 'white'}}>Tolak</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('PembelianSukses')
                }
                style={styles.roundButton1}>
                <Text style={{color: 'white'}}>Pilih</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              width: 320,
              backgroundColor: '#eaeaea',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Icon
                name="user-circle"
                size={50}
                color="grey"
                style={{
                  margin: 20,
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
                Muhammad Salim
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: -15,
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
                <Text style={{marginLeft: 5, fontSize: 14}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{marginLeft: 15, fontSize: 16, marginRight: 10}}>
                  Lulusan Al-Azhar Kairo
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.roundButtonyellow}>
                <Text style={{color: 'white'}}>Tolak</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('PembelianSukses')
                }
                style={styles.roundButton1}>
                <Text style={{color: 'white'}}>Pilih</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              width: 320,
              backgroundColor: '#eaeaea',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Icon
                name="user-circle"
                size={50}
                color="grey"
                style={{
                  margin: 20,
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
                Muhammad Rido
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: -15,
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
                <Text style={{marginLeft: 5, fontSize: 14}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{marginLeft: 15, fontSize: 16, marginRight: 10}}>
                  Lulusan Al-Azhar Kairo
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity style={styles.roundButtonyellow}>
                <Text style={{color: 'white'}}>Tolak</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('PembelianSukses')
                }
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
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
  roundButtonyellow: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});
