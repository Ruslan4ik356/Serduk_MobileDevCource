import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  card: {
    marginBottom: 16,
    borderRadius: 15,
    overflow: "hidden",
  },

  image: {
    borderRadius: 15,
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  desc: {
    color: "#ddd",
    fontSize: 14,
  },
});
