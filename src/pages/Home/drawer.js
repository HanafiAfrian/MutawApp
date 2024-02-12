import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Splash,
  Eksplor,
  Notifikasi,
  Profil,
  Home,
  Daftar,
  Login,
  Formlogin,
  Formdaftar,
  Lupapassword,
  Otp,
} from '../pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Drawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifikasi" component={Notifikasi} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default Drawer;
