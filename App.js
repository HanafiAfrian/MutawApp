
import React, {Component , useState, useEffect } from 'react';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase  from "@react-native-firebase/app";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  ImageBackground,
} from 'react-native';

 export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
   idToken :null,
   
    };

  }

 componentDidMount()  {
var firebaseConfig = {
  apiKey: "AIzaSyB5YPERkCxXmMudVXCYECUdYKslB_S6SWA",
  authDomain: "mutawifapp.firebaseapp.com",
  projectId: "mutawifapp",
  storageBucket: "mutawifapp.appspot.com",
  messagingSenderId: "269716772100",
  appId: "1:269716772100:web:52d329906c297d3396ec51"
};
if (!Firebase.apps.length){
	Firebase.initializeApp(firebaseConfig);		
} else {
	Firebase.app();
	
}

	 PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  
  onRegister: function (token) {
   console.log("TOKEN:", token);
  },
onRegister:(token) =>this.setState({idToken:token.token}),
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

 }

  render() {
  
    return (
         <View>
           
                                  
                      <Text>
					  {this.state.idToken}
                      </Text>
              
        
        </View>
    );
  }
}


