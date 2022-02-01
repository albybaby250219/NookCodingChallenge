import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home_screen';
import JokeData from './joke_api';

const Stack = createStackNavigator();

export default class Joke extends Component {
  
  render() {
    return (
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Joke" component={JokeData} />
      </Stack.Navigator>
    )
  }
}