import React, { useState } from "react";
import {
  Pressable,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import { styles } from "./HomeStyle";
import Task from "../../components/Task";
import image from "../../../assets/PatternUnit.png";

const Home = (navigation) => {
  const Data = [
    {
      id: "task1",
      title: "Task One",
      description: "task one desc",
      status: "Active",
    },
    {
      id: "task2",
      title: "Task Two",
      description: "task two desc",
      status: "Active",
    },
    {
      id: "task3",
      title: "Task Three",
      description: "task three desc",
      status: "Done",
    },
    {
      id: "task4",
      title: "Task Four",
      description: "task four desc",
      status: "Active",
    },
    {
      id: "task5",
      title: "Task Five",
      description: "task five desc",
      status: "Done",
    },
  ];

  const [myTasks, setMyTasks] = useState(Data);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [filter, setFilter] = useState("Active");

  function generateTaskId() {
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
    const uuid = "task" + Array.from({ length: 32 }, randomHex).join("");
    return uuid;
  }
  const addTask = (title, description) => {
    const id = generateTaskId();
    const newTask = { id, title, description, status: "Active" };
    setMyTasks((curr) => [newTask, ...curr]);
    setTitleInput("");
    setDescInput("");
  };

  return (
    <View style={styles.screen}>
      <ImageBackground source={image} resizeMode="repeat" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>My Todo List</Text>
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
                <Text
                  style={{ ...styles.filterText, color: "white", fontSize: 15 }}
                >
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.filters}>
              <Pressable
                onPress={() => {
                  setFilter("All");
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor:
                      filter === "All"
                        ? "red"
                        : pressed
                        ? "#022b9e"
                        : "#0233ba",
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
                      filter === "Done"
                        ? "red"
                        : pressed
                        ? "rgb(4, 107, 4)"
                        : "green",
                  },
                  styles.filter,
                ]}
              >
                <Text style={styles.filterText}>Done</Text>
              </Pressable>
            </View>
            <View style={styles.tasks}>
              {myTasks.filter(
                (task) => filter === "All" || task.status === filter
              ).length > 0 ? (
                <FlatList
                  data={myTasks.filter(
                    (task) => filter === "All" || task.status === filter
                  )}
                  renderItem={({ item }) => (
                    <Task
                      title={item.title}
                      status={item.status}
                      myTasks={myTasks}
                      filter={filter}
                      setMyTasks={setMyTasks}
                      me={item}
                      navigation={navigation}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                />
              ) : (
                <View style={styles.messageContainer}>
                  <Text style={styles.messageContent}>No Current Tasks!</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
