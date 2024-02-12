import React, {Component} from 'react';
import CustomButton from './CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  ProfilePhoto,
  IconUsermenu,
  IconNext,
  IconVoc,
  IconPromo,
  IconPembayaran,
  IconBahasa,
  IconKeluar,
  IconFavorit,
  IconBantuan,
} from '../../assets';
import {IconAkun, Logouser, Logokey} from '../../assets';
import {IconBack} from '../../assets';
export default class Authotp extends Component {
	  constructor(props) {
    super(props);
    this.state = {
     
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/ambilakun.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var telepon = this.props.route.params.name;
	var name = this.props.route.params.name;
	
    await fetch(this.url + '/?op=pilihprofil&telepon=' + telepon)
      .then(response => response.json())
      .then(json => {
		    this.setState({ nama_lengkap: json.data.result[0].nama_lengkap });
				    this.setState({ kategori: json.data.result[0].kategori });
					
		 this.setState({kat: json.data.result[0].kat});
		this.setState({klot: json.data.result[0].klot});
		 this.setState({ lokasi: json.data.result[0].lokasi });
                this.setState({ nama: json.data.result[0].nama })
                this.setState({ telepon: json.data.result[0].telepon })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		
		 this.props.navigation.replace('Auth');
                try {
                  var user = {
                    Name: this.state.nama_lengkap,
                    Age: '',
                    Email: this.state.nama,
					 Kategori: this.state.kategori,
					 Kat: this.state.kat,
					 Kloter: this.state.klot,
					  Lokasi: this.state.lokasi,
                  };
                  AsyncStorage.setItem('UserData', JSON.stringify(user));
                  navigation.replace('Auth');
                } catch (error) {
                  console.log(error);
                }
		
		
      })
      .catch(error => {
        console.log(error);
      });
  }
	
  render() {
	 
	    var name =	this.props.route.params.name; 
	 	
    return (
      
				<Text>
		
                  
			
			
       </Text>
    );
  }
}
