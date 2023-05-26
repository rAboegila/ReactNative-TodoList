import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getTasks,
  getFilter,
  getFilteredTasks,
  getNumTasks,
  getNumFilteredTasks,
} from "../../Redux/slices/taskSlice";

import { filters } from "../../Shared/types";
import Task from "../Task/Task";

import { styles } from "./TaskListStyle";

export default function TaskList() {
  const myTasks = useSelector(getTasks);
  const filter = useSelector(getFilter);
  const myFilteredTasks = useSelector(getFilteredTasks);

  const numTasks = () => {
    if (filter === filters.ALL) {
      return useSelector(getNumTasks);
    } else {
      return useSelector(getNumFilteredTasks);
    }
  };


  return (
    <View style={styles.tasks}>
      {numTasks() > 0 ? (
        <FlatList
          data={myFilteredTasks}
          renderItem={({ item }) => (
            <Task title={item.title} status={item.status} me={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.messageContent}>No Current Tasks!</Text>
        </View>
      )}
    </View>
  );
}
