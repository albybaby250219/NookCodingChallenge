import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import axios from "axios";

//function to call the Joke API
export default function JokeData(){ 

  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  //the default category is set to Any
  const [category, setCategory] = useState('Any');
  const [cat,setCat] = useState([]);
 
  //url for the API
  const url = `https://v2.jokeapi.dev/joke/${category}`
  let joke , msg, c  = "";

  useEffect(() => {
    //axios is used to handle the api call
    axios
              .get(url)
              .then(function (response) {
                // handle success
                joke = response.data.joke;
                c = response.data.category;
                console.log(joke)
                if (joke === "undefined" || joke === null || joke === ""){
                    msg = "There is no joke in the API"
                    setError(msg);
                }
                else{
                setData(joke);
                setCat(c);
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error.message)
                msg = error.message
                setError(msg)
              });
  }, [url]);

  return (
    <View style={styles.container}>
        {/* search filter based on category */}
        <TextInput
          placeholder="Category"
          placeholderTextColor="#fff"
          onChangeText={(val) => setCategory(val)}
          style={styles.input}
        />
        <View style={styles.joke_container}>
        <Text style={styles.joke}>{data}</Text>
        <Text style={styles.error}>{error}</Text>
        <Text style={styles.category}>{cat}</Text>
        </View>
    </View>
  );
};

// styles for the joke screen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      color: "#fff",
      paddingLeft: 15,
    },
    input: {
        backgroundColor: "#242c59",
        color: "#fff",
        margin: 15,
        height: 40,
        borderRadius: 10,
        borderColor: "#d4cfcf",
        borderWidth: 1,
        alignContent: "center",
        paddingLeft: 10,
      },
      joke_container:{
        borderRadius: 10,
        borderColor: "#d4cfcf",
        borderWidth: 1,
        padding:20,
        margin:10,
      },
      joke: {
        fontSize:20,
        fontStyle:"italic",
        color:"blue",
        alignContent: "center",
      },
      category:{
        fontSize:10,
        color:"black",
      },
      error:{
        color:"red",
      },
});