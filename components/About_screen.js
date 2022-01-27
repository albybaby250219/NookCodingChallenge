import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class About extends Component {
  render() {
    return (
      <View style={styles.about_container}>
        <Text>About</Text>
      </View>
    )
  }
}
const styles= StyleSheet.create({
    about_container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

});