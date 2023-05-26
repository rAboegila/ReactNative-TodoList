import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f6f7",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#ffffffa0",
  },
  main: {
    backgroundColor: "rgba(214, 214, 214,0.2)",
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
  },

  messageContainer: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
  },
  messageContent: { fontWeight: "light", color: "grey" },
});
