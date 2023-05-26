import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffffa0",
  },
  main: {
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius:5,
    paddingVertical: 30,
    padding: 30,
    marginTop: 100,
    marginHorizontal: 25,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    // alignSelf: "center",
    // marginTop: 100,
    fontSize: 25,
    // backgroundColor: "red",
    // color: "white",
    // paddingHorizontal: 70,
    fontWeight:"bold"
  },
  descContainer: {
    marginTop: 20,
    backgroundColor:"#e9ebf7",
    padding: 20,
  },
  descTile: {
    fontSize: 17,
    color:"grey"
  },
  descContent: {
    marginTop: 15,
    alignSelf: "center",
    fontSize:22
  },
});
