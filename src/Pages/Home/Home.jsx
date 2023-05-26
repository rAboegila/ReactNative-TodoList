import React, { useState } from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import { styles } from "./HomeStyle";
import Inputs from "../../components/Inputs/Inputs";
import Filters from "../../components/Filters/Filters";
import TaskList from "../../components/TaskList/TaskList";
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

  const [filter, setFilter] = useState("Active");

  return (
    <View style={styles.screen}>
      <ImageBackground source={image} resizeMode="repeat" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>My Todo List</Text>
          <Inputs setMyTasks={setMyTasks} />
          <View style={styles.main}>
            <Filters filter={filter} setFilter={setFilter} />
            <TaskList myTasks={myTasks} setMyTasks={setMyTasks} filter={filter}></TaskList>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
