import React, {Component} from 'react';
import { style } from './Style'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ProfilePhoto, ProfileWanita} from '../../assets';

export default class CariMutawifah extends Component {
	
	  constructor(props) {
    super(props);
    this.state = {
        nama:'',
        alamat:'',
        listData:[],
        idEdit:null,
    };
 this.url = "https://mutawif.co.id/api/muapi/mitra_massagepr_trcc.php";
  }
  	componentDidMount(){
      this.ambilListData()
  }
  componentDidMount(){
      this.ambilListData()
  }
  async ambilListData(){
    await fetch(this.url)
    .then((response)=>response.json())
    .then((json)=>{
        console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
        this.setState({listData:json.data.result});
    })
    .catch((error)=>{
        console.log(error);
    })
  }
klikSimpan(){
	    var metode =	this.props.route.params.metode; 
  var jumlah_order =	this.props.route.params.jumlah_order; 
  
    var totalreal =	this.props.route.params.totalreal; 
	  var totalrupiah =	this.props.route.params.totalrupiah; 
	var nama = this.state.nama ;
      if(this.state.nama == ''){
        alert('Silakan masukkan nama dan alamat');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=pesan";
          }else{
            var urlAksi = this.url+"/?op=pesan";
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"nama="+this.state.nama
          })
          .then((response)=>response.json())
          .then((json)=>{
              this.setState({nama:json.data.result[0].nama});
              this.setState({alamat:''});
              this.ambilListData();
			  this.props.navigation.navigate('DetailBayar', {	
jumlah_order :jumlah_order ,				
			totalreal : totalreal,
			 totalrupiah : totalrupiah})

               
          })
      }

  }
  async klikEdit(id){
    await fetch(this.url+"/?op=detail&id="+id)
    .then((response)=>response.json())
    .then((json)=>{
        this.setState({nama:json.data.result[0].nama});
       this.setState({idEdit:id})
	   
	   
	this.klikSimpan()   
	   
    })
  }
  async klikDelete(id){
    await fetch(this.url+"/?op=delete&id="+id)
    .then((response)=>response.json())
    .then((json)=>{
        alert('Data berhasil didelete');
        this.ambilListData();
    })
    .catch((error)=>{
        console.log(error)
    })
  }	
	
	
  render() {
	
  var jumlah_order =	this.props.route.params.jumlah_order; 
  
    var totalreal =	this.props.route.params.totalreal; 
	  var totalrupiah =	this.props.route.params.totalrupiah; 
    return (
      <ScrollView style={{backgroundColor: '#eaeaea'}}>
	    
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                // color: '#0d7883',
                alignSelf: 'flex-end',
                marginRight: 20,
                marginTop: 20,
                marginBottom: 20,
                fontSize: 16,
                fontWeight: 'bold',
color: 'gray',
                padding: 10,
              }}>
              Pilih Mitra Massage Perempuan
      
            </Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TotalTagihan')}>
              <Text
                style={{
                  color: '#0d7883',
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginTop: 20,
                  marginBottom: 20,
                  fontSize: 16,
                  fontWeight: 'bold',
color: 'gray',
                  padding: 10,
                }}>
                Batal Cari
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
              padding: 20,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
            }}>
            <Icon
              name="exclamation-triangle"
              size={20}
              color="orange"
              style={{
                padding: 7,
                marginLeft: -10,
              }}
            />
            <Text style={{marginLeft: 10, color: 'gray',}}>
              Anda dapat menerima atau menolak penawaran
            </Text>
          </View>
        </View>

        {/* 3 */}
        <View>
		  {
                this.state.listData.map((val,index)=>(
                    <View  key={index}>
					  <View
            style={{
              width: 340,
              backgroundColor: 'white',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 5,
            }}>
			<View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
			       <Image
                source={ProfilePhoto}
                style={{
                  width: 70,
                  marginBottom: 15,
                  marginTop: 15,
                  marginLeft: 15,
                  height: 70,
                  borderRadius: 50,
                }}
              />
                      <Text
                style={{
                  marginLeft: 25,
                  marginRight: 25,
                  marginTop: 25,
                  fontWeight: 'bold',
                  fontSize: 18,
				  color: 'gray',
                }}>{val.nama}</Text>

     
                    </View>
					 <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginTop: -15,
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
                <Text style={{fontSize: 14,color: 'gray',}}>4,9 (206)</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    textAlign: 'right',
                    marginTop: -20,
                    fontSize: 16,
                    marginRight: 20,color: 'gray',
                  }}>
               
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                // marginTop: -15,
              }}>
              <View>
                <Text style={{fontSize: 14, marginRight: 20, marginTop: -20, color: 'gray',}}>
                  Kewarganegaraan : Indonesia
                </Text>
              </View>
            </View>
            {/* usi tgl lahir */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>

			   
              <TouchableOpacity
onPress={()=>this.klikEdit(val.id)}
                style={styles.roundButton1}>
                <Text style={{color: 'white'}}>Pilih</Text>
              </TouchableOpacity>
            </View>
          </View>
                   
                    </View>
                ))
            }
        
         
        </View>
        {/* 2 */}
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0d7883',
  },
});
