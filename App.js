import 'react-native-gesture-handler';
import React from 'react';
import Home from './components/Home_screen';
import About from './components/About_screen';
import Contact from './components/Contact_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Joke from './components/joke';

export default function App() {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
    <NavigationContainer>
       <Drawer.Navigator>
        <Drawer.Screen name = "Joke" component={Joke} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}

