import 'react-native-gesture-handler';
import  * as React from 'react';
import { Button, View, Text, StyleSheet, Platform } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Constants from 'expo-constants';
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect, useState, useRef } from 'react';
import Profile from './Profile_screen';
import Settings from './Settings_screen';
import Joke from './Joke_screen';

//notifications handler to handle the notification
Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }
    },
  })

  //function to create the custom drawer content(button)
function CustomDrawerContent(props) {
  
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  //receiving the notification
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        //to close the drawer
       props.navigation.closeDrawer();
       //to navigate to the joke screen
        props.navigation.navigate('Joke', {screen: 'Joke'});
        console.log(response);
    });


    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
    
    
  return (
    /*   <View>
    <Text>Your expo push token: {expoPushToken}</Text>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Title: {notification && notification.request.content.title} </Text>
      <Text>Body: {notification && notification.request.content.body}</Text>
      <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
    </View> */
    
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
      label="Show me a Joke" 
      //displaying the notification on pressing the drawer item
      onPress={async () => {
        await schedulePushNotification();
      }}
      focused = {true}
      activeBackgroundColor = "pink"/>
    </DrawerContentScrollView>
  );
}


//notification content to be displayed
async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Do you want to see a Joke?",
        body: 'Press here to see joke of your favorite category from a joke API',
        data: { },
      },
      trigger: { seconds: 2 },
    });
  }
  
//register the device for the push notification

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }
  
const Drawer = createDrawerNavigator();

//creating the drawer navigator
export default function MyDrawer() {
    
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType:'slide',
        drawerStyle: { backgroundColor:'#c6cbef', width: '100%' },
      }}
      initialRouteName= "Home"
      drawerContent={(props) => < CustomDrawerContent {...props} />}
    >
    <Drawer.Screen name="Home" component={Joke} />
    <Drawer.Screen name="Profile" component = {Profile} />
    <Drawer.Screen name="Settings" component = {Settings} />
    </Drawer.Navigator>
  );
}