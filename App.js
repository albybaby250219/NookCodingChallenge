import 'react-native-gesture-handler';
import React from 'react';
import Home from './components/Home_screen';
import About from './components/About_screen';
import Contact from './components/Contact_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Joke from './components/joke';
import JokeData from './components/joke_api';
import MyDrawer from './components/button_drawer';

export default function App() {
  
  const Drawer = createDrawerNavigator();
  return (
    <>
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    <JokeData />
    </>
  );
}

