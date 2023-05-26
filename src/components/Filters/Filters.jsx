import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./FilterStyle";
export default function Filters({ filter, setFilter }) {
  return (
    <View style={styles.filters}>
      <Pressable
        onPress={() => {
          setFilter("All");
        }}
        style={({ pressed }) => [
          {
            backgroundColor:
              filter === "All" ? "red" : pressed ? "#022b9e" : "#0233ba",
          },
          styles.filter,
        ]}
      >
        <Text style={styles.filterText}>All</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setFilter("Active");
        }}
        style={({ pressed }) => [
          {
            backgroundColor:
              filter === "Active"
                ? "red"
                : pressed
                ? "rgb(217, 149, 2)"
                : "rgb(232, 160, 5)",
          },
          styles.filter,
        ]}
      >
        <Text style={styles.filterText}>Active</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setFilter("Done");
        }}
        style={({ pressed }) => [
          {
            backgroundColor:
              filter === "Done" ? "red" : pressed ? "rgb(4, 107, 4)" : "green",
          },
          styles.filter,
        ]}
      >
        <Text style={styles.filterText}>Done</Text>
      </Pressable>
    </View>
  );
}
