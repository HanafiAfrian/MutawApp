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
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Nama PIC Travel</Text>
        <Text style={{color: 'red'}}>Abdul Malik</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>No.HP PIC Travel</Text>
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
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Hotel Makkah</Text>
        <Text style={{color: 'red'}}>Nama Hotel</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Lama Menginap</Text>
        <Text style={{color: 'red'}}>3 Hari</Text>
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
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Hotel Madinah</Text>
        <Text style={{color: 'red'}}>Nama Hotel</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Lama Menginap</Text>
        <Text style={{color: 'red'}}>3 Hari</Text>
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
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Hotel Jeddah</Text>
        <Text style={{color: 'red'}}>Nama Hotel</Text>
      </View>
      <View style={{marginLeft: 20, marginRight: 20}}></View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Lama Menginap</Text>
        <Text style={{color: 'red'}}>1 Hari</Text>
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
        Dekskripsi Pesanan
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>Mutawif 1 Org (1 Hari)</Text>
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
        Tanggal & Waktu Mulai
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>12/02/2022, 06.30 </Text>
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
        Tanggal & Waktu Selesai
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>13/02/2022, 06.30 </Text>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          marginLeft: 20,
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
        No. Bus
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>BK 081 DC</Text>
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
        No.Hp Bus
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>0822-1133-1144</Text>
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
        Lokasi bertemu
      </Text>
      <Text style={{marginLeft: 20, color: 'red'}}>
        Dar Al Eiman Royal Hotel
      </Text>
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
      <Text style={{marginLeft: 20, color: 'red'}}>200 SR (Rp. 760,843)</Text>
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
