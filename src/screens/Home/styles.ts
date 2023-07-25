import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 68,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1f1e25",
    color: "#ffffff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    flex: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
});
