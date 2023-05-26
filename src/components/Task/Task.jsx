import { Pressable, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { taskStyles } from "./TaskStyle";
import { useNavigation } from "@react-navigation/native";

export default function Task(props) {
  const navigation = useNavigation();

  const markAsDone = () => {
    const updatedTasks = props.myTasks.map((task) => {
      if (task.id === props.me.id) {
        return { ...task, status: "Done" };
      } else {
        return task;
      }
    });
    props.setMyTasks(updatedTasks);
  };

  const deleteTask = () => {
    const index = props.myTasks.indexOf(props.me);
    const updatedTasks = props.myTasks.filter(
      (item) => item !== props.myTasks[index]
    );

    props.setMyTasks(updatedTasks);
  };

  return (
    <View style={taskStyles.container}>
      <TouchableOpacity onPress={markAsDone}>
        <Text
          style={{
            textDecorationLine:
              props.status === "Done" && props.filter !== "Done"
                ? "line-through"
                : "none",
            fontSize: 17,
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
      <View style={taskStyles.container}>
        <TouchableOpacity onPress={deleteTask}>
          <Text style={{ marginHorizontal: 10 }}>
            <AntDesign name="delete" size={20} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { task: props.me })}
        >
          <Text style={{ marginHorizontal: 10 }}>
            <MaterialIcons name="double-arrow" size={20} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
