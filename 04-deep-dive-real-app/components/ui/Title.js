import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontSize: 15,
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: 10,
    borderColor: "white",
    paddingVertical: 10,
  },
});
