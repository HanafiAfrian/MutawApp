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
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Nama Mutawif</Text>
        <Text style={{color: 'red'}}>Abdul Malik</Text>
      </View>

      <View style={{marginLeft: 60}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>No. HP</Text>
        <Text style={{color: 'red'}}>0822 7426 7112</Text>
      </View>
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
        <Text style={{fontWeight: 'bold', fontSize: 16}}>No. Bus</Text>
        <Text style={{color: 'red'}}>YB150</Text>
      </View>

      <View style={{marginLeft: 60}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>No.Hp Bus</Text>
        <Text style={{color: 'red'}}>0822 7426 7112</Text>
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
        Jenis & Kode Pesawat
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>AV Airlines AWQ737</Text>
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
        Quantity/Jumlah Jemaah
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>59 Orang</Text>
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
        Jenis Muassasah
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Muassasah</Text>
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
        Lokasi
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
        150 SR (Rp. 570,000)
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
