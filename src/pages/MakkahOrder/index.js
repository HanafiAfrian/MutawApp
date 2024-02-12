import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import text from './konfirm';
import RadioButton from 'react-native-simple-radio-button-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Modal,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ModalPopup} from '../../components/ModalPopup';

import {IconZiarah} from '../../assets';

export default class MakkahOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  state = {
    thaif: false,
    museum: false,
    kiswah: false,
  };
  thaifPressed() {
    this.setState({
      thaif: true,
      museum: false,
      kiswah: false,
    });
  }
  museumPressed() {
    this.setState({
      thaif: false,
      museum: true,
      kiswah: false,
    });
  }
  kiswahPressed() {
    this.setState({
      thaif: false,
      museum: false,
      kiswah: true,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1, backgroundColor: '#222a32'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Makkah')}>
                  {/* <Image source={IconBack} style={{marginTop: 20}} /> */}
                  <Icon
                    name="chevron-left"
                    size={20}
                    color="#fff"
                    style={{marginTop: 20, marginLeft: 10}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  source={IconZiarah}
                  style={{alignSelf: 'center', width: 50, height: 50}}
                />
                <Text
                  style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                  <Text style={{color: 'white'}}>Ziarah Kota Makkah</Text>
                </Text>
              </View>
              <View>
                <Text>/</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            {/* form */}
            <Text style={{fontWeight: 'bold', marginLeft: 18}}>
              Pilih Tujuan :
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 30,
                margin: 10,
                marginLeft: 20,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <RadioButton
                  color={'#0d7883'}
                  selected={this.state.thaif}
                  onPress={() => this.thaifPressed()}
                />
                <Text style={{marginTop: 2, marginLeft: 2}}>Thaif</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 20,
                }}>
                <RadioButton
                  color={'#0d7883'}
                  selected={this.state.museum}
                  onPress={() => this.museumPressed()}
                />
                <Text style={{marginTop: 2, marginLeft: 2}}>Museum Ka’bah</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 20,
                }}>
                <RadioButton
                  color={'#0d7883'}
                  selected={this.state.kiswah}
                  onPress={() => this.kiswahPressed()}
                />
                <Text style={{marginTop: 2, marginLeft: 2}}>Kiswah</Text>
              </View>
            </View>
            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Pilih Tanggal</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="calendar"
                    size={16}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="12/02/2022"
                    onChangeText={searchString => {
                      this.setState({searchString});
                    }}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View>
                <View>
                  <Text style={styles.subformtext}>Waktu</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="clock-o"
                    size={16}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="08:45"
                    onChangeText={searchString => {
                      this.setState({searchString});
                    }}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            {/* end form */}
            <View style={styles.searchSection}>
              <View>
                <View>
                  <Text style={styles.subformtext}>Lokasi pertemuan</Text>
                </View>
                <View style={styles.subform}>
                  <Icon
                    style={styles.searchIcon}
                    name="location-arrow"
                    size={16}
                    color="grey"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Lokasi pertemuan"
                    onChangeText={searchString => {
                      this.setState({searchString});
                    }}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
              <View></View>
            </View>
            <View style={{marginTop: 40, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                Isi Form Berikut :
              </Text>
              <TextInput
                style={styles.inputform}
                placeholder="Nama Mutawif"
                onChangeText={searchString => {
                  this.setState({searchString});
                }}
                underlineColorAndroid="transparent"
              />
              <TextInput
                style={styles.inputform}
                placeholder="No. Hp Mutawif"
                onChangeText={searchString => {
                  this.setState({searchString});
                }}
                underlineColorAndroid="transparent"
              />
            </View>
            <TouchableOpacity
              onPress={() => this.setState({show: true})}
              style={styles.roundButton1}>
              <Text style={styles.btntext}>Lanjutkan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.show}>
            <SafeAreaView>
              <ScrollView>
                <View style={styles.modalContainer}>
                  <View style={styles.modalView}>
                    <Text>{text}</Text>

                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 20,
                        marginBottom: 60,
                      }}>
                      <TouchableOpacity
                        onPress={() => this.setState({show: false})}
                        style={{
                          width: '40%',
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                          margin: 20,
                          borderRadius: 5,
                          backgroundColor: '#0d7883',
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          Batal
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          width: '40%',
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 10,
                          margin: 20,
                          borderRadius: 5,
                          backgroundColor: '#0d7883',
                        }}
                        onPress={() =>
                          this.props.navigation.navigate('TotalTagihan')
                        }>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}>
                          Konfirmasi
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },

  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '96%',
    // marginLeft: 10,
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },

  form: {
    display: 'flex',
    flexDirection: 'row',
  },
  subformtext: {
    marginLeft: 8,
    color: 'black',
  },
  subform: {
    marginTop: -10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  searchIcon: {
    marginLeft: 10,
    marginTop: 15,
  },

  // formpesanan: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },

  input: {
    borderBottomWidth: 1,

    width: 140,
    borderColor: '#eaeaea',
    marginBottom: 10,
  },

  inputform: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    borderColor: '#eaeaea',
    // marginTop: 10,
    marginBottom: 10,
  },

  subtext: {
    fontSize: 10,
    flexWrap: 'wrap',
  },

  iconbackstyle: {
    // marginLeft: 10,
    // marginTop: 30,
    width: 20,
  },
  imgads: {
    marginTop: 20,
    backgroundColor: '#eaeaea',
    marginBottom: 20,
    borderRadius: 10,
    height: 200,
    width: 300,
    justifyContent: 'center',
  },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  container: {
    paddingBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },

  welcome: {
    fontSize: 20,

    // color: '#26c8f5',
    color: 'black',
    marginBottom: 20,
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 10,
    fontWeight: 'bold',
  },

  roundButton1: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },
});
