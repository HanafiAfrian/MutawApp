import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Baju} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

export default class InfoSatu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
      listData: [],
	
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/iklan.php';
  }
  componentDidMount() {
    this.ambilListData();

  }

  async ambilListData() {
    var id = this.props.route.params.id;
		
    await fetch(this.url + '/?op=ambilgambar&id=' + id)
      .then(response => response.json())
      .then(json => {
		  	   this.setState({gambar:json.data.result[0].gambar});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  
    
 

	
	
	
  render() {
	  
	     var id =	this.props.route.params.id; 
    return (
      <ScrollView style={{backgroundColor:'#fff'}}>

        <View>
           <Image source={{uri:'https://mutawif.co.id/api/muapi/images/'+this.state.gambar}}  style={{
    flex: 1,
    aspectRatio: 0.8, 
    resizeMode: 'contain',
 
    
    }}  />
    
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	imgStyles: {
	width:'100%',

	
	},
});