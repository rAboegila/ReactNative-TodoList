import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./InputStyle";
export default function Inputs(props) {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  function generateTaskId() {
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
    const uuid = "task" + Array.from({ length: 32 }, randomHex).join("");
    return uuid;
  }
  const addTask = (title, description) => {
    const id = generateTaskId();
    const newTask = { id, title, description, status: "Active" };
    props.setMyTasks((curr) => [newTask, ...curr]);
    setTitleInput("");
    setDescInput("");
  };
  return (
    <View style={styles.inputContainer}>
      <View style={{ flex: 2 }}>
        <TextInput
          style={styles.input}
          onChangeText={setTitleInput}
          value={titleInput}
          placeholder="task title"
        />
        <TextInput
          style={styles.input}
          onChangeText={setDescInput}
          value={descInput}
          placeholder="task description"
        />
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addTask(titleInput, descInput)}
        >
          <Text style={{ ...styles.filterText, color: "white", fontSize: 15 }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
