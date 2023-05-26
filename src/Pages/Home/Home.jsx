import React, { useState } from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import { styles } from "./HomeStyle";
import Inputs from "../../components/Inputs/Inputs";
import Filters from "../../components/Filters/Filters";
import TaskList from "../../components/TaskList/TaskList";
import { filters } from "../../Shared/types";
import image from "../../../assets/PatternUnit.png";
import { filterApplied } from "../../Redux/slices/taskSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  dispatch(filterApplied(filters.ACTIVE));
  return (
    <View style={styles.screen}>
      <ImageBackground source={image} resizeMode="repeat" style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>My Todo List</Text>
          <Inputs />
          <View style={styles.main}>
            <Filters />
            <TaskList></TaskList>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
