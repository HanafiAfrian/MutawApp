import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconBack, BniIcon, CodIcon, CcIcon} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioButton from 'react-native-simple-radio-button-input';

export default class TarikSaldo extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('KursirodaOrder')}>
            <Icon
              name="chevron-left"
              size={20}
              color="#fff"
              style={{
                marginTop: -10,
                padding: 7,
                marginLeft: -10,
              }}
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>Notifikasi</Text>

          <View></View>
        </View>
      </ScrollView>
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
    marginTop: 20,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },
});
