import React, {Component, useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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

const text = (
  <View style={{width: 350}}>
    <View style={{alignContent: 'center'}}>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View>
      <Text
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Lokasi Pengantaran
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>
        {' '}
        Dar Al Eiman Royal Hotel
      </Text>
    </View>

    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
        marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Nama Obat
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Nama Obat</Text>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginLeft: 20,
          marginRight: 20,
        }}></View>
    </View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Quantity
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>1 Tab</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
        marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Input Gejala
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Input Gejala</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
        marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Perkiraan Harga
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>32 SR (Rp. 133,956)</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
        marginRight: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>35 SR (Rp. 133,956)</Text>
    </View>

    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
        marginRight: 20,
      }}></View>
  </View>
);

export default text;