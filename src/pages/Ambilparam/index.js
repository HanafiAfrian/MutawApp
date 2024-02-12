
import React, {Component , useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import {
  View,
  Button,
  StyleSheet,
  Text,
 
} from 'react-native';

// import {createDrawerNavigator} from '@react-navigation/drawer';



    export default function Ambilparam({ navigation, route }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
   
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
                      navigation.navigate('Splash');
                  } 
                } 

                   else  {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setAge(user.Age);
                        setEmail(user.Email);
                        
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
   
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <Text> {name} </Text>
			   <Text> {age} </Text>
			    </View>
             
              
          
              
        
    
    );
  
}
