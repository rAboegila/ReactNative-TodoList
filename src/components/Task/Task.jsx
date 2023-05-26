import { Pressable, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { taskStyles } from "./TaskStyle";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { filters } from "../../Shared/types";
import {
  getFilter,
  filterApplied,
  taskStatusUpdated,
  taskRemoved,
} from "../../Redux/slices/taskSlice";
export default function Task(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const markAsDone = () => {
    dispatch(taskStatusUpdated({ task: props.me, newStatus: filters.DONE }));
    dispatch(filterApplied(filter));
  };

  const deleteTask = () => {
    dispatch(taskRemoved(props.me));
  };

  return (
    <View style={taskStyles.container}>
      <TouchableOpacity onPress={markAsDone}>
        <Text
          style={{
            textDecorationLine:
              props.status === filters.DONE && filter !== filters.DONE
                ? "line-through"
                : "none",
            fontSize: 15,
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
