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
  <View>
    <View>
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
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Nama Mutawif</Text>
        <Text style={{color: 'red'}}>Abdul Malik</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>No.HP Mutawif</Text>
        <Text style={{color: 'red'}}>0822 7426 7112150</Text>
      </View>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Deskripsi Pesanan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Ziarah Thaif</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Lokasi
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Lokasi Anda</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
      }}></View>
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        Waktu dan Jam
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>02/12/2022, 08.45</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
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
      <Text style={{marginLeft: 20, color: 'red'}}>130 SR (Rp. 493,950)</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
      }}></View>
  </View>
);

export default text;
