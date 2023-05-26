import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./LandingStyle";
export default function App({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hello :)</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Let's Get Productive!</Text>
      </TouchableOpacity>
    </View>
  );
}
