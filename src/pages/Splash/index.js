import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SplashBackground, LogoTag} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Auth');
    }, 1000);
  }, [navigation]);

  return (
    <View style={{backgroundColor: '#19232b', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome To</Text>

        <Image
          source={LogoTag}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    color: '#eaeaea',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#19232b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: '#c19737',
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  logo: {
    width: 250,
    height: 50,
    marginTop: 5,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
