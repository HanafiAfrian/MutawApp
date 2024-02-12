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
          marginLeft: 80,
          marginRight: 40,
          textAlign: 'center',
        }}>
        Detail Pemesanan
      </Text>
    </View>

    <View
      style={{
        marginTop: 40,
      }}>
      <View style={{marginLeft: 20, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Deskripsi</Text>
        <Text style={{color: 'red'}}>IDR to SR</Text>
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
          fontSize: 16,
        }}>
        Jenis Pecahan :
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>5 SR</Text>
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
          fontSize: 16,
        }}>
        Quantity (Lembar)
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>100</Text>
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
          fontSize: 16,
        }}>
        Lokasi Pertemuan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Bandara IATA (Jeddah)</Text>
    </View>
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 20,
      }}></View>
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Tanggal</Text>
        <Text style={{color: 'red'}}>12/02/2022</Text>
      </View>

      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Jam</Text>
        <Text style={{color: 'red'}}>08.45</Text>
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
          fontSize: 16,
        }}>
        Total Bayar
      </Text>
      <Text style={{marginLeft: 20, color: 'red', fontWeight: 'bold'}}>
        Rp. 4,000,000
      </Text>
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
