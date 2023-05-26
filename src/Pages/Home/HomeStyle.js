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
  inputContainer: {
    padding: 15,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#ff001e",
    marginTop: 12,
    padding: 40,
    borderRadius: 20,
  },
  filters: {
    padding: 5,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  filter: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  filterText: { fontWeight: "500", color: "white" },
  tasks: {},
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  messageContainer: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
  },
  messageContent: { fontWeight: "light", color: "grey" },
});
