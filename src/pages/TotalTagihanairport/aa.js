import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class aa extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('Formlogin')}>
            <Image source={IconBack} />
          </TouchableOpacity>
          <Text style={styles.welcome}>Daftar</Text>
        </View>
      </View>
    );
  }
}

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
    height: 80,
    backgroundColor: '#1b2333',
  },
});
