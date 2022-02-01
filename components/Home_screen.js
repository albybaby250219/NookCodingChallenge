import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About_screen';
import Contact from './Contact_screen';

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  
  render() {
    return (
      <Tab.Navigator>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    )
  }
}