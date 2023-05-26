import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DetailStyle";
import image from "../../../assets/PatternUnit.png";

export default function TodoDetails({ route, navigation }) {
  const { task } = route.params;

  return (
    <ImageBackground source={image} resizeMode="repeat" style={styles.image}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.main}>
          <View>
            <Text style={styles.title}>{task.title}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.descTile}>Description</Text>
            <Text style={styles.descContent}>{task.description}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
