import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';
import Doa from './../../assets/icons/doa.png';
import Adzan2 from './../../assets/icons/icnadzan.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import React, {Component , useState, useEffect } from 'react';
import {Text, StyleSheet, View, ScrollView, SafeAreaView,TouchableOpacity,Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
 function Jam() {
	  const date= new Date()
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <View className="App">
      <Text style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </Text>
    </View>
  );
}

 class Ambilwaktu extends Component {
  render() {
    const date= new Date()

 
    return (
      <View>
        <Text style={{
                      color: 'white',
                      marginLeft: -3,
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}> {moment(date).format('LL')} </Text>
      
 
      </View>
    )
  }
}
class Tanggalhijriyah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tanggal: '',
   
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/tanggal_hijriyah.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
 
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
  
    return (
         <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text  style={{
                      color: 'white',
                      marginLeft: 0,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>{val.tanggal}</Text>

                  
                ))
            }
        </View>
    );
  }
}

 export default class Adzan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tanggal: '',
   
      listData: [],
      idEdit: null,
	   date: new Date(),
    mode: 'date',
    tampil: false,
    };

    this.url = 'https://mutawif.co.id/api/muapi/adzan.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
 
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var name =	this.props.route.params.name; 
    var age =	this.props.route.params.age; 
	  var email =	this.props.route.params.email; 
	      var kloter =	this.props.route.params.kloter; 
	  var lokasi =	this.props.route.params.lokasi; 
	  	  var kategori =	this.props.route.params.kategori; 
    return (
	   <SafeAreaView style={{backgroundColor: '#222a32', flex: 1}}>
        <ScrollView style={{marginLeft: 10, marginRight: 10}}>
           <View>
            <View style={styles.textone}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
               
              </Text>
              <Icon name="compass" size={22} color="#fff" />
            </View>
			 <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                <Jam /><Text style={{fontWeight: 'normal'}}> </Text>
              </Text>
              <Text style={{textAlign: 'center', color: 'orange'}}>
               
              </Text>
            </View>
   <View style={styles.textone}>
              <Text></Text>
              <Icon name="calendar" size={22} color="#fff" />
            </View>
			  <View style={styles.textone}>
              <Text style={{color: 'white'}}><Ambilwaktu /></Text>
              <Text style={{color: 'white'}}><Tanggalhijriyah /> H</Text>
            </View>
			   </View>
			    
				 
            {
                this.state.listData.map((val,index)=>(
                    <View style={{marginBottom: 20}}>
					 <View>
              <View style={styles.boxsolat}>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>Subuh</Text>
                </View>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>
                    {val.Shubuh} <Icon name="clock-o" size={28} color="orange" />
                  </Text>
                </View>
              </View>
            </View>
			
			  <View>
              <View style={styles.boxsolat}>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>Terbit</Text>
                </View>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>
                    {val.Terbit} <Icon name="clock-o" size={28} color="orange" />
                  </Text>
                </View>
              </View>
            </View>
			  <View>
              <View style={styles.boxsolat}>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>Dzuhur</Text>
                </View>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>
                   {val.Dzuhur} <Icon name="clock-o" size={28} color="orange" />
                  </Text>
                </View>
              </View>
            </View>
			    <View>
              <View style={styles.boxsolat}>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>Ashar</Text>
                </View>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>
                 {val.Ashr} <Icon name="clock-o" size={28} color="orange" />
                  </Text>
                </View>
              </View>
            </View>
                         <View>
              <View style={styles.boxsolat}>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>Magrib</Text>
                </View>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>
                   {val.Maghrib}<Icon name="clock-o" size={28} color="orange" />
                  </Text>
                </View>
              </View>
            </View>
    <View>
              <View style={styles.boxsolat}>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>Isya</Text>
                </View>
                <View>
                  <Text style={{fontSize: 28, color: 'white'}}>
                    {val.Isya} <Icon name="clock-o" size={28} color="orange" />
                  </Text>
                </View>
              </View>
            </View>
			<Text>
					
					
					
					
					
					
					
					
					
					</Text>
</View>
                  
                ))
            }
      
		 </ScrollView>
		 <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 53,
                elevation: 1,
                borderRadius: 0,
                zIndex: 0,
                //marginTop: -65,
                position :'absolute',
				bottom:0,
				width:'100%',
				backgroundColor: 'white',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('HomeTravel',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}>
                  <Image
                  source={Beranda}
                    style={{
                      width: 30,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color:'gray'}}>Home</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('AdzanTravel',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}>
                  <Image
                    source={Adzan2}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
					 onPress={() => this.props.navigation.navigate('AdzanTravel',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}
                  />
                  <Text style={{marginBottom: 20,color:'orange'}}>Adzan</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  	   <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('NotifikasiTravel',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}>
                  <Image
                    source={Notifikasi}
                    style={{
                      width: 23,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20,color:'gray'}}>Notifikasi</Text>
                </TouchableOpacity>
              </View>
			  
			  
			  
			  
			  
			  
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
		
		
		
                <TouchableOpacity
                  onPress={() =>this.props.navigation.replace('DoaTravel',{name:name, age:age, email:email,kloter:kloter,lokasi:lokasi,kategori:kategori})}>
                  <Image
                    source={Doa}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
		
                    }}
                  />
				
                  <Text style={{marginBottom: 20,color:'gray'}}>Doa</Text>
                </TouchableOpacity>
              </View>
			  
			  
		
            </View>
	
	
	
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  textone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boxsolat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#161b21',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
