import { View, Text, FlatList } from "react-native";
import React from "react";

import { styles } from "./TaskListStyle";

import Task from "../Task/Task";

export default function TaskList({ myTasks, setMyTasks, filter }) {
  return (
    <View style={styles.tasks}>
      {myTasks.filter((task) => filter === "All" || task.status === filter)
        .length > 0 ? (
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
  );
}
