import { Pressable, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { taskStyles } from "./ComponentStyle";
import { useNavigation } from "@react-navigation/native";
export default function Task(props) {
  // console.log(props.navigation);
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
    console.log("me:  ", props.me);
    console.log("at > ", index, " there is : ", props.myTasks[index]);
    // const updatedTasks = props.myTasks.toSpliced(index, 1);
    const updatedTasks = props.myTasks.filter((item)=>item!==props.myTasks[index])
    // updatedTasks.splice(index, 1);

    console.log("after deletion: \n", updatedTasks);
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
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
      <View style={taskStyles.container}>
        <TouchableOpacity onPress={deleteTask}>
          <Text>
            <AntDesign name="delete" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <Text>
            <MaterialIcons name="double-arrow" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
