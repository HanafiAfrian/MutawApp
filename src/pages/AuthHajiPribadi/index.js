import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';

export default function Auth({ navigation, route }) {
const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
	  const [kategori, setKategori] = useState('');
	  	  const [kloter, setKloter] = useState(''); 
		  const [lokasi, setLokasi] = useState('');
 useEffect(() => {
        getData();
    }, []);
 const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {

                  if (value == null) {
                    {
                       AsyncStorage.clear();
                      navigation.navigate('Welcome');
                  } 
                } 

                
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                        setEmail(user.Email);
                        
                   
  if (user.Email == '') {
                    
						
        setTimeout( () => {
            navigation.replace('FooterTabCust',{telepon:age});
        }, 2)
             
                }

    else  {
		      setTimeout( () => {
            navigation.replace('FooterTabCust',{telepon:age});
        }, 2)
          }



                })
        } catch (error) {
            console.log(error);
        }
    }

    const updateData = async () => {
        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name
                }
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
                Alert.alert('Success!', 'Your data has been updated.');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Splash');
        } catch (error) {
            console.log(error);
        }
    }
  

    return (
        <View style={styles.body}>
     
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})