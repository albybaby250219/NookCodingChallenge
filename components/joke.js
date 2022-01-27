import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NotificationPopup from 'react-native-push-notification-popup';


export default class Joke extends Component {
    renderCustomPopup = ({ appTitle, timeText, title, body }) => (
        <View>
          <Text>{title}</Text>
          <Text>{body}</Text>
          <Button title='My button' onPress={() => console.log('Popup button onPress!')} />
        </View>
    );
  onPress = () => {
    return (
        <View style={styles.container}>
          <NotificationPopup
            ref={ref => this.popup = ref}
            renderPopupContent={this.renderCustomPopup}
            shouldChildHandleResponderStart={true}
            shouldChildHandleResponderMove={true} />
        </View>
      );

  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.onPress} >
          <Text>Show me a Joke</Text>
        </TouchableOpacity>
      </View>
    )
  }
  /*componentDidMount() {
    this.popup.show({
      onPress: function() {console.log('Pressed')},
      appTitle: 'Some App',
      timeText: 'Now',
      title: 'Hello World',
      body: 'This is a sample message.\nTesting emoji 😀',
      slideOutTime: 5000
    });
  }*/
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    button:{
        alignItems: "center",
        backgroundColor: "pink",
        padding: 10,
        color:"red",
        borderRadius:20,
    },

});