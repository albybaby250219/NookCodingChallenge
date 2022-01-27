import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.contact_container}>
        <Text>Contact</Text>
      </View>
    )
  }
}
const styles= StyleSheet.create({
    contact_container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

});