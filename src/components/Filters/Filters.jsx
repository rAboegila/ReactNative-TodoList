import { View, Text, Pressable } from "react-native";
import React from "react";

import { filters } from "../../Shared/types";
import { useSelector, useDispatch } from "react-redux";

import {
  getFilter,
  getNumFilteredTasks,
  filterApplied,
} from "../../Redux/slices/taskSlice";

import { styles } from "./FilterStyle";

export default function Filters() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <View style={styles.filters}>
      <Pressable
        onPress={() => {
          dispatch(filterApplied(filters.ALL));
        }}
        style={({ pressed }) => [
          {
            backgroundColor:
              filter === filters.ALL ? "red" : pressed ? "#022b9e" : "#0233ba",
          },
          styles.filter,
        ]}
      >
        <Text style={styles.filterText}>All</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(filterApplied(filters.ACTIVE));
        }}
        style={({ pressed }) => [
          {
            backgroundColor:
              filter === filters.ACTIVE
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
          dispatch(filterApplied(filters.DONE));
        }}
        style={({ pressed }) => [
          {
            backgroundColor:
              filter === filters.DONE
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
  );
}
