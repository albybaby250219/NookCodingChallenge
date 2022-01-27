import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.home_container}>
        <Text>Home</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    home_container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },

});