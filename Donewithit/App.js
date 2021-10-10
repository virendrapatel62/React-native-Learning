import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [counter, setCounter] = useState();

  useEffect(() => {
    if (!counter) {
      setInterval(() => {
        setCounter(new Date().toLocaleTimeString());
      }, 1000);
    }
  }, []);

  const handleClick = (event) => {
    console.log("Clicked....");
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Clicked {counter} Times</Text>
      <StatusBar style="auto" />

      <Button
        style={styles.button}
        onPress={handleClick}
        title="Increase Conuter"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
