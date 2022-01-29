import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";

export default function JokeData(){ 

    const url = `https://v2.jokeapi.dev/joke/Any`
  

  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [category, setCategory] = useState([]);
  let joke , msg, c  = "";

  useEffect(() => {
    axios
              .get(url)
              .then(function (response) {
                // handle success
                //alert(JSON.stringify(response.data));
                joke = response.data.joke;
                c = response.data.category;
                console.log(joke)
                setData(joke);
                setCategory(c);
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
        <Text>{data}</Text>
        <Text>{category}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      color: "#fff",
      paddingLeft: 15,
    },
});