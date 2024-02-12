import React, {Component, useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';




const Tombol = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Al muchtar', value: 'Al muchtar Travel'},
    {label: 'Al Umrah', value: 'Al Umrah Travel'},
  ]);
  const [nilai, setNilai] = useState(null);
  const [buka, setBuka] = useState(false);
  const [barang, setBarang] = useState([
    {label: 'Al muchtar', value: 'Al muchtar Travel'},
    {label: 'Al Umrah', value: 'Al Umrah Travel'},
  ]);

  return (
    <ScrollView>
     

      <View
        style={{
          maxWidth: '90%',
          alignSelf: 'center',
          borderRadius: 50,
          marginTop: 20,
        }}>
        <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16, color:'gray'}}>
          Pilih Travel
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

      <View
        style={{
          maxWidth: '90%',
          alignSelf: 'center',
          borderRadius: 50,
          marginTop: 20,
        }}>
        <Text
          style={{
            marginBottom: 10,
            fontWeight: 'bold',
            fontSize: 16, color:'gray'
          }}>
          Pilih Group Keberangkatan
        </Text>
        <DropDownPicker
          open={buka}
          value={nilai}
          items={barang}
          setOpen={setBuka}
          setValue={setNilai}
          setItems={setBarang}
        />
      </View>

      <View
        style={{
          width:'100%',
		  paddingHorizontal:20,
          alignSelf: 'center',
          borderRadius: 50,
          marginTop: 20,
		  
        }}>
        <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16, color:'gray'}}>
          Input Lokasi
        </Text>
        <TextInput style={styles.inputdp} placeholder="Input Lokasi.." />
      </View>

      <TouchableOpacity style={styles.roundButton1}>
        <Text style={styles.btntext}>Konfirmasi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


class Panic extends Component { 
  render() {
     return (
         <View>
           <View style={styles.welcomebg}>
       

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 40,
            paddingRight: 20,
            marginTop: 30,
			
          }}>
          
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Panic')}>
            <Text
              style={{
                marginBottom: 10,
                fontWeight: 'bold',
                fontSize: 16,
                color: '#fff',
                // marginBottom: 40,
              }}>
             Panic
            </Text>
          </TouchableOpacity>
       

          <TouchableOpacity onPress={() => this.props.navigation.navigate('PanicOthers')}>
            <Text
              style={{
                marginBottom: 10,
                fontWeight: 'bold',
                fontSize: 16,
                color: '#fff',
                // marginBottom: 40,
              }}>
              Bantu Teman
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 4,
            borderBottomColor: 'orange',
            width: '50%',
          }}></View>
      </View>
	  <Tombol />
        </View>
    );
  }
}

export default Panic;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
     height: 65,
    backgroundColor: '#1b2333',
  },

  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
  inputdp: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 10,
	color:'black'
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
